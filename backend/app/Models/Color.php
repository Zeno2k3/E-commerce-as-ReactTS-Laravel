<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_color',
        'image_color',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class)->using(Image::class);
    }

    // public function product_color_size()
    // {
    //     return $this->hasMany(ProductColorSize::class);
    // }
}
