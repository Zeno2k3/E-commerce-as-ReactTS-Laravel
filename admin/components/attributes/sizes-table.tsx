"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"

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
import { SizeForm } from "./size-form"

const sizes = [
  {
    id: "1",
    name: "XS",
    category: "clothing",
    description: "Extra Small",
    products: 15,
    sortOrder: 1,
  },
  {
    id: "2",
    name: "S",
    category: "clothing",
    description: "Small",
    products: 28,
    sortOrder: 2,
  },
  {
    id: "3",
    name: "M",
    category: "clothing",
    description: "Medium",
    products: 45,
    sortOrder: 3,
  },
  {
    id: "4",
    name: "L",
    category: "clothing",
    description: "Large",
    products: 38,
    sortOrder: 4,
  },
  {
    id: "5",
    name: "XL",
    category: "clothing",
    description: "Extra Large",
    products: 32,
    sortOrder: 5,
  },
  {
    id: "6",
    name: "XXL",
    category: "clothing",
    description: "Double Extra Large",
    products: 18,
    sortOrder: 6,
  },
  {
    id: "7",
    name: "39",
    category: "shoes",
    description: "Giày size 39",
    products: 12,
    sortOrder: 1,
  },
  {
    id: "8",
    name: "40",
    category: "shoes",
    description: "Giày size 40",
    products: 15,
    sortOrder: 2,
  },
  {
    id: "9",
    name: "41",
    category: "shoes",
    description: "Giày size 41",
    products: 18,
    sortOrder: 3,
  },
  {
    id: "10",
    name: "42",
    category: "shoes",
    description: "Giày size 42",
    products: 22,
    sortOrder: 4,
  },
]

export function SizesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sizeToDelete, setSizeToDelete] = useState<string | null>(null)
  const [editingSize, setEditingSize] = useState<any>(null)
  const [showAddForm, setShowAddForm] = useState(false)

  const categories = [
    { value: "clothing", label: "Quần áo" },
    { value: "shoes", label: "Giày dép" },
    { value: "accessories", label: "Phụ kiện" },
  ]

  const filteredSizes = sizes.filter((size) => {
    const matchesSearch = size.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || size.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleDeleteSize = (id: string) => {
    // In a real application, you would call an API to delete the size
    console.log(`Deleting size with ID: ${id}`)
    setSizeToDelete(null)
  }

  const handleEditSize = (size: any) => {
    setEditingSize(size)
  }

  const getCategoryBadge = (category: string) => {
    const categoryMap = {
      clothing: { label: "Quần áo", color: "bg-blue-500" },
      shoes: { label: "Giày dép", color: "bg-green-500" },
      accessories: { label: "Phụ kiện", color: "bg-purple-500" },
    }

    const categoryInfo = categoryMap[category as keyof typeof categoryMap] || { label: category, color: "bg-gray-500" }

    return <Badge className={categoryInfo.color}>{categoryInfo.label}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Quản lý kích thước</CardTitle>
            <CardDescription>Quản lý các kích thước sản phẩm trong cửa hàng của bạn.</CardDescription>
          </div>
          <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Thêm kích thước
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Thêm kích thước mới</DialogTitle>
                <DialogDescription>Thêm một kích thước mới cho sản phẩm.</DialogDescription>
              </DialogHeader>
              <SizeForm onSuccess={() => setShowAddForm(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm kích thước..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Loại sản phẩm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
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
                <TableHead>Kích thước</TableHead>
                <TableHead>Loại sản phẩm</TableHead>
                <TableHead className="hidden md:table-cell">Mô tả</TableHead>
                <TableHead>Số sản phẩm</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSizes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    Không tìm thấy kích thước nào.
                  </TableCell>
                </TableRow>
              ) : (
                filteredSizes.map((size) => (
                  <TableRow key={size.id}>
                    <TableCell className="font-medium">{size.name}</TableCell>
                    <TableCell>{getCategoryBadge(size.category)}</TableCell>
                    <TableCell className="hidden md:table-cell">{size.description}</TableCell>
                    <TableCell>{size.products}</TableCell>
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
                          <DropdownMenuItem onClick={() => handleEditSize(size)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Chỉnh sửa
                          </DropdownMenuItem>
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => {
                                  e.preventDefault()
                                  setSizeToDelete(size.id)
                                }}
                                className="text-red-500 focus:text-red-500"
                              >
                                <Trash className="mr-2 h-4 w-4" />
                                Xóa
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Xác nhận xóa kích thước</DialogTitle>
                                <DialogDescription>
                                  Bạn có chắc chắn muốn xóa kích thước này? Hành động này không thể hoàn tác.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Hủy</Button>
                                </DialogClose>
                                <Button variant="destructive" onClick={() => handleDeleteSize(size.id)}>
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

      {/* Edit Size Dialog */}
      <Dialog open={!!editingSize} onOpenChange={() => setEditingSize(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa kích thước</DialogTitle>
            <DialogDescription>Cập nhật thông tin kích thước.</DialogDescription>
          </DialogHeader>
          {editingSize && <SizeForm size={editingSize} onSuccess={() => setEditingSize(null)} />}
        </DialogContent>
      </Dialog>
    </Card>
  )
}
