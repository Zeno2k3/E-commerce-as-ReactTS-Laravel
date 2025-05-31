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
            'phone' => [
                'bail',
                'required',
                'string',
                'regex:/^(03|05|07|08|09)[0-9]{8}$/',
                'unique:customers,phone',
            ],
            'otp' => 'bail|required|string|regex:/^[0-9]{4}$/',
            'otp_time' => 'required|date_format:Y-m-d H:i:s',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => ':attribute là bắt buộc.',
            'name.string' => ':attribute phải là chuỗi ký tự.',
            'name.max' => ':attribute không được vượt quá 255 ký tự.',

            'email.email' => ':attribute không đúng định dạng.',
            'email.max' => ':attribute không được vượt quá 255 ký tự.',

            'phone.required' => ':attribute là bắt buộc.',
            'phone.string' => ':attribute phải là chuỗi ký tự.',
            'phone.regex' => ':attribute chỉ được chứa các chữ số (0-9) hoặc hơn 10 ký tự',
            'phone.unique' => ':attribute đã tồn tại trong hệ thống.',

            'otp.required' => ':attribute là bắt buộc.',
            'otp.string' => ':attribute phải là chuỗi ký tự.',
            'otp.regex' => ':attribute chỉ được chứa các chữ số (0-9) hoặc hơn 10 ký tự',
            'otp.size' => ':attribute phải gồm đúng 4 chữ số.',

            'otp_time.required' => ':attribute là bắt buộc.',
            'otp_time.date_format' => ':attribute phải có định dạng Y-m-d H:i:s.',
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
