<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Http\Requests\CustomerRequest;
use App\Http\Resources\AddressResource;


class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::latest()->get();
        return response()->json([
            "success" => true,
            'message' => 'Lấy danh sách khách hàng thành công',
            'data' => $customers,
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
    public function store(CustomerRequest $request)
    {
        $customers = new Customer;
        $customers->fill($request->all());
        $customers->save();
        return response()->json([
            "success" => true,
            'message' => 'Thêm khách hàng thành công',
            'data' => $customers,
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getAddresses(Customer $customer)
    {
        return $customer->addresses;
    }
}
