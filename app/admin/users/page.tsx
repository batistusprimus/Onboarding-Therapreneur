import { Metadata } from "next"
import { UsersTable } from "@/components/admin/users-table"

export const metadata: Metadata = {
  title: "Gestion des utilisateurs - Thérapreneur",
  description: "Gérez les utilisateurs de la plateforme",
}

export default function UsersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestion des utilisateurs</h1>
      </div>
      <UsersTable />
    </div>
  )
} 