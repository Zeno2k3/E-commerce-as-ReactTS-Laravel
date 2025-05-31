<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerVouchersRequest;
use App\Models\CustomerVoucher;
use Illuminate\Http\Request;

class CustomerVoucherController extends Controller
{

    public function store(CustomerVouchersRequest $request)
    {
        $customer_voucher = new CustomerVoucher();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
