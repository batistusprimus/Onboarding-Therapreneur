import { Metadata } from "next"
import { AdminDashboard } from "@/components/admin/dashboard"

export const metadata: Metadata = {
  title: "Administration - Thérapreneur",
  description: "Interface d'administration de Thérapreneur",
}

export default function AdminPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      <AdminDashboard />
    </div>
  )
} 