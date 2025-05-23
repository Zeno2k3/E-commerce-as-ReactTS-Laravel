"use client"

import Link from "next/link"
import { Eye } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentOrders = [
  {
    id: "ORD-5123",
    customer: "Nguyễn Văn A",
    date: "2023-05-20",
    total: 1250000,
    status: "delivered",
  },
  {
    id: "ORD-5122",
    customer: "Trần Thị B",
    date: "2023-05-19",
    total: 850000,
    status: "processing",
  },
  {
    id: "ORD-5121",
    customer: "Lê Văn C",
    date: "2023-05-18",
    total: 2100000,
    status: "delivered",
  },
  {
    id: "ORD-5120",
    customer: "Phạm Thị D",
    date: "2023-05-17",
    total: 1450000,
    status: "canceled",
  },
  {
    id: "ORD-5119",
    customer: "Hoàng Văn E",
    date: "2023-05-16",
    total: 950000,
    status: "delivered",
  },
]

export function RecentOrders() {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Đơn hàng gần đây</CardTitle>
        <CardDescription>Danh sách 5 đơn hàng gần đây nhất trong hệ thống.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mã đơn</TableHead>
              <TableHead>Khách hàng</TableHead>
              <TableHead>Ngày đặt</TableHead>
              <TableHead>Tổng tiền</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="text-right">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
