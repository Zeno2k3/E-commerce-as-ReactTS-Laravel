<?php

namespace App\Http\Controllers;

use App\Http\Requests\ColorRequest;
use Illuminate\Http\JsonResponse;
use App\Models\ProductColor;

class ColorController extends Controller
{
    public function index()
    {
        $productColor = ProductColor::all();
        return response()->json([
            "success" => true,
            'data' => $productColor,
            'message' => 'Lấy danh sách danh mục thành công',
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
    public function store(ColorRequest $request): JsonResponse
    {

        $validatedData = $request->validated();
        $imagePath = null;

        if ($request->hasFile('image_color')) {
            $imagePath = $request->file('image_color')->store('images/colors', 'public');
        }

        $color = ProductColor::create([
            'name_color' => $validatedData['name_color'],
            'image_color' => $imagePath,
        ]);

        return response()->json([
            'message' => 'Màu sắc đã được tạo thành công.',
            'data' => $color,
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
    public function update(ColorRequest $request, string $id)
    {
        $color = ProductColor::find($id);

        if (!$color) {
            return response()->json([
                'success' => false,
                'message' => 'Color không tồn tại'
            ], 404);
        }

        if ($request->filled('name_color')) {
            $color->name_color = $request->name_color;
        }
        if ($request->filled('image_color')) {
            $color->image_color = $request->image_color;
        }

        if ($color->isDirty()) {
            $color->save();
            return response()->json([
                'success' => true,
                'message' => 'Color đã thay đổi'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Không có dữ liệu nào được thay đổi'
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $color = ProductColor::find($id);

        if (!$color) {
            return response()->json([
                'success' => false,
                'message' => 'Color không tồn tại'
            ], 404);
        }
        $color->delete();
        return response()->json([
            'success' => true,
            'message' => 'Color đã xóa',
        ]);
    }
}
