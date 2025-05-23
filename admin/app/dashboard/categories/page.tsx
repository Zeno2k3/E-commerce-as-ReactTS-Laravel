import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CategoriesTable } from "@/components/categories/categories-table"

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản lý danh mục</h1>
        <Button asChild>
          <Link href="/dashboard/categories/new">
            <Plus className="mr-2 h-4 w-4" />
            Thêm danh mục
          </Link>
        </Button>
      </div>
      <CategoriesTable />
    </div>
  )
}
