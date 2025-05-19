<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    use HasFactory; // kết nôi database tương ứng
    // Khai báo các trường thuộc tính tương ứng với database.
    public $timestamps = false; 
    protected $table = 'customers';
    protected $primaryKey = 'id';
    
    // Gán nhiều thuộc tính cùng lúc;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'gender '
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
        return $this->hasMany(Voucher::class); // chỉ định có nhiều voucher thuộc về Customer
    }
    public function favorites()
    {
        return $this->hasMany(Favorite::class); // chỉ định có nhiều favorite thuộc về Customer
    }
}
