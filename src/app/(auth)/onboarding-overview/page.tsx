'use client'

import { type FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { FileText, Users, Palette, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface OnboardingSection {
  title: string
  description: string
  progress: number
  icon: JSX.Element
  href: string
  tasks: {
    name: string
    completed: boolean
  }[]
}

const OnboardingOverviewPage: FC = () => {
  const sections: OnboardingSection[] = [
    {
      title: "Onboarding",
      description: "Découvrez notre méthode et commencez votre parcours",
      progress: 33,
      icon: <FileText className="w-6 h-6" />,
      href: "/onboarding",
      tasks: [
        { name: "Regarder la vidéo d'introduction", completed: true },
        { name: "Remplir le questionnaire initial", completed: false },
        { name: "Accéder au Discord", completed: true }
      ]
    },
    {
      title: "ICP (Ideal Customer Profile)",
      description: "Définissez votre client idéal pour mieux le cibler",
      progress: 0,
      icon: <Users className="w-6 h-6" />,
      href: "/icp",
      tasks: [
        { name: "Analyser votre marché", completed: false },
        { name: "Définir votre avatar client", completed: false },
        { name: "Valider votre ICP", completed: false }
      ]
    },
    {
      title: "Branding",
      description: "Construisez une image de marque forte et cohérente",
      progress: 0,
      icon: <Palette className="w-6 h-6" />,
      href: "/branding",
      tasks: [
        { name: "Définir votre identité visuelle", completed: false },
        { name: "Créer votre story brand", completed: false },
        { name: "Valider votre positionnement", completed: false }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-heading mb-4">Votre Parcours d'Onboarding</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suivez votre progression et accédez à tous vos documents essentiels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="w-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {section.icon}
                  <span className="text-sm text-muted-foreground">{section.progress}% complété</span>
                </div>
                <CardTitle className="text-2xl font-heading">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={section.progress} className="w-full" />
                
                <div className="space-y-2">
                  {section.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 ${task.completed ? 'text-green-500' : 'text-gray-300'}`} />
                      <span className={task.completed ? 'line-through text-muted-foreground' : ''}>
                        {task.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={section.href} className="block mt-4">
                  <Button className="w-full group">
                    Continuer
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="w-full shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Documents Essentiels</CardTitle>
            <CardDescription>Accédez rapidement à tous vos documents importants</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Guide de Démarrage", icon: <FileText className="w-4 h-4" /> },
              { name: "Questionnaire ICP", icon: <FileText className="w-4 h-4" /> },
              { name: "Guide de Branding", icon: <FileText className="w-4 h-4" /> },
              { name: "Templates Marketing", icon: <FileText className="w-4 h-4" /> },
              { name: "Checklist Onboarding", icon: <FileText className="w-4 h-4" /> },
              { name: "Resources Additionnelles", icon: <FileText className="w-4 h-4" /> }
            ].map((doc, index) => (
              <Button key={index} variant="outline" className="flex items-center gap-2 justify-start h-auto py-4">
                {doc.icon}
                {doc.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold">Ton profil</h2>
        <p className="text-muted-foreground">
          Voici un aperçu de tes réponses. Tu peux les modifier à tout moment.
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
    </div>
  )
}

export default OnboardingOverviewPage 