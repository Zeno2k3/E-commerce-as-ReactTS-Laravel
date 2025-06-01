<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = Category::all();
        return response()->json([
            "success" => true,
            'data' => $category,
            'message' => 'Lấy danh sách danh mục thành công',
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $category = new Category;
        $category->fill($request->all());
        $category->save();

        return response()->json([
            "success" => true,
            'data' => $category,
            'message' => 'Thêm danh mục thành công',
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                "success" => false,
                'message' => 'Danh mục không tồn tại',
            ], 404);
        }

        return response()->json([
            "success" => true,
            'data' => $category,
            'message' => 'Lấy danh mục thành công',
        ], 200);
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
    public function update(Request $request, int $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                "success" => false,
                'message' => 'Danh mục không tồn tại',
            ], 404);
        }

        $category->fill($request->all());
        $category->save();

        return response()->json([
            "success" => true,
            'data' => $category,
            'message' => 'Cập nhật danh mục thành công',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getProduct(Category $category)
    {
        return $category->products;
    }
}
