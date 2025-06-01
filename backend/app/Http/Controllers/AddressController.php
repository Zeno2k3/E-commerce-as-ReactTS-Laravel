<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddressRequest;
use Illuminate\Http\Request;
use App\Models\Address;
use App\Models\Customer;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $address = Address::all();
        return response()->json([
            'success' => true,
            'data' => $address,
            'message' => 'Danh sách địa chỉ'
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
    public function store(AddressRequest $request)
    {
        // Lấy id customer có trong req
        $customerId = $request['customer_id'];
        // Lấy ra đối tượng trong bảng customer
        $customer = Customer::find($customerId);

        $addressSpecificConditions = [
            'street_address' => $request['street_address'],
            'province' => $request['province'],
            'district' => $request['district'],
            'ward' => $request['ward'],
        ];

        // Nếu địa chỉ mới đã tồn tại trả về true ngược lại trả về false;
        $existingAddress = $customer->addresses()->where($addressSpecificConditions)->exists();

        if ($existingAddress) {
            return response()->json([
                'success' => false,
                'message' => 'Địa chỉ này đã tồn tại cho khách hàng này.',
                'errors' => [
                    'address' => ['Địa chỉ bạn đang cố gắng thêm đã có trong hệ thống cho khách hàng này.']
                ]
            ], 409); 
        }
        $address = new Address($request->all());
        $address->save();
        return response()->json([
            'success' => true,
            'data' => $address,
            'message' => 'Địa chỉ được tạo thành công!'
        ], 201);
    }
    /**
     * Display the specified resource.
     */

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
        $address = Address::find($id);
        if (!$address) {
            return response()->json([
                'success' => false,
                'message' => 'Address không tồn tại'
            ], 404);
        }
        $address->delete();
        return response()->json([
            'success' => true,
            'message' => 'Address đã được xóa'
        ]);
    }
}
