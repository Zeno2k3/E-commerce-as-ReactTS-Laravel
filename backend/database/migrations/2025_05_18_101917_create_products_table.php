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
            $table->string('name');
            $table->longText('description')->nullable();
            $table->longText('material')->nullable();
            $table->longText('customer_guide')->nullable();
            $table->double('original_price');
            $table->double('discount_percent')->default(0);
            $table->double('discount_price')->nullable();
            $table->string('banner')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
