"use client"

import { useState } from "react"
import { Loader2, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Tên kích thước không được để trống.",
  }),
  category: z.string({
    required_error: "Vui lòng chọn loại sản phẩm.",
  }),
  description: z.string().optional(),
  sortOrder: z.coerce.number().min(1, {
    message: "Thứ tự sắp xếp phải lớn hơn 0.",
  }),
})

type SizeFormValues = z.infer<typeof formSchema>

interface SizeFormProps {
  size?: any
  onSuccess: () => void
}

export function SizeForm({ size, onSuccess }: SizeFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const categories = [
    { value: "clothing", label: "Quần áo" },
    { value: "shoes", label: "Giày dép" },
    { value: "accessories", label: "Phụ kiện" },
  ]

  const form = useForm<SizeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: size?.name || "",
      category: size?.category || "",
      description: size?.description || "",
      sortOrder: size?.sortOrder || 1,
    },
  })

  const onSubmit = (data: SizeFormValues) => {
    setLoading(true)

    // In a real application, you would call an API to save the size
    setTimeout(() => {
      console.log("Form data:", data)
      setLoading(false)
      toast({
        title: "Thành công!",
        description: size ? "Kích thước đã được cập nhật." : "Kích thước mới đã được tạo.",
      })
      onSuccess()
    }, 1000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên kích thước</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên kích thước (ví dụ: S, M, L, 39, 40)" {...field} />
              </FormControl>
              <FormDescription>Tên kích thước sẽ được hiển thị cho khách hàng.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loại sản phẩm</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại sản phẩm" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Chọn loại sản phẩm mà kích thước này áp dụng.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mô tả (tùy chọn)</FormLabel>
              <FormControl>
                <Textarea placeholder="Nhập mô tả kích thước" className="min-h-[80px]" {...field} />
              </FormControl>
              <FormDescription>Mô tả chi tiết về kích thước này.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sortOrder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thứ tự sắp xếp</FormLabel>
              <FormControl>
                <Input type="number" placeholder="1" {...field} />
              </FormControl>
              <FormDescription>Thứ tự hiển thị kích thước (số nhỏ hơn sẽ hiển thị trước).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <Save className="mr-2 h-4 w-4" />
            {size ? "Cập nhật" : "Lưu"}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
