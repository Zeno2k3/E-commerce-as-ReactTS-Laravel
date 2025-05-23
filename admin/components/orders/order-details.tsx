"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loader2, Truck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface OrderDetailsProps {
  orderId: string
}

export function OrderDetails({ orderId }: OrderDetailsProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState<any>(null)
  const [status, setStatus] = useState<string>("")

  useEffect(() => {
    // In a real application, you would fetch the order data from an API
    // This is just a mock implementation
    setTimeout(() => {
      const mockOrder = {
        id: orderId,
        customer: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
        phone: "0912345678",
        address: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
        date: "2023-05-20",
        total: 1250000,
        status: "delivered",
        items: [
          {
            id: "1",
            name: "Áo sơ mi nam dài tay",
            image: "/placeholder.svg?height=50&width=50",
            price: 350000,
            quantity: 2,
            subtotal: 700000,
          },
          {
            id: "3",
            name: "Áo khoác bomber unisex",
            image: "/placeholder.svg?height=50&width=50",
            price: 550000,
            quantity: 1,
            subtotal: 550000,
          },
        ],
        shipping: {
          method: "Standard",
          cost: 30000,
          estimatedDelivery: "2023-05-25",
        },
        payment: {
          method: "COD",
          status: "paid",
        },
      }

      setOrder(mockOrder)
      setStatus(mockOrder.status)
      setLoading(false)
    }, 1000)
  }, [orderId])

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

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus)
    // In a real application, you would call an API to update the order status
    toast({
      title: "Trạng thái đã được cập nhật",
      description: `Đơn hàng #${orderId} đã được cập nhật thành ${
        newStatus === "delivered" ? "Đã giao" : newStatus === "processing" ? "Đang xử lý" : "Đã hủy"
      }`,
    })
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Đang tải...</CardTitle>
          <CardDescription>Vui lòng đợi trong giây lát.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    )
  }

  if (!order) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Không tìm thấy đơn hàng</CardTitle>
          <CardDescription>Không thể tìm thấy thông tin cho đơn hàng này.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin khách hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Tên khách hàng</dt>
                <dd className="text-base">{order.customer}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                <dd className="text-base">{order.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Số điện thoại</dt>
                <dd className="text-base">{order.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Địa chỉ giao hàng</dt>
                <dd className="text-base">{order.address}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thông tin đơn hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Mã đơn hàng</dt>
                <dd className="text-base">{order.id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Ngày đặt hàng</dt>
                <dd className="text-base">{formatDate(order.date)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Phương thức thanh toán</dt>
                <dd className="text-base">
                  {order.payment.method === "COD" ? "Thanh toán khi nhận hàng" : order.payment.method}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Trạng thái thanh toán</dt>
                <dd className="text-base">
                  <Badge
                    variant="outline"
                    className={
                      order.payment.status === "paid"
                        ? "border-green-500 text-green-500"
                        : "border-yellow-500 text-yellow-500"
                    }
                  >
                    {order.payment.status === "paid" ? "Đã thanh toán" : "Chưa thanh toán"}
                  </Badge>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Chi tiết đơn hàng</CardTitle>
            <CardDescription>Danh sách sản phẩm trong đơn hàng.</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Trạng thái:</span>
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delivered">Đã giao</SelectItem>
                <SelectItem value="processing">Đang xử lý</SelectItem>
                <SelectItem value="canceled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Ảnh</TableHead>
                <TableHead>Sản phẩm</TableHead>
                <TableHead className="text-right">Giá</TableHead>
                <TableHead className="text-right">Số lượng</TableHead>
                <TableHead className="text-right">Thành tiền</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.items.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="relative h-12 w-12 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">{formatCurrency(item.price)}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">{formatCurrency(item.subtotal)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex flex-col items-end space-y-4">
          <div className="space-y-1 text-right">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Tạm tính:</span>
              <span>{formatCurrency(order.total - order.shipping.cost)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium">Phí vận chuyển:</span>
              <span>{formatCurrency(order.shipping.cost)}</span>
            </div>
            <div className="flex justify-between text-base font-bold">
              <span>Tổng cộng:</span>
              <span>{formatCurrency(order.total)}</span>
            </div>
          </div>
          <Button className="w-full sm:w-auto">
            <Truck className="mr-2 h-4 w-4" />
            In hóa đơn
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
