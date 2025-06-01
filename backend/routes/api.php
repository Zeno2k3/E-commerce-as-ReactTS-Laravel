<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\VoucherController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\CustomerVoucherController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SizeController;
use App\Models\CustomerVoucher;
use App\Models\Favorite;
use Illuminate\Support\Facades\Route;


Route::apiResource('customers', CustomerController::class);
Route::get('customers/{customer}/addresses', [CustomerController::class, 'getAddresses']);
Route::get('customers/{customer}/orders', [CustomerController::class, 'getOrders']);

Route::apiResource('customer_voucher', CustomerVoucherController::class);
Route::apiResource('favorites', FavoriteController::class);

Route::apiResource('products', ProductController::class);
Route::apiResource('categories', CategoryController::class);
Route::get('categories/{category}/products', [CategoryController::class, 'getProduct']);

Route::apiResource('vouchers', VoucherController::class);
Route::apiResource('colors', ColorController::class);
Route::apiResource('sizes', SizeController::class);
Route::apiResource('orders', OrderController::class);
Route::apiResource('address', AddressController::class);
