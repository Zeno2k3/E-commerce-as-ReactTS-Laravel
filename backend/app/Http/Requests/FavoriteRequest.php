<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FavoriteRequest extends FormRequest
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
            'product_id' => 'required|integer|exists:products,id',
        ];
    }

    public function messages()
    {
        return [
            'customer_id' => ':attribute là bắt buộc',
            'customer_id.exists' => ':attribute không tồn tại trong hệ thống',
            'product_id' => ':attribute là bắt buộc',
            'product_id.exists' => ':attribute không tồn tại trong hệ thống',
        ];
    }

    public function attributes()
    {
        return [
            'customer_id' => 'ID Khách hàng',
            'product_id' => 'ID Sản Phẩm'
        ];
    }
}
