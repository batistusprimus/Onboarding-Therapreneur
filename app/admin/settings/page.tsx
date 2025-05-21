import { Metadata } from "next"
import { SettingsForm } from "@/components/admin/settings-form"

export const metadata: Metadata = {
  title: "Paramètres - Thérapreneur",
  description: "Configurez les paramètres de la plateforme",
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Paramètres</h1>
      </div>
      <SettingsForm />
    </div>
  )
} 