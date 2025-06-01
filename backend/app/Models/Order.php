<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{

    use HasFactory;
    const STATUS_RECEIVED = 'Đã nhận';
    const STATUS_PENDING = 'Chưa nhận'; // Hoặc PENDING, PROCESSING, etc.

    // Phương thức thanh toán
    const PAYMENT_CASH = 'Tiền mặt';
    const PAYMENT_BANK = 'Ngân Hàng';
    const PAYMENT_MOMO = 'Momo';

    protected $fillable = [
        'customer_id',
        'total_amount',
        'shipping_fee',
        'discount_amount',
        'shipping_province',
        'shipping_district',
        'shipping_ward',
        'shipping_street',
        'status',
        'payment_method',
    ];
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
    public function products()
    {
        return $this->belongsToMany(Product::class)->using(OrderDetail::class);
    }
}
