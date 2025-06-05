"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColorsTable } from "./colors-table"
import { SizesTable } from "./sizes-table"

export function AttributesManager() {
  return (
    <Tabs defaultValue="colors" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
        <TabsTrigger value="colors">Màu sắc</TabsTrigger>
        <TabsTrigger value="sizes">Kích thước</TabsTrigger>
      </TabsList>

      <TabsContent value="colors" className="space-y-6">
        <ColorsTable />
      </TabsContent>

      <TabsContent value="sizes" className="space-y-6">
        <SizesTable />
      </TabsContent>
    </Tabs>
  )
}
