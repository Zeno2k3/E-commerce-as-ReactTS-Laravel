<?php

namespace App\Http\Controllers;

use App\Http\Requests\ColorRequest;
use Illuminate\Http\JsonResponse;
use App\Models\Color;
use Storage;

class ColorController extends Controller
{
    public function index()
    {
        $color = Color::all();
        return response()->json([
            "success" => true,
            'data' => $color,
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

        if ($request->hasFile('color_image')) {
            $imagePath = $request->file('color_image')->store('images/colors', 'public');
        }

        $color = Color::create([
            'color_name' => $validatedData['color_name'],
            'color_image' => $imagePath,
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
        $color = Color::find($id);

        if (!$color) {
            return response()->json([
                'success' => false,
                'message' => 'Color không tồn tại'
            ], 404);
        }

        if ($request->filled('color_name')) {
            $color->color_name = $request->color_name;
        }
        if ($request->filled('color_image')) {
            $color->color_image = $request->color_image;
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
        $color = Color::find($id);

        if (!$color) {
            return response()->json([
                'success' => false,
                'message' => 'Color không tồn tại'
            ], 404);
        }
        $color->delete();
        Storage::delete($color['color_image']);
        return response()->json([
            'success' => true,
            'message' => 'Color đã xóa',
        ]);
    }
}
