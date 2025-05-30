<?php

namespace App\Http\Controllers;

use App\Http\Requests\SizeRequest;
use App\Models\ProductSize;
use Illuminate\Http\Request;

class SizeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sizes = ProductSize::all();

        return response()->json([
            'success' => true,
            'data' => $sizes,
            'message' => 'Lấy danh sách size thành công!'
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
    public function store(SizeRequest $request)
    {
        $size = new ProductSize;
        $size->fill($request->all());

        $size->save();
        return response()->json([
            "success" => true,
            'data' => $size,
            'message' => 'Thêm Voucher thành công',
        ], 201);
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
        $size = ProductSize::find($id);
        if (!$size) {
            return response()->json([
                'success' => false,
                'message' => 'Size không tồn tại'
            ], 404);
        }
        $size->delete();
        return response()->json([
            'success' => true,
            'message' => 'Size đã được xóa'
        ]);
    }
}
