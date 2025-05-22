<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            'slug' => 'required|string|max:255|unique:categories,slug',
            'type' => 'nullable|in:Nam,Nữ,Bé trai,Bé gái',
            'parent_id' => 'nullable|exists:categories,id',
        ];
    }

    public function messages()
    {
        return [
            'name' => ':attribute là bắt buộc.',
            'slug' => ':attribute là bắt buộc.',
            'slug.unique' => 'Slug đã tồn tại.',
            'type' => ':attribute là bắt buộc.',
            'parent_id.exists' => 'Danh mục cha không tồn tại.',
        ];
    }
    public function attributes()
    {
        return [
            'name' => 'Tên danh mục',
            'slug' => 'Slug',
            'type' => 'Loại danh mục',
            'parent_id' => 'Danh mục cha',
        ];
    }
}
