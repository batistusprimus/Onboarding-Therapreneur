import React from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface FormData {
  gender: string;
  age: string;
  location: string;
  maritalStatus: string;
  education: string;
  profession: string;
  annualIncome: string;
  platforms: string[];
  contentFormats: string[];
  interests: string[];
  buyingHabits: string;
  blockers: string[];
  desiredChanges: string;
  expectations: string;
  triggers: string;
  objections: string;
  fears: string;
}

interface Step3Props {
  onNext: (data: FormData) => void;
}

export const Step3: React.FC<Step3Props> = ({ onNext }) => {
  const [formData, setFormData] = React.useState<FormData>({
    // Données démographiques
    gender: '',
    age: '',
    location: '',
    maritalStatus: '',
    education: '',
    profession: '',
    annualIncome: '',

    // Comportements & habitudes
    platforms: [''],
    contentFormats: [''],
    interests: [''],
    buyingHabits: '',

    // Problèmes & besoins
    blockers: ['', '', ''],
    desiredChanges: '',
    expectations: '',

    // Motivations & objections
    triggers: '',
    objections: '',
    fears: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof FormData]: value
    }));
  };

  const handleArrayChange = (field: keyof Pick<FormData, 'platforms' | 'contentFormats' | 'interests' | 'blockers'>, index: number, value: string) => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const handleAddItem = (field: keyof Pick<FormData, 'platforms' | 'contentFormats' | 'interests' | 'blockers'>) => {
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
      <h2 className="text-2xl font-bold mb-6">Client idéal (ICP)</h2>
      
      <p className="text-gray-600 mb-8">
        Définis précisément la personne que tu veux accompagner. Plus c'est clair, plus ta communication sera efficace.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Données démographiques */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Données démographiques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Sexe</label>
              <Select
                value={formData.gender}
                onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionne le sexe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="homme">Homme</SelectItem>
                  <SelectItem value="femme">Femme</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Âge</label>
              <Input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Âge moyen"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Localisation</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Où habite-t-il ?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Statut marital</label>
              <Input
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                placeholder="Statut marital"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Niveau d'étude</label>
              <Input
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Niveau d'étude"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Profession</label>
              <Input
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Profession"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Revenu annuel</label>
              <Input
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                placeholder="Revenu annuel estimé"
                required
              />
            </div>
          </div>
        </div>

        {/* Comportements & habitudes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Comportements & habitudes</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Plateformes utilisées</label>
              {formData.platforms.map((platform, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={platform}
                    onChange={(e) => handleArrayChange('platforms', index, e.target.value)}
                    placeholder="Plateforme (ex: Instagram, LinkedIn)"
                  />
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
              <label className="block text-sm font-medium mb-1">Formats de contenu préférés</label>
              {formData.contentFormats.map((format, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={format}
                    onChange={(e) => handleArrayChange('contentFormats', index, e.target.value)}
                    placeholder="Format (ex: vidéos, articles)"
                  />
                  {index === formData.contentFormats.length - 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleAddItem('contentFormats')}
                    >
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Centres d'intérêt</label>
              {formData.interests.map((interest, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={interest}
                    onChange={(e) => handleArrayChange('interests', index, e.target.value)}
                    placeholder="Centre d'intérêt"
                  />
                  {index === formData.interests.length - 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleAddItem('interests')}
                    >
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Habitudes d'achat</label>
              <Textarea
                name="buyingHabits"
                value={formData.buyingHabits}
                onChange={handleChange}
                placeholder="Quelles sont ses habitudes d'achat de services thérapeutiques ou de coaching ?"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        {/* Problèmes & besoins */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Problèmes & besoins</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">3 plus grands blocages</label>
              {formData.blockers.map((blocker, index) => (
                <Input
                  key={index}
                  value={blocker}
                  onChange={(e) => handleArrayChange('blockers', index, e.target.value)}
                  placeholder={`Blocage ${index + 1}`}
                  className="mb-2"
                  required
                />
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Changements souhaités</label>
              <Textarea
                name="desiredChanges"
                value={formData.desiredChanges}
                onChange={handleChange}
                placeholder="Que cherche-t-il à changer ou améliorer dans sa vie ?"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Attentes</label>
              <Textarea
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                placeholder="Qu'attend-il concrètement d'un accompagnement comme le tien ?"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        {/* Motivations & objections */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Motivations & objections</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Motivations</label>
              <Textarea
                name="triggers"
                value={formData.triggers}
                onChange={handleChange}
                placeholder="Qu'est-ce qui peut le motiver à agir maintenant ?"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Objections</label>
              <Textarea
                name="objections"
                value={formData.objections}
                onChange={handleChange}
                placeholder="Quelles objections principales pourrait-il avoir avant d'acheter ton service ?"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Peur</label>
              <Textarea
                name="fears"
                value={formData.fears}
                onChange={handleChange}
                placeholder="De quoi a-t-il peur en découvrant ton offre ?"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-primary text-white">
            Valider
          </Button>
        </div>
      </form>
    </Card>
  );
}; 