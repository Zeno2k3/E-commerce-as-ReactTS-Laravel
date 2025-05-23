"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  {
    id: "ORD-5123",
    customer: "Nguyễn Văn A",
    date: "2023-05-20",
    total: 1250000,
    status: "delivered",
    items: 3,
  },
  {
    id: "ORD-5122",
    customer: "Trần Thị B",
    date: "2023-05-19",
    total: 850000,
    status: "processing",
    items: 2,
  },
  {
    id: "ORD-5121",
    customer: "Lê Văn C",
    date: "2023-05-18",
    total: 2100000,
    status: "delivered",
    items: 5,
  },
  {
    id: "ORD-5120",
    customer: "Phạm Thị D",
    date: "2023-05-17",
    total: 1450000,
    status: "canceled",
    items: 4,
  },
  {
    id: "ORD-5119",
    customer: "Hoàng Văn E",
    date: "2023-05-16",
    total: 950000,
    status: "delivered",
    items: 2,
  },
  {
    id: "ORD-5118",
    customer: "Ngô Thị F",
    date: "2023-05-15",
    total: 1850000,
    status: "processing",
    items: 6,
  },
  {
    id: "ORD-5117",
    customer: "Đặng Văn G",
    date: "2023-05-14",
    total: 750000,
    status: "delivered",
    items: 1,
  },
  {
    id: "ORD-5116",
    customer: "Vũ Thị H",
    date: "2023-05-13",
    total: 1650000,
    status: "canceled",
    items: 3,
  },
]

export function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("vi-VN").format(date)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-green-500">Đã giao</Badge>
      case "processing":
        return <Badge className="bg-blue-500">Đang xử lý</Badge>
      case "canceled":
        return <Badge className="bg-red-500">Đã hủy</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách đơn hàng</CardTitle>
        <CardDescription>Quản lý tất cả đơn hàng trong cửa hàng của bạn.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm theo mã đơn hoặc khách hàng..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="delivered">Đã giao</SelectItem>
                <SelectItem value="processing">Đang xử lý</SelectItem>
                <SelectItem value="canceled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã đơn</TableHead>
                <TableHead>Khách hàng</TableHead>
                <TableHead>Ngày đặt</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead>Tổng tiền</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    Không tìm thấy đơn hàng nào.
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{formatDate(order.date)}</TableCell>
                    <TableCell>{order.items} sản phẩm</TableCell>
                    <TableCell>{formatCurrency(order.total)}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/dashboard/orders/${order.id}`}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Xem chi tiết</span>
                        </Link>
                      </Button>
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
