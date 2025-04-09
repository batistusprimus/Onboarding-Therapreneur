'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { TargetSection } from '@/components/dashboard-sections/TargetSection'

interface TargetData {
  demographics: {
    gender: string
    age: string
    location: string
    maritalStatus: string
    education: string
    profession: string
    annualIncome: string
  }
  behaviors: {
    platforms: string[]
    contentFormats: string[]
    interests: string[]
    buyingHabits: string
  }
  problems: {
    blockers: string[]
    desiredChanges: string
    expectations: string
  }
  motivations: {
    triggers: string
    objections: string
    fears: string
  }
}

export default function TargetPage() {
  const [data, setData] = useState<TargetData>({
    demographics: {
      gender: '',
      age: '',
      location: '',
      maritalStatus: '',
      education: '',
      profession: '',
      annualIncome: ''
    },
    behaviors: {
      platforms: [],
      contentFormats: [],
      interests: [],
      buyingHabits: ''
    },
    problems: {
      blockers: [],
      desiredChanges: '',
      expectations: ''
    },
    motivations: {
      triggers: '',
      objections: '',
      fears: ''
    }
  })

  useEffect(() => {
    // Charger les données depuis localStorage
    const savedData = localStorage.getItem('targetData')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  const handleUpdate = (section: string, value: any) => {
    const newData = {
      ...data,
      [section]: value
    }
    setData(newData)
    localStorage.setItem('targetData', JSON.stringify(newData))
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-heading">Votre Cible Idéale</h1>
        </div>

        <TargetSection data={data} onUpdate={handleUpdate} />
      </div>
    </div>
  )
} 