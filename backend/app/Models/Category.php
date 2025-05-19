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
        'target_audiences_id',
    ];

    public function targetAudience()
    {
        return $this->belongsTo(TargetAudience::class, 'target_audiences_id');
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
