<?php

namespace App\Http\Requests;

use App\Models\Address;
use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
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

        $property_type = implode(',', [Address::PROPERTY_TYPE_HOME, Address::PROPERTY_TYPE_COMPANY]);
        return [
            'customer_id' => 'required|integer|exists:customers,id',
            'province' => 'required|string|max:255',
            'district' => 'required|string|max:255',
            'ward' => 'required|string|max:255',
            'street_address' => 'required|string|max:255',
            "property_type" => "required|in:$property_type",
            'is_default' => 'boolean',
        ];
    }
    public function messages()
    {
        return [
            'customer_id' => ':attribute là bắt buộc',
            'customer_id.exists' => ':attribute không tồn tại trong hệ thống',
            'province' => ':attribute là bắt buộc',
            'district' => ':attribute là bắt buộc',
            'ward' => ':attribute là bắt buộc',
            'street_address' => ':attribute là bắt buộc',
            'property_type' => ':attribute là bắt buộc',
            'is_default.boolean' => ':attribute là giá trị đúng sai'
        ];
    }

    public function attributes()
    {
        return [
            'customer_id' => 'ID khách hàng',
            'province' => 'Tỉnh/Thành phố nhận hàng',
            'district' => 'Quận/Huyện nhận hàng',
            'ward' => 'Phường/Xã nhận hàng',
            'street_address' => 'Số nhà nhận hàng',
            'property_type' => 'Loại địa chỉ',
            'is_default' => 'Địa chỉ mặc định'
        ];
    }
}
