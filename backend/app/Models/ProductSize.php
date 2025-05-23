<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSize extends Model
{
    public $table = 'product_size';
    
    protected $primaryKey = 'id';
    protected $fillable = [
        'name_size',
        'created_at',
        'updated_at',
    ];

    public function product_color_size()
    {
        return $this->hasMany(ProductColorSize::class);
    }
}
