<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * 
 *
 * @property int $customer_id
 * @property int $product_id
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Favorite newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Favorite newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Favorite query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Favorite whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Favorite whereCustomerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Favorite whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Favorite whereUpdatedAt($value)
 */
	class Favorite extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $customer_id
 * @property string $order_date
 * @property float $total_amount
 * @property float $shipping_fee
 * @property float $discount_amount
 * @property string $shipping_province
 * @property string $shipping_district
 * @property string $shipping_ward
 * @property string $shipping_street
 * @property string $status
 * @property string $payment_method
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property-read \App\Models\Customer $customer
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OrderDetail> $orderDetails
 * @property-read int|null $order_details_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereCustomerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereDiscountAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereOrderDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order wherePaymentMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereShippingDistrict($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereShippingFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereShippingProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereShippingStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereShippingWard($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereTotalAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Order whereUpdatedAt($value)
 */
	class Order extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $order_id
 * @property int $product_id
 * @property int $quantity
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property-read \App\Models\Order $order
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail whereOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderDetail whereUpdatedAt($value)
 */
	class OrderDetail extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $product_code
 * @property int $category_id
 * @property string $name
 * @property string|null $description
 * @property string|null $material
 * @property string|null $customer_guide
 * @property float $original_price
 * @property float $discount_percent
 * @property float|null $discount_price
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property-read \App\Models\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Favorite> $faviorites
 * @property-read int|null $faviorites_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OrderDetail> $oderDetails
 * @property-read int|null $oder_details_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductColorSize> $productColorSize
 * @property-read int|null $product_color_size_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereCustomerGuide($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereDiscountPercent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereDiscountPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereMaterial($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereOriginalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereProductCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereUpdatedAt($value)
 */
	class Product extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $color
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductColorSize> $product_color_size
 * @property-read int|null $product_color_size_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColor query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColor whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColor whereUpdatedAt($value)
 */
	class ProductColor extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $color_id
 * @property int $size_id
 * @property int $product_id
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property-read \App\Models\Product $product
 * @property-read \App\Models\ProductColor $product_color
 * @property-read \App\Models\ProductSize $product_size
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize whereColorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize whereSizeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductColorSize whereUpdatedAt($value)
 */
	class ProductColorSize extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductColorSize> $product_color_size
 * @property-read int|null $product_color_size_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductSize newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductSize newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ProductSize query()
 */
	class ProductSize extends \Eloquent {}
}

