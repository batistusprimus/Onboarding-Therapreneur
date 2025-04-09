import React, { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

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

interface OfferSectionProps {
  data: OfferData;
  onUpdate: (key: keyof OfferData, value: string | string[] | boolean) => void;
}

export const OfferSection: FC<OfferSectionProps> = ({ data, onUpdate }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Nom de ton offre principale</h2>
        <Input
          value={data.name}
          onChange={(e) => onUpdate('name', e.target.value)}
          placeholder="Comment s'appelle ton offre ?"
        />
        <Textarea
          placeholder="Si tu n'as pas encore de nom, veux-tu que l'on t'aide à en définir un ?"
          value={data.name}
          onChange={(e) => onUpdate('name', e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Détails concrets de l'offre</h2>
        <Label>Formats proposés</Label>
        <Textarea
          placeholder="Séances 1:1, Séances de groupe, Programme en ligne, etc."
          value={data.formats}
          onChange={(e) => onUpdate('formats', e.target.value)}
        />
        <Label>Durée de l'accompagnement</Label>
        <Input
          placeholder="Durée totale du suivi"
          value={data.duration}
          onChange={(e) => onUpdate('duration', e.target.value)}
        />
        <Input
          placeholder="Fréquence des séances"
          value={data.frequency}
          onChange={(e) => onUpdate('frequency', e.target.value)}
        />
        <Label>Modalités pratiques</Label>
        <Textarea
          placeholder="En présentiel, En visio, etc."
          value={Array.isArray(data.modalities) ? data.modalities.join(', ') : data.modalities}
          onChange={(e) => onUpdate('modalities', e.target.value.split(', '))}
        />
        <Label>Supports inclus</Label>
        <Textarea
          placeholder="Documents ou outils fournis"
          value={Array.isArray(data.supports) ? data.supports.join(', ') : data.supports}
          onChange={(e) => onUpdate('supports', e.target.value.split(', '))}
        />
        <Label>Support entre les séances</Label>
        <Input
          type="checkbox"
          checked={Boolean(data.supportBetweenSessions)}
          onChange={(e) => onUpdate('supportBetweenSessions', e.target.checked.toString())}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Cible de l'offre</h2>
        <Textarea
          placeholder="À qui s'adresse précisément ton offre ?"
          value={data.target}
          onChange={(e) => onUpdate('target', e.target.value)}
        />
        <Textarea
          placeholder="Niveau d'expérience, besoins spécifiques, etc."
          value={data.experienceLevel}
          onChange={(e) => onUpdate('experienceLevel', e.target.value)}
        />
        <Textarea
          placeholder="Décris ton client idéal en une phrase"
          value={data.idealClientDescription}
          onChange={(e) => onUpdate('idealClientDescription', e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Problème & transformation</h2>
        <Textarea
          placeholder="Problème principal de tes clients"
          value={data.mainProblem}
          onChange={(e) => onUpdate('mainProblem', e.target.value)}
        />
        <Textarea
          placeholder="Transformation proposée"
          value={data.transformation}
          onChange={(e) => onUpdate('transformation', e.target.value)}
        />
        <Textarea
          placeholder="Résultats attendus"
          value={data.resultsTime}
          onChange={(e) => onUpdate('resultsTime', e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Positionnement & différenciation</h2>
        <Textarea
          placeholder="Qu'est-ce qui rend ton offre unique ?"
          value={data.uniqueness}
          onChange={(e) => onUpdate('uniqueness', e.target.value)}
        />
        <Textarea
          placeholder="Pourquoi te choisir toi ?"
          value={data.clientChoiceReason}
          onChange={(e) => onUpdate('clientChoiceReason', e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Garantie & preuves</h2>
        <Textarea
          placeholder="Proposes-tu une garantie ?"
          value={data.guarantee}
          onChange={(e) => onUpdate('guarantee', e.target.value)}
        />
        <Textarea
          placeholder="As-tu des témoignages ?"
          value={data.testimonials}
          onChange={(e) => onUpdate('testimonials', e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Bonus & ajouts</h2>
        <Textarea
          placeholder="As-tu prévu des bonus ?"
          value={data.bonuses}
          onChange={(e) => onUpdate('bonuses', e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading">Prix & modalités de paiement</h2>
        <Input
          placeholder="Prix total de l'offre"
          value={data.price}
          onChange={(e) => onUpdate('price', e.target.value)}
        />
        <Textarea
          placeholder="Acceptes-tu le paiement en plusieurs fois ?"
          value={data.installmentOptions}
          onChange={(e) => onUpdate('installmentOptions', e.target.value)}
        />
        <Textarea
          placeholder="Quels moyens de paiement utilises-tu ?"
          value={data.paymentMethods}
          onChange={(e) => onUpdate('paymentMethods', e.target.value)}
        />
      </div>
    </div>
  )
} 