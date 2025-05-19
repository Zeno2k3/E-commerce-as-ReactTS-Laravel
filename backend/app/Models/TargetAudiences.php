<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TargetAudience extends Model
{
    use HasFactory;
    public $table = 'target_audienes';
    public $timestamps = false; // không sử dụng timestamp

    protected $primaryKey = 'id';
    protected $fillable = [
        'type' => 'Nam', // Cấu hình mặc định
    ];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
