"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ColorForm } from "./color-form"

const colors = [
  {
    id: "1",
    name: "Đỏ",
    code: "#FF0000",
    hexCode: "#FF0000",
    products: 25,
  },
  {
    id: "2",
    name: "Xanh dương",
    code: "#0000FF",
    hexCode: "#0000FF",
    products: 18,
  },
  {
    id: "3",
    name: "Xanh lá",
    code: "#00FF00",
    hexCode: "#00FF00",
    products: 12,
  },
  {
    id: "4",
    name: "Đen",
    code: "#000000",
    hexCode: "#000000",
    products: 45,
  },
  {
    id: "5",
    name: "Trắng",
    code: "#FFFFFF",
    hexCode: "#FFFFFF",
    products: 38,
  },
  {
    id: "6",
    name: "Xám",
    code: "#808080",
    hexCode: "#808080",
    products: 22,
  },
  {
    id: "7",
    name: "Hồng",
    code: "#FFC0CB",
    hexCode: "#FFC0CB",
    products: 15,
  },
  {
    id: "8",
    name: "Vàng",
    code: "#FFFF00",
    hexCode: "#FFFF00",
    products: 8,
  },
]

export function ColorsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [colorToDelete, setColorToDelete] = useState<string | null>(null)
  const [editingColor, setEditingColor] = useState<any>(null)
  const [showAddForm, setShowAddForm] = useState(false)

  const filteredColors = colors.filter((color) => color.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleDeleteColor = (id: string) => {
    // In a real application, you would call an API to delete the color
    console.log(`Deleting color with ID: ${id}`)
    setColorToDelete(null)
  }

  const handleEditColor = (color: any) => {
    setEditingColor(color)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Quản lý màu sắc</CardTitle>
            <CardDescription>Quản lý các màu sắc sản phẩm trong cửa hàng của bạn.</CardDescription>
          </div>
          <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Thêm màu sắc
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Thêm màu sắc mới</DialogTitle>
                <DialogDescription>Thêm một màu sắc mới cho sản phẩm.</DialogDescription>
              </DialogHeader>
              <ColorForm onSuccess={() => setShowAddForm(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm màu sắc..."
              className="w-full pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">Màu</TableHead>
                <TableHead>Tên màu</TableHead>
                <TableHead>Mã màu</TableHead>
                <TableHead>Số sản phẩm</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredColors.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    Không tìm thấy màu sắc nào.
                  </TableCell>
                </TableRow>
              ) : (
                filteredColors.map((color) => (
                  <TableRow key={color.id}>
                    <TableCell>
                      <div
                        className="h-8 w-8 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{color.name}</TableCell>
                    <TableCell className="font-mono text-sm">{color.hexCode}</TableCell>
                    <TableCell>{color.products}</TableCell>
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
                          <DropdownMenuItem onClick={() => handleEditColor(color)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Chỉnh sửa
                          </DropdownMenuItem>
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => {
                                  e.preventDefault()
                                  setColorToDelete(color.id)
                                }}
                                className="text-red-500 focus:text-red-500"
                              >
                                <Trash className="mr-2 h-4 w-4" />
                                Xóa
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Xác nhận xóa màu sắc</DialogTitle>
                                <DialogDescription>
                                  Bạn có chắc chắn muốn xóa màu sắc này? Hành động này không thể hoàn tác.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Hủy</Button>
                                </DialogClose>
                                <Button variant="destructive" onClick={() => handleDeleteColor(color.id)}>
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

      {/* Edit Color Dialog */}
      <Dialog open={!!editingColor} onOpenChange={() => setEditingColor(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa màu sắc</DialogTitle>
            <DialogDescription>Cập nhật thông tin màu sắc.</DialogDescription>
          </DialogHeader>
          {editingColor && <ColorForm color={editingColor} onSuccess={() => setEditingColor(null)} />}
        </DialogContent>
      </Dialog>
    </Card>
  )
}
