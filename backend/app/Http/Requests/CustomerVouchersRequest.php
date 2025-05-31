<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerVouchersRequest extends FormRequest
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
            'customer_id' => 'required|integer|exists:customers,id',
            'voucher_id' => 'required|integer|exists:vouchers,id',
            'status' => 'required|in:used,unused',
        ];
    }

    public function messages()
    {
        return [
            'customer_id' => ':attribute là bắt buộc',
            'customer_id.exists' => ':attribute không tồn tại trong hệ thống',
            'voucher_id' => ':attribute là bắt buộc',
            'voucher_id.exists' => ':attribute không tồn tại trong hệ thống',
            'status' => ':attribute là bắt buộc'
        ];
    }

    public function attributes()
    {
        return [
            'customer_id' => 'ID Khách hàng',
            'voucher_id' => 'ID Voucher',
            'status' => 'Trạng thái vocher của khách hàng'
        ];
    }
}
