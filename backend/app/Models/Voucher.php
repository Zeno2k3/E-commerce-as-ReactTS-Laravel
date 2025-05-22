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
        'min_discount',
        'code',
        'is_active' => false,
        'customer_id',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
