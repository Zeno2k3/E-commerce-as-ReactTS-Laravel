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
        'product_color_id',
    ];

    public function product_color()
    {
        return $this->hasMany(ProductColor::class, 'product_color_id');
    }
}
