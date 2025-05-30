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

    public function voucher_to_customer()
    {
        return $this->hasMany(CustomerVoucherModel::class);
    }
}
