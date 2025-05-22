<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    public $table = 'favorites';
    protected $primaryKey = ['customer_id', 'product_id'];
    public $incrementing = false;

    protected $fillable = [
        'customer_id',
        'product_id',
    ];

    public function user()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
