<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductColorSize extends Model
{

    use HasFactory;

    public $table = 'product_color_sizes';
    public $incrementing = false; // Khóa chính không tự động tăng
    public $timestamps = false; // không sử dụng timestamp
    protected $primaryKey = ['color_id', 'size_id', 'product_id'];
    protected $fillable = [
        'color_id',
        'size_id',
        'product_id',
    ];

    public function product_color()
    {
        return $this->belongsTo(ProductColor::class, 'color_id');
    }
    public function product_size()
    {
        return $this->belongsTo(ProductSize::class, 'size_id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
