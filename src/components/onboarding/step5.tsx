import React from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Upload, Image, Palette, Type, Globe, Clock, MessageSquare, Hash } from 'lucide-react';

interface FormData {
  logo: File | null;
  colors: string;
  fonts: string;
  existingAssets: File[];
  platforms: string[];
  frequency: string;
  formats: string[];
  testimonials: boolean;
  example: string;
  tagline: string;
  hashtags: string[];
  inspirations: string;
}

interface Step5Props {
  onNext: (data: FormData) => void;
}

export const Step5: React.FC<Step5Props> = ({ onNext }) => {
  const [formData, setFormData] = React.useState<FormData>({
    // Identité visuelle
    logo: null,
    colors: '',
    fonts: '',
    existingAssets: [],

    // Contenus & Réseaux
    platforms: [''],
    frequency: '',
    formats: [''],
    testimonials: false,
    example: '',

    // Communication
    tagline: '',
    hashtags: [''],
    inspirations: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof FormData]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'existingAssets') => {
    const files = e.target.files;
    if (files) {
      if (field === 'logo') {
        setFormData(prev => ({ ...prev, logo: files[0] }));
      } else {
        setFormData(prev => ({ ...prev, existingAssets: Array.from(files) }));
      }
    }
  };

  const handleArrayChange = (field: keyof Pick<FormData, 'platforms' | 'formats' | 'hashtags'>, index: number, value: string) => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const handleAddItem = (field: keyof Pick<FormData, 'platforms' | 'formats' | 'hashtags'>) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Branding & Communication</h2>
      
      <p className="text-gray-600 mb-8">
        Pour bien t'accompagner, on a aussi besoin de comprendre ta communication actuelle et ton identité de marque.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Identité visuelle */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Identité visuelle</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Logo</label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="logo-upload"
                  onChange={(e) => handleFileChange(e, 'logo')}
                />
                <label
                  htmlFor="logo-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Image className="w-8 h-8 mb-2" />
                  <span>Uploader ton logo</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Palette de couleurs</label>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                <Input
                  name="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  placeholder="Tes couleurs principales (ex: #2C3E50, #E74C3C)"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Polices</label>
              <div className="flex items-center gap-2">
                <Type className="w-5 h-5" />
                <Input
                  name="fonts"
                  value={formData.fonts}
                  onChange={handleChange}
                  placeholder="Tes polices (ex: Montserrat, Anton)"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Visuels existants</label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="hidden"
                  id="assets-upload"
                  onChange={(e) => handleFileChange(e, 'existingAssets')}
                />
                <label
                  htmlFor="assets-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-8 h-8 mb-2" />
                  <span>Uploader tes visuels pro ou vidéos existants</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Contenus & Réseaux */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contenus & Réseaux</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Plateformes actives</label>
              {formData.platforms.map((platform, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-1">
                    <Globe className="w-5 h-5" />
                    <Input
                      value={platform}
                      onChange={(e) => handleArrayChange('platforms', index, e.target.value)}
                      placeholder="Plateforme (ex: Instagram, LinkedIn)"
                    />
                  </div>
                  {index === formData.platforms.length - 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleAddItem('platforms')}
                    >
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fréquence de publication</label>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <Input
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  placeholder="À quelle fréquence publies-tu du contenu ?"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Formats préférés</label>
              {formData.formats.map((format, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-1">
                    <MessageSquare className="w-5 h-5" />
                    <Input
                      value={format}
                      onChange={(e) => handleArrayChange('formats', index, e.target.value)}
                      placeholder="Format (ex: posts, vidéos, newsletters)"
                    />
                  </div>
                  {index === formData.formats.length - 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleAddItem('formats')}
                    >
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Témoignages</label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="testimonials"
                  checked={formData.testimonials}
                  onChange={(e) => setFormData(prev => ({ ...prev, testimonials: e.target.checked }))}
                />
                <label htmlFor="testimonials">J'ai déjà reçu des témoignages ou études de cas</label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Exemple de contenu</label>
              <Textarea
                name="example"
                value={formData.example}
                onChange={handleChange}
                placeholder="Partage un exemple de contenu qui a bien fonctionné"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Communication */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Communication</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Slogan</label>
              <Input
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                placeholder="Ton slogan ou phrase d'accroche"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hashtags</label>
              {formData.hashtags.map((hashtag, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-1">
                    <Hash className="w-5 h-5" />
                    <Input
                      value={hashtag}
                      onChange={(e) => handleArrayChange('hashtags', index, e.target.value)}
                      placeholder="Hashtag ou mot-clé"
                    />
                  </div>
                  {index === formData.hashtags.length - 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleAddItem('hashtags')}
                    >
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Inspirations</label>
              <Textarea
                name="inspirations"
                value={formData.inspirations}
                onChange={handleChange}
                placeholder="Y a-t-il un entrepreneur ou une marque qui t'inspire ?"
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-primary text-white">
            Terminer
          </Button>
        </div>
      </form>
    </Card>
  );
}; 