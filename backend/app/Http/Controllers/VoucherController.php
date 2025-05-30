<?php

namespace App\Http\Controllers;

use App\Http\Requests\VoucherRequest;
use App\Models\Voucher;

class VoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $voucher = Voucher::all();
        return response()->json([
            "success" => true,
            'data' => $voucher,
            'message' => 'Lấy danh sách danh sách voucher thành công',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VoucherRequest $request)
    {
        $voucher = new Voucher;
        $voucher->fill($request->all());

        $voucher->save();
        return response()->json([
            "success" => true,
            'data' => $voucher,
            'message' => 'Thêm Voucher thành công',
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(VoucherRequest $request, string $id)
    {
        $voucher = Voucher::find($id);
        if (!$voucher) {
            return response()->json([
                'success' => false,
                'message' => 'Voucher không tồn tại'
            ], 404);
        }

        if ($request->filled('value')) {
            $voucher->value = $request->value;
        }
        if ($request->filled('max_discount')) {
            $voucher->max_discount = $request->max_discount;
        }
        if ($request->filled('min_order_value')) {
            $voucher->min_order_value = $request->min_order_value;
        }
        if ($request->filled('start_time')) {
            $voucher->start_time = $request->start_time;
        }
        if ($request->filled('end_time')) {
            $voucher->end_time = $request->end_time;
        }
        if ($request->filled('code')) {
            $voucher->code = $request->code;
        }
        if ($request->filled('type')) {
            $voucher->type = $request->type;
        }
        if ($request->filled('is_active')) {
            $voucher->is_active = $request->is_active;
        }
        if ($voucher->isDirty()) {
            $voucher->save();
            return response()->json([
                'success' => true,
                'message' => 'Voucher đã thay đổi'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Không có dữ liệu nào được thay đổi'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $voucher = Voucher::find($id);
        if (!$voucher) {
            return response()->json([
                'success' => false,
                'message' => 'Voucher không tồn tại'
            ], 404);
        }
        $voucher->delete();
        return response()->json([
            'success' => true,
            'message' => 'Voucher đã bị xóa'
        ]);
    }
}
