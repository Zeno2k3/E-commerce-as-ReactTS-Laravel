<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ColorRequest extends FormRequest
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
        $id = $this->route()->color;
        $nameRule = 'required|string|unique:product_color,name_color';
        if ($id) {
            $nameRule .= `,{$id}`;
            $name_color = $this->name_color;
            $image_color = $this->image_color;
            $rules = [];
            if ($name_color) {
                $rules['name_color'] = 'string|unique:product_color,name_color';
            }
            if ($image_color) {
                $rules['image_color'] = 'image|mimes:jpeg,png,jpg,gif,webp|max:2048';
            }
            return $rules;
        }

        return [
            'name_color' => $nameRule,
            'image_color' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ];
    }

    public function messages()
    {
        return [
            'name_color' => ':attribute là bắt buộc.',
            'name_color.unique' => ':attribute đã tồn tại.',
            'image_color' => ':attribute là bắt buộc.',
        ];
    }

    public function attributes()
    {
        return [
            'name_color'  => 'Tên màu sắc',
            'image_color' => 'Hình ảnh màu sắc'
        ];
    }
}
