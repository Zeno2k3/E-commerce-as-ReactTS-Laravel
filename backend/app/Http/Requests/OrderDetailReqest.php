<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderDetailReqest extends FormRequest
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
            'order_id' => 'required|integer|exists:orders,id',
            'product_id' => 'required|integer|exists:products,id',
            'quantity' => 'required|integer'
        ];
    }
    public function messages()
    {
        return [
            'order_id' => ':attribute là bắt buộc',
            'order_id.exists' => ':attribute không tồn tại trong hệ thống',
            'product_id' => ':attribute là bắt buộc',
            'product_id.exists' => ':attribute không tồn tại trong hệ thống',
            'quantity' => ':attribute là bắt buộc'
        ];
    }

    public function attributes()
    {
        return [
            'order_id' => 'ID đơn hàng',
            'product_id' => 'ID sản phẩm',
            'quantity' => 'Số lượng sản phẩm'
        ];
    }
}
