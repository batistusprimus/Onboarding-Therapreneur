'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { BrandingSection } from '@/components/dashboard-sections/BrandingSection'

interface BrandingData {
  visualIdentity: {
    logo: string
    colors: string[]
    typography: string
    visualStyle: string
  }
  brandPersonality: {
    values: string[]
    tone: string
    voice: string
    keywords: string[]
  }
  brandAssets: {
    images: string[]
    icons: string[]
    patterns: string[]
  }
}

export default function BrandingPage() {
  const [data, setData] = useState<BrandingData>({
    visualIdentity: {
      logo: '',
      colors: [],
      typography: '',
      visualStyle: ''
    },
    brandPersonality: {
      values: [],
      tone: '',
      voice: '',
      keywords: []
    },
    brandAssets: {
      images: [],
      icons: [],
      patterns: []
    }
  })

  useEffect(() => {
    // Charger les données depuis localStorage
    const savedData = localStorage.getItem('brandingData')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  const handleUpdate = (section: keyof BrandingData, value: any) => {
    const newData = {
      ...data,
      [section]: value
    }
    setData(newData)
    localStorage.setItem('brandingData', JSON.stringify(newData))
    
    // Mettre à jour le statut de complétion dans le dashboard
    const dashboardData = JSON.parse(localStorage.getItem('dashboardData') || '{}')
    dashboardData.sections = {
      ...dashboardData.sections,
      branding: true
    }
    localStorage.setItem('dashboardData', JSON.stringify(dashboardData))
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
          <h1 className="text-3xl font-heading">Votre Identité Visuelle</h1>
        </div>

        <BrandingSection data={data} onUpdate={handleUpdate} />

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-heading">Éléments de Marque</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Images</Label>
              <Textarea
                placeholder="URLs des images (séparées par des virgules)"
                value={data.brandAssets.images.join(', ')}
                onChange={(e) => handleUpdate('brandAssets', { ...data.brandAssets, images: e.target.value.split(', ') })}
              />
            </div>
            <div className="space-y-2">
              <Label>Icônes</Label>
              <Textarea
                placeholder="URLs des icônes (séparées par des virgules)"
                value={data.brandAssets.icons.join(', ')}
                onChange={(e) => handleUpdate('brandAssets', { ...data.brandAssets, icons: e.target.value.split(', ') })}
              />
            </div>
            <div className="space-y-2">
              <Label>Motifs</Label>
              <Textarea
                placeholder="URLs des motifs (séparées par des virgules)"
                value={data.brandAssets.patterns.join(', ')}
                onChange={(e) => handleUpdate('brandAssets', { ...data.brandAssets, patterns: e.target.value.split(', ') })}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 