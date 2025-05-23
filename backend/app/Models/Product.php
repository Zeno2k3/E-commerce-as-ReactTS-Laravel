<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $table = 'products';
    protected $primaryKey = 'id';
    protected $fillable = [
        'product_code',
        'name_product',
        'slug',
        'description',
        'material',
        'customer_guide',
        'original_price',
        'discount_percent',
        'discount_price',
        'category_id',
        'banner',
        'created_at',
        'updated_at',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id'); // thuộc về Category
    }

    public function oderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
    public function productColorSize()
    {
        return $this->hasMany(ProductColorSize::class);
    }
    public function faviorites()
    {
        return $this->hasMany(Favorite::class);
    }
}
