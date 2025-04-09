'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { OfferSection } from '@/components/dashboard-sections/OfferSection'

interface OfferData {
  name: string;
  formats: string;
  duration: string;
  frequency: string;
  modalities: string;
  supports: string;
  supportBetweenSessions: string;
  target: string;
  experienceLevel: string;
  idealClientDescription: string;
  mainProblem: string;
  transformation: string;
  resultsTime: string;
  uniqueness: string;
  clientChoiceReason: string;
  guarantee: string;
  testimonials: string;
  bonuses: string;
  price: string;
  installmentOptions: string;
  paymentMethods: string;
}

export default function OfferPage() {
  const [data, setData] = useState<OfferData>({
    name: '',
    formats: '',
    duration: '',
    frequency: '',
    modalities: '',
    supports: '',
    supportBetweenSessions: '',
    target: '',
    experienceLevel: '',
    idealClientDescription: '',
    mainProblem: '',
    transformation: '',
    resultsTime: '',
    uniqueness: '',
    clientChoiceReason: '',
    guarantee: '',
    testimonials: '',
    bonuses: '',
    price: '',
    installmentOptions: '',
    paymentMethods: ''
  })

  useEffect(() => {
    // Charger les données depuis localStorage
    const savedData = localStorage.getItem('offerData')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  const handleUpdate = (key: keyof OfferData, value: string | string[] | boolean) => {
    const newData = {
      ...data,
      [key]: value
    }
    setData(newData)
    localStorage.setItem('offerData', JSON.stringify(newData))
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
          <h1 className="text-3xl font-heading">Votre Offre</h1>
        </div>

        <OfferSection data={data} onUpdate={handleUpdate} />
      </div>
    </div>
  )
} 