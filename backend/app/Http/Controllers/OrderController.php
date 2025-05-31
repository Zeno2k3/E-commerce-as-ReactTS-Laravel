<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $order = Order::all();
        return response()->json([
            'success' => true,
            'data' => $order,
            'message' => 'Lấy ra tất cả order'
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
    public function store(OrderRequest $request)
    {
        $order = new Order();
        $order->fill($request->all());

        $order->save();
        return response()->json([
            'success' => true,
            'dataNew' => $order,
            'message' => 'Order đã được tạo thành công'
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $orderDelete = Order::find($id);
        if (!$orderDelete) {
            return response()->json([
                'success' => false,
                'message' => 'Không có Order nào trùng với id!'
            ], 404);
        }
        return response()->json([
            'success' => true,
            'message' => 'Oder đã xóa!'
        ]);
    }
}
