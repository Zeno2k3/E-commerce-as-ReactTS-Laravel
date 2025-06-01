<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SizeRequest extends FormRequest
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
            'name_size' => 'required|string|regex:/^[A-Z0-9]+$/|unique:sizes,name_size'
        ];
    }

    public function messages()
    {
        return [
            'name_size' => ':attribute là bắt buộc',
            'name_size.string' => ':attribute phải là chuỗi',
            'name_size.unique' => ':attribute đã tồn tại',
            'name_size.regex' => ':attribute không đúng định dạng'
        ];
    }

    public function attributes()
    {
        return [
            'name_size' => 'Tên size'
        ];
    }
}
