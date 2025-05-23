<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerVoucherModel extends Model
{
    public $table = 'customer_voucher';
    protected $primaryKey = ['customer_id', 'voucher_id'];

    protected $fillable = [
        'customer_id',
        'voucher_id',
        'status',
        'created_at',
        'updated_at',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function voucher()
    {
        return $this->belongsTo(Voucher::class, 'voucher_id');
    }
}
