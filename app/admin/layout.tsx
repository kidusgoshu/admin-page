import type React from "react"
import Sidebar from "@/components/admin/Sidebar"
import PageHeader from "@/components/admin/PageHeader"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <PageHeader />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
