"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Edit, MoreHorizontal, Search, Trash } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const products = [
  {
    id: "1",
    name: "Áo sơ mi nam dài tay",
    image: "/placeholder.svg?height=50&width=50",
    price: 350000,
    stock: 45,
    category: "Áo nam",
  },
  {
    id: "2",
    name: "Quần jean nữ ống rộng",
    image: "/placeholder.svg?height=50&width=50",
    price: 450000,
    stock: 32,
    category: "Quần nữ",
  },
  {
    id: "3",
    name: "Áo khoác bomber unisex",
    image: "/placeholder.svg?height=50&width=50",
    price: 650000,
    stock: 18,
    category: "Áo khoác",
  },
  {
    id: "4",
    name: "Váy liền thân công sở",
    image: "/placeholder.svg?height=50&width=50",
    price: 550000,
    stock: 27,
    category: "Váy đầm",
  },
  {
    id: "5",
    name: "Áo thun nam cổ tròn",
    image: "/placeholder.svg?height=50&width=50",
    price: 250000,
    stock: 64,
    category: "Áo nam",
  },
  {
    id: "6",
    name: "Quần tây nam công sở",
    image: "/placeholder.svg?height=50&width=50",
    price: 450000,
    stock: 38,
    category: "Quần nam",
  },
  {
    id: "7",
    name: "Áo sơ mi nữ tay dài",
    image: "/placeholder.svg?height=50&width=50",
    price: 320000,
    stock: 42,
    category: "Áo nữ",
  },
  {
    id: "8",
    name: "Áo khoác denim nữ",
    image: "/placeholder.svg?height=50&width=50",
    price: 580000,
    stock: 15,
    category: "Áo khoác",
  },
]

export function ProductsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [productToDelete, setProductToDelete] = useState<string | null>(null)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const categories = ["Áo nam", "Áo nữ", "Quần nam", "Quần nữ", "Áo khoác", "Váy đầm"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleDeleteProduct = (id: string) => {
    // In a real application, you would call an API to delete the product
    console.log(`Deleting product with ID: ${id}`)
    setProductToDelete(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách sản phẩm</CardTitle>
        <CardDescription>Quản lý tất cả sản phẩm trong cửa hàng của bạn.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả danh mục</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Ảnh</TableHead>
                <TableHead>Tên sản phẩm</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Tồn kho</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    Không tìm thấy sản phẩm nào.
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="relative h-12 w-12 overflow-hidden rounded-md">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>{formatCurrency(product.price)}</TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${
                          product.stock < 20
                            ? "text-red-500"
                            : product.stock < 50
                              ? "text-yellow-500"
                              : "text-green-500"
                        }`}
                      >
                        {product.stock}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Mở menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/products/${product.id}`}>
                              <Edit className="mr-2 h-4 w-4" />
                              Chỉnh sửa
                            </Link>
                          </DropdownMenuItem>
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => {
                                  e.preventDefault()
                                  setProductToDelete(product.id)
                                }}
                                className="text-red-500 focus:text-red-500"
                              >
                                <Trash className="mr-2 h-4 w-4" />
                                Xóa
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Xác nhận xóa sản phẩm</DialogTitle>
                                <DialogDescription>
                                  Bạn có chắc chắn muốn xóa sản phẩm này? Hành động này không thể hoàn tác.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Hủy</Button>
                                </DialogClose>
                                <Button variant="destructive" onClick={() => handleDeleteProduct(product.id)}>
                                  Xóa
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
