import React from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface Step2Props {
  onNext: (data: any) => void;
}

export const Step2: React.FC<Step2Props> = ({ onNext }) => {
  const [formData, setFormData] = React.useState({
    // Identité
    firstName: '',
    lastName: '',
    email: '',

    // Activité actuelle
    businessName: '',
    experienceYears: '',
    location: '',
    specialty: '',
    workMode: 'hybride',
    annualRevenue: '',
    website: '',
    teamSize: '',

    // Vision & Objectifs
    mission: '',
    transformation: '',
    twelveMonthsGoal: '',
    objectives: ['', '', ''],
    currentBlockers: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleObjectiveChange = (index: number, value: string) => {
    const newObjectives = [...formData.objectives];
    newObjectives[index] = value;
    setFormData(prev => ({
      ...prev,
      objectives: newObjectives
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Objectifs & Vision</h2>
      
      <p className="text-gray-600 mb-8">
        On commence par clarifier ta mission, ta vision et tes objectifs. Prends ton temps pour répondre.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Identité */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Identité</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Prénom</label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Ton prénom"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Ton nom"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ton email"
                required
              />
            </div>
          </div>
        </div>

        {/* Section Activité actuelle */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ton activité actuelle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom de l'activité</label>
              <Input
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Le nom de ton activité"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Expérience</label>
              <Input
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                placeholder="Depuis quand exerces-tu ?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Localisation</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Où es-tu basé ?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Spécialité</label>
              <Input
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                placeholder="Ta spécialité thérapeutique principale"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mode de travail</label>
              <Select
                value={formData.workMode}
                onValueChange={(value) => setFormData(prev => ({ ...prev, workMode: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionne un mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presentiel">Présentiel</SelectItem>
                  <SelectItem value="distanciel">Distanciel</SelectItem>
                  <SelectItem value="hybride">Hybride</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CA annuel</label>
              <Input
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleChange}
                placeholder="Chiffre d'affaires annuel approximatif"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Site web</label>
              <Input
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="URL de ton site web (si tu en as un)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Équipe</label>
              <Input
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                placeholder="Nombre de personnes dans ton équipe"
                required
              />
            </div>
          </div>
        </div>

        {/* Section Vision & Objectifs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Vision & Objectifs</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Mission</label>
              <Textarea
                name="mission"
                value={formData.mission}
                onChange={handleChange}
                placeholder="Quelle est la mission principale de ton activité ?"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Transformation</label>
              <Textarea
                name="transformation"
                value={formData.transformation}
                onChange={handleChange}
                placeholder="Quelle transformation veux-tu apporter à tes clients ?"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Objectif 12 mois</label>
              <Textarea
                name="twelveMonthsGoal"
                value={formData.twelveMonthsGoal}
                onChange={handleChange}
                placeholder="Où veux-tu être dans 12 mois ?"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">3 objectifs principaux</label>
              {formData.objectives.map((objective, index) => (
                <Input
                  key={index}
                  value={objective}
                  onChange={(e) => handleObjectiveChange(index, e.target.value)}
                  placeholder={`Objectif ${index + 1}`}
                  className="mb-2"
                  required
                />
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Blocages actuels</label>
              <Textarea
                name="currentBlockers"
                value={formData.currentBlockers}
                onChange={handleChange}
                placeholder="Qu'est-ce qui te bloque actuellement pour atteindre tes objectifs ?"
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