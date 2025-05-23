"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Box, Home, LayoutDashboard, LogOut, Package, Settings, ShoppingCart, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Tổng quan",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Sản phẩm",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Đơn hàng",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "Danh mục",
    href: "/dashboard/categories",
    icon: Box,
  },
  {
    title: "Người dùng",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Thống kê",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Cài đặt",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background md:flex md:w-64 md:flex-col">
      <div className="flex flex-col space-y-6 px-4 py-6">
        <Link href="/dashboard" className="flex items-center gap-2 px-2 py-2 text-lg font-semibold">
          <Home className="h-6 w-6" />
          <span className="text-3xl font-bold">Quản lý</span>
        </Link>
        <nav className="flex flex-1 flex-col space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start", pathname === item.href ? "bg-muted font-medium" : "font-normal")}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-5 w-5" />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
        <Button variant="outline" className="justify-start">
          <LogOut className="mr-2 h-5 w-5" />
          Đăng xuất
        </Button>
      </div>
    </div>
  )
}
