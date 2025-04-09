'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Target,
  Package,
  Palette,
  CheckCircle2,
  ArrowRight,
  UserCircle,
  Rocket,
  Sparkles,
  BarChart3,
  Trophy,
  Clock,
  Calendar
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Progress } from '@/components/ui/progress'

interface DashboardData {
  onboardingCompleted: boolean
  sections: {
    target: boolean
    offer: boolean
    branding: boolean
  }
}

interface SectionTime {
  name: string
  time: number
  completed: boolean
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData>({
    onboardingCompleted: false,
    sections: {
      target: false,
      offer: false,
      branding: false
    }
  })

  useEffect(() => {
    const savedData = localStorage.getItem('dashboardData')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dashboardData', JSON.stringify(data));
  }, [data]);

  const updateData = (newData: DashboardData) => {
    setData(newData)
    localStorage.setItem('dashboardData', JSON.stringify(newData))
  }

  const completedSections = [
    data.onboardingCompleted,
    ...Object.values(data.sections)
  ].filter(Boolean).length

  const totalSections = 1 + Object.keys(data.sections).length // 1 pour l'onboarding + les sections

  const progressPercentage = (completedSections / totalSections) * 100

  useEffect(() => {
    console.log('Données actuelles:', data)
    console.log('Sections complétées:', completedSections)
    console.log('Total des sections:', totalSections)
    console.log('Progression globale:', progressPercentage)
  }, [data])

  const sectionTimes: SectionTime[] = [
    { name: 'onboarding', time: 5, completed: data.onboardingCompleted },
    { name: 'target', time: 60, completed: data.sections.target },
    { name: 'offer', time: 120, completed: data.sections.offer },
    { name: 'branding', time: 30, completed: data.sections.branding }
  ]

  const remainingTime = sectionTimes
    .filter(section => !section.completed)
    .reduce((total, section) => total + section.time, 0)

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`
    }
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}min` : ''}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const handleCompleteSection = (sectionName: keyof DashboardData['sections'] | 'onboardingCompleted') => {
    const newData = {
      ...data,
      sections: {
        ...data.sections,
        [sectionName]: true
      },
      onboardingCompleted: sectionName === 'onboardingCompleted' ? true : data.onboardingCompleted
    };
    updateData(newData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header avec statistiques */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Removed completion boxes */}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="text-center space-y-4"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-heading mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Bienvenue sur Thérapreneur 👋
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complétez votre profil pour personnaliser votre accompagnement et maximiser votre impact
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {/* Section Onboarding */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 flex flex-col group">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-heading">Onboarding</CardTitle>
                  </div>
                  <CardDescription>
                    Commencez par compléter votre onboarding
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "h-3 w-3 rounded-full",
                        data.onboardingCompleted ? "bg-green-500" : "bg-orange-500"
                      )} />
                      <span className="text-lg font-medium">
                        {data.onboardingCompleted ? 'Onboarding complété' : 'Onboarding à compléter'}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{formatTime(5)}</span>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 mt-4 group-hover:scale-[1.02] transition-transform"
                  >
                    <Link href="/onboarding">
                      {data.onboardingCompleted ? 'Revoir mon onboarding' : 'Commencer l\'onboarding'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section Cible */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 flex flex-col group">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <UserCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-heading">Votre Cible Idéale</CardTitle>
                  </div>
                  <CardDescription>
                    Définissez votre client idéal pour mieux cibler votre communication
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "h-3 w-3 rounded-full",
                        data.sections.target ? "bg-green-500" : "bg-orange-500"
                      )} />
                      <span className="text-lg font-medium">
                        {data.sections.target ? 'Section complétée' : 'Section à compléter'}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{formatTime(60)}</span>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 mt-4 group-hover:scale-[1.02] transition-transform"
                  >
                    <Link href="/target">
                      {data.sections.target ? 'Modifier ma cible' : 'Définir ma cible'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section Offre */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 flex flex-col group">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-heading">Votre Offre</CardTitle>
                  </div>
                  <CardDescription>
                    Structurez votre offre pour maximiser son impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "h-3 w-3 rounded-full",
                        data.sections.offer ? "bg-green-500" : "bg-orange-500"
                      )} />
                      <span className="text-lg font-medium">
                        {data.sections.offer ? 'Section complétée' : 'Section à compléter'}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{formatTime(120)}</span>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 mt-4 group-hover:scale-[1.02] transition-transform"
                  >
                    <Link href="/offer">
                      {data.sections.offer ? 'Modifier mon offre' : 'Structurer mon offre'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section Branding */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 flex flex-col group">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-heading">Votre Identité Visuelle</CardTitle>
                  </div>
                  <CardDescription>
                    Créez une identité visuelle cohérente et impactante
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "h-3 w-3 rounded-full",
                        data.sections.branding ? "bg-green-500" : "bg-orange-500"
                      )} />
                      <span className="text-lg font-medium">
                        {data.sections.branding ? 'Section complétée' : 'Section à compléter'}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{formatTime(30)}</span>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 mt-4 group-hover:scale-[1.02] transition-transform"
                  >
                    <Link href="/branding">
                      {data.sections.branding ? 'Modifier mon branding' : 'Créer mon branding'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Section Masterclass - Ligne indépendante */}
          <motion.div 
            className="mt-12"
            variants={itemVariants}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 flex flex-col group">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading">Masterclass</CardTitle>
                </div>
                <CardDescription>
                  Accédez à notre formation complète pour développer votre activité
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-lg font-medium">
                      Formation disponible
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">+10h de contenu</span>
                </div>
                <Button 
                  asChild
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 mt-4 group-hover:scale-[1.02] transition-transform"
                >
                  <Link href="/masterclass">
                    Accéder à la masterclass
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 