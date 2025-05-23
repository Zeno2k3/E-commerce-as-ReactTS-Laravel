import { DashboardCards } from "@/components/dashboard/dashboard-cards"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { TopProducts } from "@/components/dashboard/top-products"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tổng quan</h1>
      <DashboardCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RevenueChart />
        <TopProducts />
      </div>
      <RecentOrders />
    </div>
  )
}
