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
            $table->longText('description')->nullable();
            $table->longText('material')->nullable();
            $table->longText('customer_guide')->nullable();
            $table->double('original_price');
            $table->double('discount_percent')->default(0);
            $table->double('discount_price')->nullable();
            $table->string('banner')->nullable();
            $table->timestamps();
        });

        Schema::create('colors', function (Blueprint $table) {
            $table->id();
            $table->string('color_name')->unique();
            $table->string('color_image');
            $table->timestamps();
        });

        Schema::create('product_color', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignId('color_id')->constrained('colors')->onDelete('cascade'); // Đã sửa: references('id')->on('colors')
            $table->integer('quantity');
            $table->unique(['product_id', 'color_id']); 
            $table->timestamps();
        });

        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->foreignId('product_color_id')->references('id')->on('product_color')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('sizes', function (Blueprint $table) {
            $table->id();
            $table->string('name_size')->unique();
            $table->timestamps();
        });

        Schema::create('product_color_size', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreignId('color_id')->references('id')->on('colors')->onDelete('cascade');
            $table->foreignId('size_id')->references('id')->on('sizes')->onDelete('cascade');
            $table->unique(['product_id', 'color_id', 'size_id']);
            $table->integer('quantity');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_color_size'); // Phụ thuộc vào product_color và sizes
        Schema::dropIfExists('images');             // Phụ thuộc vào product_color
        Schema::dropIfExists('product_color');      // Phụ thuộc vào products và colors
        Schema::dropIfExists('sizes');              // Bảng cơ bản
        Schema::dropIfExists('colors');             // Bảng cơ bản
        Schema::dropIfExists('products');           // Bảng cơ bản
    }
};
