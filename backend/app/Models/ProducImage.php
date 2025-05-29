<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductImage extends Model
{
    use HasFactory;
    public $table = 'product_image';
    protected $fillable = [
        'image',
        'color_id',
        'product_id'
    ];

    public function product_color()
    {
        return $this->belongsTo(ProductColor::class, 'color_id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class, "product_id");
    }
}
