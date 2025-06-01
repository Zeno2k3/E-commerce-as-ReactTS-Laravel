<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_code',
        'name_product',
        'description',
        'material',
        'customer_guide',
        'original_price',
        'discount_percent',
        'discount_price',
        'category_id',
        'banner',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id'); // thuộc về Category
    }

    public function customers()
    {
        return $this->belongsToMany(Customer::class, 'favorites')->using(Favorite::class);
    }
    public function orders()
    {
        return $this->belongsToMany(Order::class)->using(OrderDetail::class);
    }
    public function colors()
    {
        return $this->belongsToMany(Color::class)->using(ProductColor::class);
    }
    public function productVariants()
    {
        return $this->hasMany(ProductColorSize::class, 'product_id');
    }
}
