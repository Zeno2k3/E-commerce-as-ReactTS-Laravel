<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\CustomerVoucher;

class Customer extends Model
{
    use HasFactory; // kết nôi database tương ứng

    // Gán nhiều thuộc tính cùng lúc;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'gender',
        'otp_code',
        'otp_expires_at',
    ];

    protected $casts = [
        'otp_expires_at' => 'datetime',
    ];


    // quan hệ
    public function addresses()
    {
        return $this->hasMany(Address::class); // chỉ định có nhiều address thuộc về Customer
    }
    public function orders()
    {
        return $this->hasMany(Order::class); // chỉ định có nhiều order thuộc về Customer
    }
    public function vouchers()
    {
        return $this->belongsToMany(Voucher::class)->using(CustomerVoucher::class);
    }
    public function favorites()
    {
        return $this->belongsToMany(Product::class)->using(Favorite::class);
    }
}
