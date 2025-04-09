import React, { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

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

interface BrandingSectionProps {
  data: BrandingData
  onUpdate: (section: keyof BrandingData, value: any) => void
}

export const BrandingSection: FC<BrandingSectionProps> = ({ data, onUpdate }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-heading">Identité Visuelle</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Logo</Label>
          <Input
            type="text"
            placeholder="URL de votre logo"
            value={data.visualIdentity.logo}
            onChange={(e) => onUpdate('visualIdentity', { ...data.visualIdentity, logo: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Palette de couleurs</Label>
          <Textarea
            placeholder="Entrez vos couleurs principales (séparées par des virgules)"
            value={data.visualIdentity.colors.join(', ')}
            onChange={(e) => onUpdate('visualIdentity', { ...data.visualIdentity, colors: e.target.value.split(', ') })}
          />
        </div>
        <div className="space-y-2">
          <Label>Typographie</Label>
          <Input
            value={data.visualIdentity.typography}
            onChange={(e) => onUpdate('visualIdentity', { ...data.visualIdentity, typography: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Style visuel</Label>
          <Textarea
            value={data.visualIdentity.visualStyle}
            onChange={(e) => onUpdate('visualIdentity', { ...data.visualIdentity, visualStyle: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  )
} 