<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{

    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'customer_id',
        'order_date',
        'total_amount',
        'shipping_fee' => 0,
        'discount_amount' => 0,
        'shipping_province',
        'shipping_district',
        'shipping_ward',
        'shipping_street',
        'status' => 'Chưa nhận',
        'payment_method'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
}
