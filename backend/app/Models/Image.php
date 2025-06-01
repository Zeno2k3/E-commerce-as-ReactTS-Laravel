<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Image extends Model
{
    use HasFactory;
    public $table = 'images';

    protected $fillable = [
        'url',
        'product_color_id'
    ];

    public function product_color()
    {
        return $this->belongsTo(ProductColor::class, 'product_color_id');
    }
}
