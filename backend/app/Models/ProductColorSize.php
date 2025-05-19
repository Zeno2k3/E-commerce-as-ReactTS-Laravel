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


// Schema::create('product_color_sizes', function (Blueprint $table) {
//             $table->foreignId('color_id')->references('id')->on('product_color')->onDelete('cascade');
//             $table->foreignId('size_id')->references('id')->on('product_sizes')->onDelete('cascade');
//             $table->foreignId('product_id')->references('id')->on('products')->onDelete('cascade');
//             $table->primary(['color_id', 'size_id', 'product_id'])->unique();
//             $table->timestamps();
//         });