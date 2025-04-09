import React, { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface TargetSectionProps {
  data: {
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
  onUpdate: (section: string, value: any) => void
}

export const TargetSection: FC<TargetSectionProps> = ({ data, onUpdate }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Votre Cible Idéale</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Démographie</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Genre</Label>
              <Input
                value={data.demographics.gender}
                onChange={(e) => onUpdate('demographics', { ...data.demographics, gender: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Âge</Label>
              <Input
                value={data.demographics.age}
                onChange={(e) => onUpdate('demographics', { ...data.demographics, age: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Localisation</Label>
              <Input
                value={data.demographics.location}
                onChange={(e) => onUpdate('demographics', { ...data.demographics, location: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Situation familiale</Label>
              <Input
                value={data.demographics.maritalStatus}
                onChange={(e) => onUpdate('demographics', { ...data.demographics, maritalStatus: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Comportements</h3>
          <div className="space-y-2">
            <Label>Plateformes préférées</Label>
            <Textarea
              value={data.behaviors.platforms.join(', ')}
              onChange={(e) => onUpdate('behaviors', { ...data.behaviors, platforms: e.target.value.split(', ') })}
            />
          </div>
          <div className="space-y-2">
            <Label>Formats de contenu préférés</Label>
            <Textarea
              value={data.behaviors.contentFormats.join(', ')}
              onChange={(e) => onUpdate('behaviors', { ...data.behaviors, contentFormats: e.target.value.split(', ') })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Problèmes</h3>
          <div className="space-y-2">
            <Label>Bloqueurs principaux</Label>
            <Textarea
              value={data.problems.blockers.join(', ')}
              onChange={(e) => onUpdate('problems', { ...data.problems, blockers: e.target.value.split(', ') })}
            />
          </div>
          <div className="space-y-2">
            <Label>Changements souhaités</Label>
            <Textarea
              value={data.problems.desiredChanges}
              onChange={(e) => onUpdate('problems', { ...data.problems, desiredChanges: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Motivations</h3>
          <div className="space-y-2">
            <Label>Déclencheurs</Label>
            <Textarea
              value={data.motivations.triggers}
              onChange={(e) => onUpdate('motivations', { ...data.motivations, triggers: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Objections</Label>
            <Textarea
              value={data.motivations.objections}
              onChange={(e) => onUpdate('motivations', { ...data.motivations, objections: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 