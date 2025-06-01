<?php

namespace App\Http\Controllers;

use App\Http\Requests\FavoriteRequest;
use App\Models\Favorite;
use App\Models\Customer;
use Illuminate\Http\Request;

class FavoriteController extends Controller
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
    public function store(FavoriteRequest $request)
    {
        $favorite = new Favorite($request->all());

        if (!$favorite->save()) {
            return response()->json([
                'success' => false,
                'message' => 'Liên kết thất bại !'
            ], 404);
        }
        return response()->json([
            'success' => true,
            'data' => $favorite,
            'message' => 'Voucher đã liên kết với Customer!'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $customerId)
    {
        $customerbyID = Customer::find($customerId);

        if (!$customerbyID) {
            return response()->json([
                'success' => false,
                'message' => "CSDL không có khách hàng với ID:$customerId"
            ], 404);
        }

        $ProductFavorite = $customerbyID->favorites()->get();
        return response()->json([
            'success' => true,
            'data' => $ProductFavorite,
            'message' => "Tất cả sản phẩm đã lấy thành công."
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
