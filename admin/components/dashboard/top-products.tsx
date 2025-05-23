"use client"

import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const topProducts = [
  {
    id: 1,
    name: "Áo sơ mi nam dài tay",
    sales: 245,
    revenue: 73500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Quần jean nữ ống rộng",
    sales: 189,
    revenue: 56700000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Áo khoác bomber unisex",
    sales: 156,
    revenue: 62400000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Váy liền thân công sở",
    sales: 132,
    revenue: 52800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Áo thun nam cổ tròn",
    sales: 124,
    revenue: 24800000,
    image: "/placeholder.svg?height=40&width=40",
  },
]

export function TopProducts() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sản phẩm bán chạy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product) => (
            <div key={product.id} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-md">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sales} sản phẩm</p>
                </div>
              </div>
              <div className="text-sm font-medium">{formatCurrency(product.revenue)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
