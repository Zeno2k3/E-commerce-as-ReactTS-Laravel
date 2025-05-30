<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VoucherRequest extends FormRequest
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
            'value' => 'required|numeric|min:0',
            'max_discount' => 'nullable|numeric|min:0',
            'min_order_value' => 'required|numeric|min:0',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after_or_equal:start_time',
            'code' => 'required|string|unique:vouchers,code',
            'type' => 'required|in:fixed,percent',
            'is_active' => 'boolean',
        ];
    }

    public function messages()
    {
        return [
            'value' => ':attribute là bắt buộc.',
            'value.numeric' => ':attribute phải là một số.',
            'value.min' => ':attribute phải không âm.',

            'max_discount.numeric' => ':attribute phải là một số.',
            'max_discount.min' => ':attribute phải không âm.',

            'min_order_value' => ':attribute là bắt buộc.',
            'min_order_value.numeric' => ':attribute phải là một số.',
            'min_order_value.min' => ':attribute phải không âm.',

            'start_time' => ':attribute là bắt buộc.',
            'start_time.date' => ':attribute phải đúng định dạng ngày.',

            'end_time' => ':attribute là bắt buộc.',
            'end_time.date' => ':attribute phải đúng định dạng ngày.',
            'end_time.after_or_equal' => ':attribute phải sau hoặc bằng ngày bắt đầu.',

            'code' => ':attribute là bắt buộc.',
            'code.string' => ':attribute phải là chuỗi.',
            'code.unique' => ':attribute đã tồn tại.',

            'type' => ':attribute là bắt buộc.',
            'type.in' => ':attribute không hợp lệ.',

            'is_active.boolean' => ':attribute phải là true hoặc false.',
        ];
    }

    public function attributes()
    {
        return [
            'value' => 'Giá trị giảm',
            'max_discount' => 'Mức giảm tối đa',
            'min_order_value' => 'Giá trị đơn hàng tối thiểu',
            'start_time' => 'Ngày bắt đầu',
            'end_time' => 'Ngày kết thúc',
            'code' => 'Mã ưu đãi',
            'type' => 'Loại voucher',
            'is_active' => 'Trạng thái kích hoạt',
        ];
    }
}
