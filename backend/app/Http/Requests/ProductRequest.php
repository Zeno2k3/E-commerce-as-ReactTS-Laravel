<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            'product_code'      => 'required|string|unique:products,product_code',
            'name_product'      => 'required|string|max:255',
            'description'       => 'nullable|string',
            'material'          => 'nullable|string',
            'customer_guide'    => 'nullable|string',
            'original_price'    => 'required|numeric',
            'discount_percent'  => 'nullable|numeric',
            'discount_price'    => 'nullable|numeric',
            'category_id'       => 'required|exists:categories,id',
            'banner'            => 'nullable|string|max:2048',
            'sizes'             => 'required|array|min:1',
            'colors'            => 'required|array|min:1',
        ];
    }
    public function messages()
    {
        return [
            'product_code' => ':attribute là bắt buộc.',
            'product_code.unique' => ':attribute đã tồn tại.',
            'name_product' => ':attribute là bắt buộc.',
            'original_price' => ':attribute là bắt buộc.',
            'category_id' => ':attribute là bắt buộc.',
            'category_name.exists' => ':attribute tồn tại.',
            'banner.image' => 'Tệp tải lên phải là hình ảnh.',
            'banner.mimes' => 'Hình ảnh phải có định dạng jpeg, png, jpg hoặc gif.',
            'banner.max' => 'Kích thước hình ảnh không được vượt quá 2MB.',
            'sizes' => ':attribute là bắc buộc',
            'sizes.min' => ':attribute tối thiểu 1 phần tử',
            'colors' => ':attribute là bắc buộc',
            'colors.min' => ':attribute tối thiểu 1 phần tử'
        ];
    }

    public function attributes()
    {
        return [
            'product_code' => 'Mã sản phẩm',
            'name_product' => 'Tên sản phẩm',
            'description' => 'Mô tả sản phẩm',
            'material' => 'Chất liệu',
            'customer_guide' => 'Hướng dẫn sử dụng',
            'original_price' => 'Giá gốc',
            'discount_percent' => 'Phần trăm giảm giá',
            'discount_price' => 'Giá giảm',
            'category_id' => 'Mã thể loại của sản phẩm',
            'banner' => 'Hình ảnh quảng bá sản phẩm',
            'sizes' => 'Mảng kích thước',
            'colors' => 'Mảng màu sắc'
        ];
    }
}
