<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json([
            "success" => true,
            'data' => $products,
            'message' => 'Lấy danh sách sản phẩm thành công',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        try {

            $validatedData = $request->validated();
            $imagePath = null;
            if ($request->hasFile('banner')) {
                $imagePath = $request->file('banner')->store('storage/images/product', 'public');
            }
            $validatedData['banner'] = $imagePath;
            $product = new Product($validatedData);
            $product->save();

            return response()->json([
                'success' => true,
                'data' => $product,
                'message' => 'Thêm sản phẩm thành công',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra khi thêm sản phẩm',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /* Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => "ID:$id không tồn tại trong CSDL!"
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $product,
            'message' => 'Lấy thành công!'
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
    public function update(ProductRequest $request, string $id)
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
