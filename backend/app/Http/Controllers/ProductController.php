<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
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
            // Tạo sản phẩm với dữ liệu (trừ banner)
            $productData = $request->except('banner');
            $product = Product::create($productData);
            $bannerPath = null;
            // Xử lý banner image
            if ($request->hasFile('banner')) {
                // Case 1: File upload
                $bannerPath = $this->handleFileUpload($request->file('banner'));
            } elseif ($request->filled('banner') && filter_var($request->banner, FILTER_VALIDATE_URL)) {
                // Case 2: URL image
                $bannerPath = $this->handleImageUrl($request->banner);
            }
            // Cập nhật banner path nếu có
            if ($bannerPath) {
                $product->update(['banner' => $bannerPath]);
            }
            return response()->json([
                'success' => true,
                'data' => $product->fresh(), // Reload để lấy dữ liệu mới nhất
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

    /**
     * Handle file upload for product banner
     */
    private function handleFileUpload($file)
    {
        if (!$file->isValid()) {
            throw new \Exception('File upload không hợp lệ');
        }

        // Validate file type
        $allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!in_array($file->getMimeType(), $allowedMimes)) {
            throw new \Exception('Định dạng file không được hỗ trợ. Chỉ chấp nhận: JPEG, PNG, GIF, WebP');
        }
        // Validate file size (max 5MB)
        if ($file->getSize() > 10 * 1024 * 1024) {
            throw new \Exception('Kích thước file không được vượt quá 5MB');
        }
        $filename = $this->generateUniqueFilename($file->getClientOriginalExtension());
        $path = $file->storeAs('public/products', $filename);

        return Storage::url($path);
    }

    /**
     * Handle image download from URL
     */
    private function handleImageUrl($imageUrl)
    {
        try {
            // Set context options for better security and performance
            $context = stream_context_create([
                'http' => [
                    'timeout' => 30,
                    'user_agent' => 'Mozilla/5.0 (compatible; ProductAPI/1.0)',
                    'max_redirects' => 3,
                ]
            ]);

            $imageContents = file_get_contents($imageUrl, false, $context);

            if ($imageContents === false) {
                throw new \Exception('Không thể tải ảnh từ URL');
            }

            // Validate file size (max 5MB)
            if (strlen($imageContents) > 5 * 1024 * 1024) {
                throw new \Exception('Kích thước ảnh từ URL không được vượt quá 5MB');
            }

            // Get image info to validate and determine extension
            $imageInfo = getimagesizefromstring($imageContents);
            if ($imageInfo === false) {
                throw new \Exception('URL không chứa ảnh hợp lệ');
            }

            // Map MIME types to extensions
            $mimeToExt = [
                'image/jpeg' => 'jpg',
                'image/png' => 'png',
                'image/gif' => 'gif',
                'image/webp' => 'webp'
            ];

            $mimeType = $imageInfo['mime'];
            if (!isset($mimeToExt[$mimeType])) {
                throw new \Exception('Định dạng ảnh không được hỗ trợ từ URL');
            }

            $extension = $mimeToExt[$mimeType];
            $filename = $this->generateUniqueFilename($extension);
            $path = 'public/products/' . $filename;

            Storage::put($path, $imageContents);

            return Storage::url($path);
        } catch (\Exception $e) {
            throw new \Exception('Lỗi khi xử lý ảnh từ URL: ' . $e->getMessage());
        }
    }

    /**
     * Generate unique filename with timestamp and random string
     */
    private function generateUniqueFilename($extension)
    {
        return time() . '_' . Str::random(32) . '.' . $extension;
    }

    /**
     * Alternative method using cURL for better control (optional)
     */
    private function downloadImageWithCurl($imageUrl)
    {
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $imageUrl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS => 3,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_USERAGENT => 'Mozilla/5.0 (compatible; ProductAPI/1.0)',
            CURLOPT_SSL_VERIFYPEER => false, // Only for development
        ]);

        $imageContents = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

        curl_close($ch);

        if ($imageContents === false || $httpCode !== 200) {
            throw new \Exception('Không thể tải ảnh từ URL');
        }

        // Validate content type
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!in_array($contentType, $allowedTypes)) {
            throw new \Exception('Định dạng ảnh không được hỗ trợ');
        }

        return $imageContents;
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
