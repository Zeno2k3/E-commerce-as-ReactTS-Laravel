import { ManifestNode } from "next/dist/build/webpack/plugins/flight-manifest-plugin"

export interface ProductType {
    id:number
    name: string
    image: string
    price: number
    stock: number
    category: string
}