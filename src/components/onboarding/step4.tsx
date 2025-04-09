import React, { FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Step4Props {
  onNext: (data: {
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
  }) => void
  onBack: () => void
}

export const Step4: FC<Step4Props> = ({ onNext, onBack }) => {
  const [data, setData] = useState({
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
  })

  const updateData = (section: 'mainOffer' | 'positioning', value: any) => {
    setData(prev => ({
      ...prev,
      [section]: value
    }))
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Ton offre
        </h2>
        <p className="text-muted-foreground">
          Décris-nous ton offre principale et son positionnement.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Section Offre principale */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-heading">Offre principale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="offerName">Nom de l'offre *</Label>
              <Input
                id="offerName"
                value={data.mainOffer.name}
                onChange={(e) => updateData('mainOffer', {
                  ...data.mainOffer,
                  name: e.target.value
                })}
                placeholder="Le nom de ton offre"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="offerContent">Contenu de l'offre *</Label>
              <Textarea
                id="offerContent"
                value={data.mainOffer.content}
                onChange={(e) => updateData('mainOffer', {
                  ...data.mainOffer,
                  content: e.target.value
                })}
                placeholder="Décris le contenu de ton offre"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="offerTarget">Public cible *</Label>
              <Input
                id="offerTarget"
                value={data.mainOffer.target}
                onChange={(e) => updateData('mainOffer', {
                  ...data.mainOffer,
                  target: e.target.value
                })}
                placeholder="À qui s'adresse cette offre ?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="offerTransformation">Transformation promise *</Label>
              <Textarea
                id="offerTransformation"
                value={data.mainOffer.transformation}
                onChange={(e) => updateData('mainOffer', {
                  ...data.mainOffer,
                  transformation: e.target.value
                })}
                placeholder="Quelle transformation apporte cette offre ?"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Section Positionnement */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-heading">Positionnement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="positioningPromise">Promesse principale *</Label>
              <Input
                id="positioningPromise"
                value={data.positioning.promise}
                onChange={(e) => updateData('positioning', {
                  ...data.positioning,
                  promise: e.target.value
                })}
                placeholder="Ta promesse principale"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positioningDifferentiation">Différenciation *</Label>
              <Textarea
                id="positioningDifferentiation"
                value={data.positioning.differentiation}
                onChange={(e) => updateData('positioning', {
                  ...data.positioning,
                  differentiation: e.target.value
                })}
                placeholder="En quoi es-tu différent des autres ?"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positioningResults">Résultats concrets *</Label>
              <Textarea
                id="positioningResults"
                value={data.positioning.results}
                onChange={(e) => updateData('positioning', {
                  ...data.positioning,
                  results: e.target.value
                })}
                placeholder="Quels résultats concrets peux-tu promettre ?"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positioningEmotions">Émotions visées *</Label>
              <Input
                id="positioningEmotions"
                value={data.positioning.emotions}
                onChange={(e) => updateData('positioning', {
                  ...data.positioning,
                  emotions: e.target.value
                })}
                placeholder="Quelles émotions veux-tu susciter ?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positioningTone">Ton de communication *</Label>
              <Input
                id="positioningTone"
                value={data.positioning.tone}
                onChange={(e) => updateData('positioning', {
                  ...data.positioning,
                  tone: e.target.value
                })}
                placeholder="Quel ton de communication utilises-tu ?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positioningAvoid">À éviter *</Label>
              <Textarea
                id="positioningAvoid"
                value={data.positioning.avoid}
                onChange={(e) => updateData('positioning', {
                  ...data.positioning,
                  avoid: e.target.value
                })}
                placeholder="Qu'est-ce que tu veux éviter dans ta communication ?"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="hover:scale-105 transition-transform"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          <Button
            onClick={() => onNext(data)}
            className="bg-gradient-to-r from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50 transition-all"
          >
            Suivant
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 