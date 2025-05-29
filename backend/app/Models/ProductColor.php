<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductColor extends Model
{
    public $table = 'product_color';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name_color',
        'image_color'
    ];

    public function product_image()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function product_color_size()
    {
        return $this->hasMany(ProductColorSize::class);
    }
}
