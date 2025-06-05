import { ManifestNode } from "next/dist/build/webpack/plugins/flight-manifest-plugin"

export interface ProductType {
    id: string
    name_product: string
    product_code: string
    banner: string
    original_price: number
    discount_percent: number
    discount_price: number
    category_id: string
    material: string
    customer_guide: string
}

export interface CategoryType {
    id: string,
    name: string,
    slug: string,
    type: "Nam" | "Nữ" | "Bé Trai" | "Bé Gái",
    parent_id: string,
}
export interface OrderType {
    id: string,
    customer_id: string,
    total_amount: number,
    shipping_fee: number,
    shipping_province: string,
    shipping_district: string,
    shipping_ward: string,
    shipping_street: string,
    status: 'Đã nhận' | 'Chưa nhận',
    payment_method: 'Tiền mặt' | 'Momo' | 'Ngân hàng',
    created_at: string
}
