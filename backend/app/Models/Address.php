<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Address extends Model
{
    use HasFactory;
    protected $table = 'addresses';
    protected $primaryKey = 'id';

    const PROPERTY_TYPE_HOME = 'Nhà riêng';
    const PROPERTY_TYPE_COMPANY = 'Công ty';

    protected $fillable = [
        'customer_id',
        'province',
        'district',
        'ward',
        'street_address',
        'property_type',
        'is_default',
    ];
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
