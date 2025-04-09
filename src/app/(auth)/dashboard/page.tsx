'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  // Mock data - à remplacer par les données réelles de l'utilisateur
  const user = {
    firstName: 'Jean',
    onboardingCompleted: false,
    onboardingProgress: ['objectives', 'current_offer'],
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-heading mb-4">
            Bienvenue sur Thérapreneur 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Commencez votre transformation digitale en complétant votre profil
          </p>
        </div>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Onboarding</CardTitle>
            <CardDescription>
              Complétez ces informations pour personnaliser votre accompagnement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${user.onboardingCompleted ? 'bg-green-500' : 'bg-orange-500'}`} />
              <span className="text-lg font-medium">
                {user.onboardingCompleted ? 'Profil complété' : 'Profil à compléter'}
              </span>
            </div>
            <Button asChild size="lg" className="w-full">
              <Link href="/onboarding">
                {user.onboardingCompleted ? 'Voir mon profil' : 'Commencer l\'onboarding'}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 