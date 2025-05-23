"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "T1", total: 18000000 },
  { name: "T2", total: 22000000 },
  { name: "T3", total: 32000000 },
  { name: "T4", total: 48000000 },
  { name: "T5", total: 36000000 },
  { name: "T6", total: 42000000 },
  { name: "T7", total: 65000000 },
  { name: "T8", total: 78000000 },
  { name: "T9", total: 92000000 },
  { name: "T10", total: 110000000 },
  { name: "T11", total: 125000000 },
  { name: "T12", total: 148000000 },
]

export function RevenueChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Doanh thu theo tháng</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
            <XAxis dataKey="name" stroke={isDark ? "#888" : "#888"} fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke={isDark ? "#888" : "#888"}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000000}tr`}
            />
            <Tooltip
              formatter={(value: number) => [formatCurrency(value), "Doanh thu"]}
              contentStyle={{
                backgroundColor: isDark ? "#1f2937" : "#fff",
                border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
              }}
            />
            <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
