<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'required|string|max:10',
            'otp' => 'required|string|max:6',
            'otp_time' => 'required|date_format:Y-m-d H:i:s',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => ':attributes là bắt buộc',
            'name.max' => ':attributes không được vượt quá 255 ký tự',
            'email.email' => ':attributes email không hợp lệ',
            'email.max' => ':attributes không được vượt quá 255 ký tự',
            'phone.required' => ':attributes  là bắt buộc',
            'phone.string' => ':attributes phải là một chuỗi ký tự',
            'phone.max' => ':attributes không được vượt quá 10 ký tự',
            'otp.required' => ':attributes là bắt buộc',
            'otp.string' => ':attributes phải là một chuỗi ký tự',
            'otp.max' => ':attributes không được vượt quá 6 ký tự',
            'otp_time.required' => ':attributes là bắt buộc',
        ];
    }
    public function attributes()
    {
        return [
            'name' => 'Họ tên',
            'email' => 'Email',
            'phone' => 'Số điện thoại',
            'otp' => 'Mã OTP',
            'otp_time' => 'Thời gian OTP',
        ];
    }
}
