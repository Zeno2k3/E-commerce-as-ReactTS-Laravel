<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_code')->unique();
            $table->foreignId('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->string('name_product');
            $table->string('slug');
            $table->longText('description')->nullable();
            $table->longText('material')->nullable();
            $table->longText('customer_guide')->nullable();
            $table->double('original_price');
            $table->double('discount_percent')->default(0);
            $table->double('discount_price')->nullable();
            $table->string('banner')->nullable();
            $table->timestamps();
        });

        Schema::create('product_color', function (Blueprint $table) {
            $table->id();
            $table->string('name_color')->unique();
            $table->timestamps();
        });

        Schema::create('product_color_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('color_id')->references('id')->on('product_color')->onDelete('cascade');
            $table->string('url_image')->unique();
            $table->timestamps();
        });

        Schema::create('product_sizes', function (Blueprint $table) {
            $table->id();
            $table->string('name_size')->unique();
            $table->timestamps();
        });

        Schema::create('product_color_size', function (Blueprint $table) {
            $table->foreignId('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreignId('color_id')->references('id')->on('product_color')->onDelete('cascade');
            $table->foreignId('size_id')->references('id')->on('product_sizes')->onDelete('cascade');
            $table->primary(['product_id', 'color_id', 'size_id']);
            $table->integer('quantity')->unique();
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
        Schema::dropIfExists('product_color');
        Schema::dropIfExists('product_sizes');
        Schema::dropIfExists('product_color_size');
        Schema::dropIfExists('product_images');
    }
};
