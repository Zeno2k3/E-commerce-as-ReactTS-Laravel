<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    public $table = 'categories';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'slug',
        'type',
        'parent_id',
        'created_at',
        'updated_at',
    ];
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
