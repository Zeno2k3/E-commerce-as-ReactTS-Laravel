"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ImagePlus, Loader2, Save, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Tên sản phẩm phải có ít nhất 3 ký tự.",
  }),
  description: z.string().min(10, {
    message: "Mô tả sản phẩm phải có ít nhất 10 ký tự.",
  }),
  price: z.coerce.number().min(1000, { message: "Giá sản phẩm phải lớn hơn 1.000 VNĐ." }),
  stock: z.coerce.number().min(0, { message: "Số lượng tồn kho không được âm." }),
  category: z.string({
    required_error: "Vui lòng chọn danh mục sản phẩm.",
  }),
})

type ProductFormValues = z.infer<typeof formSchema>

const defaultValues: Partial<ProductFormValues> = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  category: "",
}

interface ProductFormProps {
  productId?: string
}

export function ProductForm({ productId }: ProductFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  useEffect(() => {
    if (productId) {
      // In a real application, you would fetch the product data from an API
      // This is just a mock implementation
      setLoading(true)
      setTimeout(() => {
        const mockProduct = {
          id: productId,
          name: "Áo sơ mi nam dài tay",
          description:
            "Áo sơ mi nam dài tay chất liệu cotton cao cấp, thiết kế hiện đại, phù hợp với nhiều phong cách khác nhau.",
          price: 350000,
          stock: 45,
          category: "Áo nam",
        }

        form.reset({
          name: mockProduct.name,
          description: mockProduct.description,
          price: mockProduct.price,
          stock: mockProduct.stock,
          category: mockProduct.category,
        })

        setImagePreview("/placeholder.svg?height=200&width=200")
        setLoading(false)
      }, 500)
    }
  }, [productId, form])

  const onSubmit = (data: ProductFormValues) => {
    setLoading(true)

    // In a real application, you would call an API to save the product
    setTimeout(() => {
      console.log("Form data:", data)
      setLoading(false)
      toast({
        title: "Thành công!",
        description: productId ? "Sản phẩm đã được cập nhật." : "Sản phẩm mới đã được tạo.",
      })
      router.push("/dashboard/products")
    }, 1000)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview(null)
  }

  const categories = ["Áo nam", "Áo nữ", "Quần nam", "Quần nữ", "Áo khoác", "Váy đầm"]

  if (loading && productId) {
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
        <CardTitle>{productId ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}</CardTitle>
        <CardDescription>
          {productId ? "Cập nhật thông tin sản phẩm hiện có." : "Thêm một sản phẩm mới vào cửa hàng của bạn."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-40 w-40 overflow-hidden rounded-md border">
                  {imagePreview ? (
                    <>
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Product preview"
                        fill
                        className="object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute right-2 top-2 h-6 w-6"
                        onClick={removeImage}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <ImagePlus className="h-10 w-10 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="relative"
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 cursor-pointer opacity-0"
                      onChange={handleImageChange}
                    />
                    <ImagePlus className="mr-2 h-4 w-4" />
                    {imagePreview ? "Thay đổi ảnh" : "Tải ảnh lên"}
                  </Button>
                </div>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên sản phẩm</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên sản phẩm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mô tả</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Nhập mô tả sản phẩm" className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Giá (VNĐ)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Nhập giá sản phẩm" {...field} />
                      </FormControl>
                      <FormDescription>Giá sản phẩm tính bằng VNĐ.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tồn kho</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Nhập số lượng tồn kho" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Danh mục</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn danh mục sản phẩm" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <CardFooter className="flex justify-end gap-2 px-0">
              <Button type="button" variant="outline" onClick={() => router.push("/dashboard/products")}>
                Hủy
              </Button>
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <Save className="mr-2 h-4 w-4" />
                {productId ? "Cập nhật" : "Lưu"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
