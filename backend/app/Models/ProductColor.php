<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductColor extends Model
{
    use HasFactory;

    public $table = 'product_color';
    protected $fillable = [
        'product_id',
        'color_id',
        'quantity'
    ];

    public function products()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function colors()
    {
        return $this->belongsTo(Product::class, 'color_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
