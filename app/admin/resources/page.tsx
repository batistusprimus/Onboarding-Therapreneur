"use client"

import { useState, useEffect } from "react"
import { ResourcesTable } from "@/components/admin/resources-table"
import { ResourceForm } from "@/components/admin/resource-form"

interface Module {
  id: string
  title: string
}

export default function ResourcesPage() {
  const [modules, setModules] = useState<Module[]>([])

  useEffect(() => {
    fetchModules()
  }, [])

  const fetchModules = async () => {
    try {
      const response = await fetch("/api/admin/modules")
      if (!response.ok) throw new Error("Erreur lors de la récupération des modules")
      const data = await response.json()
      setModules(data)
    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des ressources</h1>
        <ResourceForm modules={modules} onResourceAdded={() => {}} />
      </div>
      <ResourcesTable />
    </div>
  )
} 