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

        $id = $this->route()->voucher;
        $codeRules = 'required|string|unique:vouchers,code';

        if ($id) {
            $codeRules .= ",{$id}";
            $rules = [];

            $value = $this->value;
            $max_discount = $this->max_discount;
            $min_order_value = $this->min_order_value;
            $start_time = $this->start_time;
            $end_time = $this->end_time;
            $code = $this->code;
            $type = $this->type;
            $is_active = $this->is_active;

            if ($value) {
                $rules['value'] = 'numeric|min:0';
            }
            if ($max_discount) {
                $rules['max_discount'] = 'numeric|min:0';
            }
            if ($min_order_value) {
                $rules['min_order_value'] = 'numeric|min:0';
            }
            if ($start_time) {
                $rules['start_time'] = 'date';
            }
            if ($end_time) {
                $rules['end_time'] = 'date|after_or_equal:start_time';
            }
            if ($code) {
                $rules['code'] = $codeRules;
            }
            if ($type) {
                $rules['type'] = 'in:fixed,percent';
            }
            if ($is_active) {
                $rules['is_active'] = 'boolean';
            }
            return $rules;
        }

        return [
            'value' => 'required|numeric|min:0',
            'max_discount' => 'nullable|numeric|min:0',
            'min_order_value' => 'required|numeric|min:0',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after_or_equal:start_time',
            'code' => $codeRules,
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
