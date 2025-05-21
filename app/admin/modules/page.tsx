"use client"

import { ModulesTable } from "@/components/admin/modules-table"
import { ModuleForm } from "@/components/admin/module-form"

export default function ModulesPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des modules</h1>
        <ModuleForm onModuleAdded={() => {}} />
      </div>
      <ModulesTable />
    </div>
  )
} 