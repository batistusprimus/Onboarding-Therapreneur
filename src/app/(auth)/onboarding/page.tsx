'use client'

import React, { FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  PlayCircle,
  Target,
  Users,
  Palette,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Play
} from 'lucide-react'
import { Label } from '@/components/ui/label'
import { ThankYou } from "@/components/onboarding/thank-you"

interface OnboardingData {
  // Étape 1
  videosWatched: boolean
  
  // Étape 2
  identity: {
    firstName: string
    lastName: string
    email: string
  }
  currentActivity: {
    businessName: string
    experienceYears: string
    location: string
    specialty: string
    workMode: 'presentiel' | 'distanciel' | 'hybride'
    annualRevenue: string
    website?: string
    teamSize: string
  }
  vision: {
    mission: string
    transformation: string
    twelveMonthsGoal: string
    threeObjectives: string[]
    currentBlockers: string
  }
}

const OnboardingPage: FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<OnboardingData>({
    videosWatched: false,
    identity: {
      firstName: '',
      lastName: '',
      email: ''
    },
    currentActivity: {
      businessName: '',
      experienceYears: '',
      location: '',
      specialty: '',
      workMode: 'hybride',
      annualRevenue: '',
      teamSize: ''
    },
    vision: {
      mission: '',
      transformation: '',
      twelveMonthsGoal: '',
      threeObjectives: ['', '', ''],
      currentBlockers: ''
    }
  })
  const [showThankYou, setShowThankYou] = useState(false)

  const updateData = (section: keyof OnboardingData, value: any) => {
    setData(prev => ({
      ...prev,
      [section]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(prev => prev + 1)
      // Sauvegarder les données dans localStorage
      localStorage.setItem('onboardingData', JSON.stringify(data))
    } else {
      // Rediriger vers le dashboard
      window.location.href = '/dashboard'
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleCompleteSection = (section: string) => {
    // Implementation of handleCompleteSection function
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Bienvenue sur Thérapreneur
              </h2>
              <p className="text-muted-foreground">
                Avant de commencer, regarde ces deux vidéos pour comprendre notre approche.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Vidéo 1 : Bienvenue & Présentation de l'onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Vidéo 2 : Notre méthodologie</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end">
              <Button onClick={() => {
                updateData('videosWatched', true)
                handleNext()
              }}>
                J'ai regardé les vidéos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                À propos de vous
              </h2>
              <p className="text-muted-foreground">
                Remplissez ces informations pour que nous puissions mieux vous accompagner.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Votre identité</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Prénom</Label>
                      <Input
                        value={data.identity.firstName}
                        onChange={(e) => updateData('identity', { ...data.identity, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Nom</Label>
                      <Input
                        value={data.identity.lastName}
                        onChange={(e) => updateData('identity', { ...data.identity, lastName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        value={data.identity.email}
                        onChange={(e) => updateData('identity', { ...data.identity, email: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Votre activité actuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nom de votre entreprise</Label>
                      <Input
                        value={data.currentActivity.businessName}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, businessName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Années d'expérience</Label>
                      <Input
                        type="number"
                        value={data.currentActivity.experienceYears}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, experienceYears: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Localisation</Label>
                      <Input
                        value={data.currentActivity.location}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, location: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Spécialité</Label>
                      <Input
                        value={data.currentActivity.specialty}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, specialty: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Votre vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Mission</Label>
                      <Textarea
                        value={data.vision.mission}
                        onChange={(e) => updateData('vision', { ...data.vision, mission: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Transformation souhaitée</Label>
                      <Textarea
                        value={data.vision.transformation}
                        onChange={(e) => updateData('vision', { ...data.vision, transformation: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Objectif à 12 mois</Label>
                      <Textarea
                        value={data.vision.twelveMonthsGoal}
                        onChange={(e) => updateData('vision', { ...data.vision, twelveMonthsGoal: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
              <Button onClick={handleNext}>
                Continuer vers le dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )
    }
  }

  if (showThankYou) {
    return <ThankYou />
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {renderStep()}
      </div>
    </div>
  )
}

export default OnboardingPage 