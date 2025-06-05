import { AttributesManager } from "@/components/attributes/attributes-manager"

export default function AttributesPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Quản lý màu sắc & kích thước</h1>
            <AttributesManager />
        </div>
    )
}