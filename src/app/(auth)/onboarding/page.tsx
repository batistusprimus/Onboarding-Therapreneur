'use client'

import React, { FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Step4 } from '@/components/onboarding/step4'
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

  // Étape 3
  idealClient: {
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

  // Étape 4
  offer: {
    mainOffer: {
      name: string
      content: string
      target: string
      transformation: string
    }
    positioning: {
      promise: string
      differentiation: string
      results: string
      emotions: string
      tone: string
      avoid: string
    }
  }

  // Étape 5
  branding: {
    visualIdentity: {
      logo?: File
      colors: string
      fonts: string
      existingAssets?: File[]
    }
    content: {
      platforms: string[]
      frequency: string
      formats: string[]
      testimonials: boolean
      example?: string
    }
    communication: {
      tagline?: string
      hashtags: string[]
      inspirations: string
    }
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
    },
    idealClient: {
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
        blockers: ['', '', ''],
        desiredChanges: '',
        expectations: ''
      },
      motivations: {
        triggers: '',
        objections: '',
        fears: ''
      }
    },
    offer: {
      mainOffer: {
        name: '',
        content: '',
        target: '',
        transformation: ''
      },
      positioning: {
        promise: '',
        differentiation: '',
        results: '',
        emotions: '',
        tone: '',
        avoid: ''
      }
    },
    branding: {
      visualIdentity: {
        colors: '',
        fonts: ''
      },
      content: {
        platforms: [],
        frequency: '',
        formats: [],
        testimonials: false
      },
      communication: {
        hashtags: [],
        inspirations: ''
      }
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
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1)
      // Sauvegarder les données dans localStorage
      localStorage.setItem('onboardingData', JSON.stringify(data))
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleFinish = () => {
    setShowThankYou(true)
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
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Vidéo 2 : Comment bien communiquer en équipe ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center gap-4">
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50 transition-all"
                >
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="hover:scale-105 transition-transform"
                  onClick={() => window.open('https://discord.gg/therapreneur', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Rejoindre le discord
                </Button>
              </div>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Ton profil
              </h2>
              <p className="text-muted-foreground">
                Remplis ton profil pour que nous puissions mieux te connaître et t'accompagner.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Section Identité */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Identité</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={data.identity.firstName}
                        onChange={(e) => updateData('identity', { ...data.identity, firstName: e.target.value })}
                        placeholder="Ton prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={data.identity.lastName}
                        onChange={(e) => updateData('identity', { ...data.identity, lastName: e.target.value })}
                        placeholder="Ton nom"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={data.identity.email}
                      onChange={(e) => updateData('identity', { ...data.identity, email: e.target.value })}
                      placeholder="ton@email.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section Activité actuelle */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Ton activité actuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Nom de ton entreprise *</Label>
                    <Input
                      id="businessName"
                      value={data.currentActivity.businessName}
                      onChange={(e) => updateData('currentActivity', { ...data.currentActivity, businessName: e.target.value })}
                      placeholder="Le nom de ton entreprise"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="yearsOfExperience">Années d'expérience *</Label>
                      <Input
                        id="yearsOfExperience"
                        type="number"
                        value={data.currentActivity.experienceYears}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, experienceYears: e.target.value })}
                        placeholder="Nombre d'années"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Localisation *</Label>
                      <Input
                        id="location"
                        value={data.currentActivity.location}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, location: e.target.value })}
                        placeholder="Ta ville ou région"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Spécialité *</Label>
                    <Input
                      id="specialty"
                      value={data.currentActivity.specialty}
                      onChange={(e) => updateData('currentActivity', { ...data.currentActivity, specialty: e.target.value })}
                      placeholder="Ta spécialité principale"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workMode">Mode de travail *</Label>
                    <select
                      id="workMode"
                      value={data.currentActivity.workMode}
                      onChange={(e) => updateData('currentActivity', { ...data.currentActivity, workMode: e.target.value as 'presentiel' | 'distanciel' | 'hybride' })}
                      className="w-full p-2 border rounded-md bg-background"
                    >
                      <option value="">Sélectionne ton mode de travail</option>
                      <option value="online">En ligne</option>
                      <option value="offline">En présentiel</option>
                      <option value="hybrid">Hybride</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="annualRevenue">Chiffre d'affaires annuel *</Label>
                      <Input
                        id="annualRevenue"
                        type="number"
                        value={data.currentActivity.annualRevenue}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, annualRevenue: e.target.value })}
                        placeholder="En euros"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamSize">Taille de l'équipe *</Label>
                      <Input
                        id="teamSize"
                        type="number"
                        value={data.currentActivity.teamSize}
                        onChange={(e) => updateData('currentActivity', { ...data.currentActivity, teamSize: e.target.value })}
                        placeholder="Nombre de personnes"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Site web (optionnel)</Label>
                    <Input
                      id="website"
                      type="url"
                      value={data.currentActivity.website || ''}
                      onChange={(e) => updateData('currentActivity', { ...data.currentActivity, website: e.target.value })}
                      placeholder="https://ton-site.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section Vision & Objectifs */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Vision & Objectifs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="mission">Ta mission *</Label>
                    <Textarea
                      id="mission"
                      value={data.vision.mission}
                      onChange={(e) => updateData('vision', { ...data.vision, mission: e.target.value })}
                      placeholder="Décris ta mission en quelques mots"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transformation">La transformation que tu apportes *</Label>
                    <Textarea
                      id="transformation"
                      value={data.vision.transformation}
                      onChange={(e) => updateData('vision', { ...data.vision, transformation: e.target.value })}
                      placeholder="Quelle transformation apportes-tu à tes clients ?"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal12Months">Objectif à 12 mois *</Label>
                    <Textarea
                      id="goal12Months"
                      value={data.vision.twelveMonthsGoal}
                      onChange={(e) => updateData('vision', { ...data.vision, twelveMonthsGoal: e.target.value })}
                      placeholder="Où veux-tu être dans 12 mois ?"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mainObjectives">Tes 3 objectifs principaux *</Label>
                    <Textarea
                      id="mainObjectives"
                      value={data.vision.threeObjectives.join('\n')}
                      onChange={(e) => updateData('vision', {
                        ...data.vision,
                        threeObjectives: e.target.value.split('\n').map(o => o.trim())
                      })}
                      placeholder="Liste tes 3 objectifs principaux"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentBlockers">Tes freins actuels *</Label>
                    <Textarea
                      id="currentBlockers"
                      value={data.vision.currentBlockers}
                      onChange={(e) => updateData('vision', { ...data.vision, currentBlockers: e.target.value })}
                      placeholder="Qu'est-ce qui t'empêche d'atteindre tes objectifs ?"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="hover:scale-105 transition-transform"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50 transition-all"
                >
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Ton client idéal</h2>
              <p className="text-muted-foreground">
                Décris-nous ton client idéal pour que nous puissions t'aider à mieux le cerner.
              </p>
              <p className="text-muted-foreground">
                Ces informations nous permettront de personnaliser ton accompagnement.
              </p>
              <p className="text-muted-foreground">
                Tu peux revenir sur cette page à tout moment pour modifier tes réponses.
              </p>
              <p className="text-muted-foreground">
                Si tu as des questions, n'hésite pas à nous contacter.
              </p>
            </div>

            {/* Section Données démographiques */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Données démographiques</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Sexe</label>
                  <select
                    className="w-full p-2 rounded-md border"
                    value={data.idealClient.demographics.gender}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      demographics: { ...data.idealClient.demographics, gender: e.target.value }
                    })}
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Âge moyen</label>
                  <Input
                    type="number"
                    value={data.idealClient.demographics.age}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      demographics: { ...data.idealClient.demographics, age: e.target.value }
                    })}
                    placeholder="Âge moyen de ton client idéal"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Localisation</label>
                  <Input
                    value={data.idealClient.demographics.location}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      demographics: { ...data.idealClient.demographics, location: e.target.value }
                    })}
                    placeholder="Où habite-t-il ?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Statut marital</label>
                  <Input
                    value={data.idealClient.demographics.maritalStatus}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      demographics: { ...data.idealClient.demographics, maritalStatus: e.target.value }
                    })}
                    placeholder="Son statut marital"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Niveau d'étude</label>
                  <Input
                    value={data.idealClient.demographics.education}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      demographics: { ...data.idealClient.demographics, education: e.target.value }
                    })}
                    placeholder="Son niveau d'étude"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Profession</label>
                  <Input
                    value={data.idealClient.demographics.profession}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      demographics: { ...data.idealClient.demographics, profession: e.target.value }
                    })}
                    placeholder="Sa profession"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Revenu annuel</label>
                  <Input
                    value={data.idealClient.demographics.annualIncome}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      demographics: { ...data.idealClient.demographics, annualIncome: e.target.value }
                    })}
                    placeholder="Son revenu annuel estimé"
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Section Comportements & habitudes */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Comportements & habitudes</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Plateformes préférées</label>
                  <Textarea
                    value={data.idealClient.behaviors.platforms.join(', ')}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      behaviors: {
                        ...data.idealClient.behaviors,
                        platforms: e.target.value.split(',').map(p => p.trim())
                      }
                    })}
                    placeholder="Sur quelles plateformes passe-t-il le plus de temps ?"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Formats de contenu</label>
                  <Textarea
                    value={data.idealClient.behaviors.contentFormats.join(', ')}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      behaviors: {
                        ...data.idealClient.behaviors,
                        contentFormats: e.target.value.split(',').map(f => f.trim())
                      }
                    })}
                    placeholder="Quels formats de contenu consomme-t-il le plus ?"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Centres d'intérêt</label>
                  <Textarea
                    value={data.idealClient.behaviors.interests.join(', ')}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      behaviors: {
                        ...data.idealClient.behaviors,
                        interests: e.target.value.split(',').map(i => i.trim())
                      }
                    })}
                    placeholder="Quels sont ses loisirs ou centres d'intérêt ?"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Habitudes d'achat</label>
                  <Textarea
                    value={data.idealClient.behaviors.buyingHabits}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      behaviors: { ...data.idealClient.behaviors, buyingHabits: e.target.value }
                    })}
                    placeholder="Quelles sont ses habitudes d'achat de services thérapeutiques ou de coaching ?"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Section Problèmes & besoins */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Problèmes & besoins</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">3 plus grands blocages</label>
                  {data.idealClient.problems.blockers.map((blocker, index) => (
                    <Input
                      key={index}
                      value={blocker}
                      onChange={(e) => {
                        const newBlockers = [...data.idealClient.problems.blockers]
                        newBlockers[index] = e.target.value
                        updateData('idealClient', {
                          ...data.idealClient,
                          problems: { ...data.idealClient.problems, blockers: newBlockers }
                        })
                      }}
                      placeholder={`Blocage ${index + 1}`}
                      className="mb-2"
                      required
                    />
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Changements souhaités</label>
                  <Textarea
                    value={data.idealClient.problems.desiredChanges}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      problems: { ...data.idealClient.problems, desiredChanges: e.target.value }
                    })}
                    placeholder="Que cherche-t-il à changer ou améliorer dans sa vie ?"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Attentes</label>
                  <Textarea
                    value={data.idealClient.problems.expectations}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      problems: { ...data.idealClient.problems, expectations: e.target.value }
                    })}
                    placeholder="Qu'attend-il concrètement d'un accompagnement comme le tien ?"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Section Motivations & objections */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Motivations & objections</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Motivations</label>
                  <Textarea
                    value={data.idealClient.motivations.triggers}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      motivations: { ...data.idealClient.motivations, triggers: e.target.value }
                    })}
                    placeholder="Qu'est-ce qui peut le motiver à agir maintenant ?"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Objections</label>
                  <Textarea
                    value={data.idealClient.motivations.objections}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      motivations: { ...data.idealClient.motivations, objections: e.target.value }
                    })}
                    placeholder="Quelles objections principales pourrait-il avoir avant d'acheter ton service ?"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Peur</label>
                  <Textarea
                    value={data.idealClient.motivations.fears}
                    onChange={(e) => updateData('idealClient', {
                      ...data.idealClient,
                      motivations: { ...data.idealClient.motivations, fears: e.target.value }
                    })}
                    placeholder="De quoi a-t-il peur en découvrant ton offre ?"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </Card>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handleBack}
                className="hover:scale-105 transition-transform"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50 transition-all"
              >
                Suivant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 4:
        return (
          <Step4
            onNext={(offerData) => {
              updateData('offer', offerData)
              handleNext()
            }}
            onBack={handleBack}
          />
        )

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Ton branding</h2>
              <p className="text-muted-foreground">
                Décris-nous ton branding pour que nous puissions t'aider à mieux le positionner.
              </p>
              <p className="text-muted-foreground">
                Ces informations nous permettront de personnaliser ton accompagnement.
              </p>
              <p className="text-muted-foreground">
                Tu peux revenir sur cette page à tout moment pour modifier tes réponses.
              </p>
              <p className="text-muted-foreground">
                Si tu as des questions, n'hésite pas à nous contacter.
              </p>
            </div>

            {/* Section Identité visuelle */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Identité visuelle</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Logo</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        updateData('branding', {
                          ...data.branding,
                          visualIdentity: {
                            ...data.branding.visualIdentity,
                            logo: file
                          }
                        })
                      }
                    }}
                    className="cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Palette de couleurs</label>
                  <Input
                    value={data.branding.visualIdentity.colors}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      visualIdentity: { ...data.branding.visualIdentity, colors: e.target.value }
                    })}
                    placeholder="Quelles sont tes couleurs principales ?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Polices</label>
                  <Input
                    value={data.branding.visualIdentity.fonts}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      visualIdentity: { ...data.branding.visualIdentity, fonts: e.target.value }
                    })}
                    placeholder="Quelles polices utilises-tu ?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Visuels existants</label>
                  <Input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files || [])
                      if (files.length > 0) {
                        updateData('branding', {
                          ...data.branding,
                          visualIdentity: {
                            ...data.branding.visualIdentity,
                            existingAssets: files
                          }
                        })
                      }
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </Card>

            {/* Section Contenus & Réseaux */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Contenus & Réseaux</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Plateformes actives</label>
                  <Textarea
                    value={data.branding.content.platforms.join(', ')}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      content: {
                        ...data.branding.content,
                        platforms: e.target.value.split(',').map(p => p.trim())
                      }
                    })}
                    placeholder="Sur quelles plateformes es-tu actif ?"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Fréquence de publication</label>
                  <Input
                    value={data.branding.content.frequency}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      content: { ...data.branding.content, frequency: e.target.value }
                    })}
                    placeholder="À quelle fréquence publies-tu du contenu ?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Formats préférés</label>
                  <Textarea
                    value={data.branding.content.formats.join(', ')}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      content: {
                        ...data.branding.content,
                        formats: e.target.value.split(',').map(f => f.trim())
                      }
                    })}
                    placeholder="Quels formats tu préfères (posts, vidéos, newsletters, etc.) ?"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Témoignages</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={data.branding.content.testimonials}
                      onChange={(e) => updateData('branding', {
                        ...data.branding,
                        content: { ...data.branding.content, testimonials: e.target.checked }
                      })}
                      className="h-4 w-4"
                    />
                    <span>As-tu déjà reçu des témoignages ou études de cas ?</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Exemple de contenu</label>
                  <Textarea
                    value={data.branding.content.example || ''}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      content: { ...data.branding.content, example: e.target.value }
                    })}
                    placeholder="Peux-tu partager un exemple de contenu qui a bien fonctionné ?"
                    rows={3}
                  />
                </div>
              </div>
            </Card>

            {/* Section Communication */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Communication</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Slogan</label>
                  <Input
                    value={data.branding.communication.tagline || ''}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      communication: { ...data.branding.communication, tagline: e.target.value }
                    })}
                    placeholder="As-tu un slogan ou phrase d'accroche que tu utilises souvent ?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Hashtags</label>
                  <Textarea
                    value={data.branding.communication.hashtags.join(', ')}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      communication: {
                        ...data.branding.communication,
                        hashtags: e.target.value.split(',').map(h => h.trim())
                      }
                    })}
                    placeholder="Quels hashtags ou mots-clés représentent bien ta marque ?"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Inspirations</label>
                  <Textarea
                    value={data.branding.communication.inspirations}
                    onChange={(e) => updateData('branding', {
                      ...data.branding,
                      communication: { ...data.branding.communication, inspirations: e.target.value }
                    })}
                    placeholder="Y a-t-il un entrepreneur ou une marque qui t'inspire ?"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </Card>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handleBack}
                className="hover:scale-105 transition-transform"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
              <Button
                onClick={handleFinish}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
              >
                Terminer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (showThankYou) {
    return <ThankYou />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl py-12">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-gradient">
              Onboarding
            </h1>
            <div className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full backdrop-blur-sm">
              Étape {currentStep} sur 5
            </div>
          </div>
          <div className="h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out animate-gradient"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-8 animate-fade-in">
          {renderStep()}
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage 