"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Tên danh mục phải có ít nhất 2 ký tự." }),
  slug: z.string().min(2, { message: "Slug phải có ít nhất 2 ký tự." }),
  type: z.enum(["Nam", "Nữ", "Bé trai", "Bé gái"]).optional(),
  parent_id: z.number().optional(),
})

type CategoryFormValues = z.infer<typeof formSchema>

const defaultValues: Partial<CategoryFormValues> = {
  name: "",
  slug: "",
  type: undefined,
  parent_id: undefined,
}

interface CategoryType {
  id: number
  name: string
  slug: string
  type: string
  parent_id: number | null
}

interface CategoryFormProps {
  categoryId?: number
}

export function CategoryForm({ categoryId }: CategoryFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [parentCategories, setParentCategories] = useState<CategoryType[]>([])

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  useEffect(() => {
    // Load danh mục cha
    fetch("http://127.0.0.1:8000/api/categories")
      .then(res => res.json())
      .then(data => setParentCategories(data.data || []))
      .catch(err => console.error("Error loading parent categories", err))
  }, [])

  useEffect(() => {
    if (categoryId) {
      setLoading(true)
      fetch(`http://127.0.0.1:8000/api/categories/${categoryId}`)
        .then(res => {
          if (!res.ok) throw new Error("Không thể tải danh mục.")
          return res.json()
        })
        .then(data => {
          form.reset({
            name: data.name,
            slug: data.slug,
            type: data.type || undefined,
            parent_id: data.parent_id ? data.parent_id : undefined,
          })
        })
        .catch(error => {
          toast({ title: "Lỗi!", description: error.message, variant: "destructive" })
        })
        .finally(() => setLoading(false))
    }
  }, [categoryId, form, toast])

  const onSubmit = async (data: CategoryFormValues) => {
    setLoading(true)
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/categories${categoryId ? `/${categoryId}` : ""}`,
        {
          method: categoryId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            parent_id: data.parent_id ? data.parent_id : null,
          }),
        }
      )

      if (!response.ok) throw new Error("Lỗi khi lưu danh mục.")

      toast({
        title: "Thành công!",
        description: categoryId ? "Danh mục đã được cập nhật." : "Danh mục mới đã được tạo.",
      })
      router.push("/dashboard/categories")
    } catch (error: any) {
      toast({
        title: "Lỗi!",
        description: error.message || "Không thể lưu danh mục.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading && categoryId) {
    return (
      <Card className="mx-auto max-w-2xl">
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

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>{categoryId ? "Chỉnh sửa danh mục" : "Thêm danh mục mới"}</CardTitle>
        <CardDescription>
          {categoryId ? "Cập nhật thông tin danh mục hiện có." : "Thêm một danh mục mới vào cửa hàng của bạn."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên danh mục</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên danh mục" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập slug" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loại</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full border px-3 py-2 rounded-md">
                      <option value="">-- Chọn loại --</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Bé trai">Bé trai</option>
                      <option value="Bé gái">Bé gái</option>
                      <option value="null">Khác</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parent_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Danh mục cha</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full border px-3 py-2 rounded-md">
                      <option value="">-- Không có danh mục cha --</option>
                      {parentCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="flex justify-end gap-2 px-0">
              <Button type="button" variant="outline" onClick={() => router.push("/dashboard/categories")}>Hủy</Button>
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <Save className="mr-2 h-4 w-4" />
                {categoryId ? "Cập nhật" : "Lưu"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
