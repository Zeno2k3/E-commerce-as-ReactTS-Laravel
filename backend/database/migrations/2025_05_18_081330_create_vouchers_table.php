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
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->double('value');
            $table->double('max_discount');
            $table->double('min_order_value');
            $table->date('start_time');
            $table->date('end_time');
            $table->string('code')->unique();
            $table->enum('type', ['fixed', 'percent'])->default('fixed');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('customer_voucher', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained('customers')->onDelete('cascade');
            $table->foreignId('voucher_id')->constrained('vouchers')->onDelete('cascade');
            $table->unique(['customer_id', 'voucher_id']);
            $table->enum('status', ['used', 'unused'])->default('unused');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_voucher');
        Schema::dropIfExists('vouchers');
    }
};
