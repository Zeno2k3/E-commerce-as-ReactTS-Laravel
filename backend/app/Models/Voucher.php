<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Voucher extends Model
{
    use hasFactory;

    public $table = 'vouchers';
    protected $primaryKey = 'id';

    protected $fillable = [
        'value',
        'start_time',
        'end_time',
        'max_discount',
        'min_order_value',
        'code',
        'type',
        'is_active',
    ];

    public function customers()
    {
        return $this->belongsToMany(Customer::class, 'customer_voucher', 'voucher_id', 'customer_id');
    }
}
