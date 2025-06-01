<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductColorSize extends Pivot
{
    use HasFactory;

    public $table = 'product_color_size';

    protected $fillable = [
        'color_id',
        'size_id',
        'product_id',
        'quantity',
    ];

    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }
    public function size()
    {
        return $this->belongsTo(Size::class, 'size_id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
