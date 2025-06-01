<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerVouchersRequest;
use App\Models\Customer;
use App\Models\CustomerVoucher;

class CustomerVoucherController extends Controller
{
    public function store(CustomerVouchersRequest $request)
    {
        $validatedData = $request->validated();
        try {
            $customerVoucher = CustomerVoucher::create($validatedData);
            return response()->json([
                'success' => true,
                'data' => $customerVoucher,
                'message' => 'Voucher đã liên kết với Customer thành công!'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Liên kết voucher thất bại. Vui lòng thử lại.'
            ], 500);
        }
    }

    public function show(string $customerId)
    {
        $customerbyID = Customer::find($customerId);

        if (!$customerbyID) {
            return response()->json([
                'success' => false,
                'message' => "CSDL không có khách hàng với ID:$customerId"
            ], 404);
        }

        $voucher = $customerbyID->vouchers()->get();
        return response()->json([
            'success' => true,
            'data' => $voucher,
            'message' => "Tất cả vocher đã lấy thành công."
        ]);
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
    public function update(CustomerVouchersRequest $request, string $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
