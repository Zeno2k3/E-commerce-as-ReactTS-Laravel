import { OrdersTable } from "@/components/orders/orders-table"

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý đơn hàng</h1>
      <OrdersTable />
    </div>
  )
}
