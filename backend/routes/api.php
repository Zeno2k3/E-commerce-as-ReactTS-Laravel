<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\VoucherController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SizeController;
use Illuminate\Support\Facades\Route;


Route::apiResource('customers', CustomerController::class);
Route::get('customers/{customer}/addresses', [CustomerController::class, 'getAddresses']);

Route::apiResource('products', ProductController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('vouchers', VoucherController::class);
Route::apiResource('colors', ColorController::class);
Route::apiResource('sizes', SizeController::class);
Route::apiResource('orders', OrderController::class);
Route::apiResource('address', AddressController::class);
