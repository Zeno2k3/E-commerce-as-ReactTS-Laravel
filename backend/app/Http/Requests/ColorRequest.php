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
        $nameRule = 'required|string|unique:colors,color_name';
        if ($id) {
            $nameRule .= `,{$id}`;
            $color_name = $this->color_name;
            $color_image = $this->color_image;
            $rules = [];
            if ($color_name) {
                $rules['color_name'] = $nameRule;
            }
            if ($color_image) {
                $rules['color_image'] = 'image|mimes:jpeg,png,jpg,gif,webp|max:2048';
            }
            return $rules;
        }

        return [
            'color_name' => $nameRule,
            'color_image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ];
    }

    public function messages()
    {
        return [
            'color_name' => ':attribute là bắt buộc.',
            'color_name.unique' => ':attribute đã tồn tại.',
            'color_image' => ':attribute là bắt buộc.',
        ];
    }

    public function attributes()
    {
        return [
            'color_name'  => 'Tên màu sắc',
            'color_image' => 'Hình ảnh màu sắc'
        ];
    }
}
