import { UsersTable } from "@/components/users/users-table"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý người dùng</h1>
      <UsersTable />
    </div>
  )
}
