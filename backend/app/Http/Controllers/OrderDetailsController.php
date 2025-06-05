<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderDetailReqest;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(OrderDetailReqest $request)
    {
        $orderDetail = new OrderDetail($request->all());
        $orderDetail->save();
        return response()->json([
            'success' => true,
            'data' => $orderDetail,
            'message' => 'Sản phẩm được thêm vào đơn hàng thành công!'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $orderId)
    {
        $orderbyID = Order::find($orderId);

        if (!$orderbyID) {
            return response()->json([
                'success' => false,
                'message' => "CSDL không có khách hàng với ID:$orderId"
            ], 404);
        }

        $products = $orderbyID->products()->withPivot('quantity')->get();
        return response()->json([
            'success' => true,
            'data' => $products,
            'message' => "Danh sách sản phâm thuộc đơn hàng với ID:$orderId."
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
