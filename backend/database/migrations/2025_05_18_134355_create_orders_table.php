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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->date('order_date');
            $table->double('total_amount');// tổng đơn hàng
            $table->double('shipping_fee')->default(0); // chi phí vận chuyển
            $table->double('discount_amount')->default(0); // Giảm giá
            $table->string('shipping_province');
            $table->string('shipping_district');

            $table->string('shipping_ward');
            $table->string('shipping_street');
            
            $table->enum('status', ['Đã nhận', 'Chưa nhận'])->default('Chưa nhận');
            $table->string('payment_method');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
