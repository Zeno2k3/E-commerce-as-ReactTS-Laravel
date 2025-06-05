"use client"

import { useState } from "react"
import { Loader2, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên màu phải có ít nhất 2 ký tự.",
  }),
  hexCode: z.string().regex(/^#[0-9A-F]{6}$/i, {
    message: "Mã màu phải có định dạng hex hợp lệ (ví dụ: #FF0000).",
  }),
})

type ColorFormValues = z.infer<typeof formSchema>

interface ColorFormProps {
  color?: any
  onSuccess: () => void
}

export function ColorForm({ color, onSuccess }: ColorFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<ColorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: color?.name || "",
      hexCode: color?.hexCode || "#000000",
    },
  })

  const onSubmit = (data: ColorFormValues) => {
    setLoading(true)

    // In a real application, you would call an API to save the color
    setTimeout(() => {
      console.log("Form data:", data)
      setLoading(false)
      toast({
        title: "Thành công!",
        description: color ? "Màu sắc đã được cập nhật." : "Màu sắc mới đã được tạo.",
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
              <FormLabel>Tên màu</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên màu" {...field} />
              </FormControl>
              <FormDescription>Tên màu sẽ được hiển thị cho khách hàng.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hexCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mã màu</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Input type="color" className="h-10 w-16 cursor-pointer border-0 p-1" {...field} />
                  <Input placeholder="#000000" className="flex-1 font-mono" {...field} />
                </div>
              </FormControl>
              <FormDescription>Chọn màu hoặc nhập mã hex.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <Save className="mr-2 h-4 w-4" />
            {color ? "Cập nhật" : "Lưu"}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
