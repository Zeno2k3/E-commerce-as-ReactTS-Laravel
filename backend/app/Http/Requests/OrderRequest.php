<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Order;

class OrderRequest extends FormRequest
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
        $statuses = implode(',', [Order::STATUS_RECEIVED, Order::STATUS_PENDING]);
        $paymentMethods = implode(',', [Order::PAYMENT_CASH, Order::PAYMENT_BANK, Order::PAYMENT_MOMO]);
        return [

            'customer_id' => 'required|integer|exists:customers,id',
            'total_amount' => 'required|numeric|min:0',
            'shipping_fee' => 'nullable|numeric|min:0',
            'discount_amount' => 'nullable|numeric|min:0',
            'shipping_province' => 'required|string|max:255',
            'shipping_district' => 'required|string|max:255',
            'shipping_ward' => 'required|string|max:255',
            'shipping_street' => 'required|string|max:255',
            'status' => "required|in:$statuses",
            'payment_method' => "required|in:$paymentMethods",
        ];
    }

    public function messages()
    {
        return [
            'customer_id' => ':attribute là bắt buộc',
            'customer_id.exists' => ':attribute không tồn tại trong hệ thống',
            'total_amount' => ':attribute là bắt buộc',
            'total_amount.min' => ':attribute không âm',
            'shipping_fee' => ':attribute không âm',
            'discount_amount' => ':attribute không âm',
            'shipping_province' => ':attribute là bắt buộc',
            'shipping_district' => ':attribute là bắt buộc',
            'shipping_ward' => ':attribute là bắt buộc',
            'shipping_street' => ':attribute là bắt buộc',
            'status' => ':attribute là bắt buộc',
            'payment_method' => ':attribute là bắt buộc',
        ];
    }
    public function attributes()
    {
        return [
            'customer_id' => 'ID khách hàng',
            'total_amount' => 'Tổng giá trị đơn hàng',
            'shipping_fee' => 'Chi phí giao hàng',
            'discount_amount' =>  'Chiết khấu đơn hàng',
            'shipping_province' => 'Tỉnh/Thành phố nhận hàng',
            'shipping_district' => 'Quận/Huyện nhận hàng',
            'shipping_ward' => 'Phường/Xã nhận hàng',
            'shipping_street' => 'Số nhà nhận hàng',
            'status' => 'Trạng thái đơn hàng',
            'payment_method' => 'Hình thức thanh toán',
        ];
    }
}
