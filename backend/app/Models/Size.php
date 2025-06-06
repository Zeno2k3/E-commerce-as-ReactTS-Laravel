<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;
    public $table = 'sizes';
    protected $fillable = [
        'name_size',
    ];

    public function productVariants()
    {
        return $this->hasMany(ProductColorSize::class, 'size_id');
    }
}
