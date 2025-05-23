"use client"

import { DollarSign, Package, ShoppingCart, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const dashboardData = [
  {
    title: "Doanh thu",
    value: "125.430.000 ₫",
    change: "+12.5%",
    icon: DollarSign,
    description: "so với tháng trước",
  },
  {
    title: "Đơn hàng",
    value: "356",
    change: "+8.2%",
    icon: ShoppingCart,
    description: "so với tháng trước",
  },
  {
    title: "Sản phẩm",
    value: "1,245",
    change: "+24",
    icon: Package,
    description: "sản phẩm mới trong tháng",
  },
  {
    title: "Khách hàng",
    value: "3,721",
    change: "+5.4%",
    icon: Users,
    description: "so với tháng trước",
  },
]

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {dashboardData.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">{item.change}</span> {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
