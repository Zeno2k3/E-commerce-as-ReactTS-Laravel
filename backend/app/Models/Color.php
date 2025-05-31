<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    public $table = 'color';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name_color',
        'image_color'
    ];

    

    public function product_color_size()
    {
        return $this->hasMany(ProductColorSize::class);
    }
}
