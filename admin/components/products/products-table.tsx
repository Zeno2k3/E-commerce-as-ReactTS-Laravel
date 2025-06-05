"use client"

import { useEffect, useState } from "react"
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
import { CategoryType, ProductType } from "@/types"

export function ProductsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [productToDelete, setProductToDelete] = useState<string | null>(null)
  const [data, setData] = useState<Array<ProductType>>([])
  const [categories, setCategories] = useState<Array<CategoryType>>([])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(value)
  }

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/products')
        if (!res.ok) {
          throw new Error("Failed to fetch")
        }
        const jsonData = await res.json();
        console.log("Products JSON:", jsonData);
        setData(jsonData.data)
      } catch (error) {
        console.error("Error fetching Categries:", error)
      }
    }

    fecthData();
  }, [])

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/categories')
        if (!res.ok) {
          throw new Error("Failed to fetch")
        }
        const jsonData = await res.json();
        setCategories(jsonData.data)
      } catch (error) {
        console.error("Error fetching Categries:", error)
      }
    }
    fecthData();
  }, []);

  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.name_product.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category_id === categoryFilter
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
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
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
                <TableHead>Mã sản phẩm</TableHead>
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
                          src={`/${product.banner}`}
                          alt={product.name_product}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.product_code}</TableCell>
                    <TableCell className="font-medium">{product.name_product}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category_id}</Badge>
                    </TableCell>
                    <TableCell>{formatCurrency(product.original_price)}</TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${product.discount_percent < 20
                          ? "text-red-500"
                          : product.discount_percent < 50
                            ? "text-yellow-500"
                            : "text-green-500"
                          }`}
                      >
                        {product.discount_percent}
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
