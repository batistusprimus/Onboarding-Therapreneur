'use client'

import { type FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const DiscordProtocolPage: FC = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-heading mb-4">Protocole de communication et Serveur Discord</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bienvenue sur le Discord BPC
          </p>
        </div>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">📢 Règles Générales de Communication</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Privilégie les messages écrits concis et précis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Utilise des bullet points pour structurer tes demandes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Pas de messages vocaux – Tout doit pouvoir être lu rapidement, car l'équipe est souvent en appel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Mentionne la bonne personne ou le bon canal pour éviter les confusions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Si besoin, réserve un créneau d'appel avec l'équipe pour traiter un point plus complexe</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">📌 Canaux de Communication et Leur Utilisation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">💬 #discussion <span className="text-muted-foreground">(Canal général)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Espace libre pour discuter de sujets divers liés à la collaboration</li>
                  <li>Questions ouvertes qui ne rentrent pas dans les autres catégories</li>
                  <li>Annonces importantes sur la collaboration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">⚙️ #opérations <span className="text-muted-foreground">(Coordination & Suivi Global)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Contact direct avec le COO (Chief Operating Officer) pour les questions liées à l'organisation générale</li>
                  <li>Suivi des deadlines et des grandes étapes des projets</li>
                  <li>Gestion des urgences opérationnelles</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">📝 #copywriting <span className="text-muted-foreground">(Tunnel, Séquences Email, Livrables, Livres Blancs)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Modifications et validations des textes & contenus</li>
                  <li>Échanges sur les séquences email, landing pages, VSL</li>
                  <li>Ajustements sur les argumentaires et angles marketing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 #media-buying <span className="text-muted-foreground">(Publicités & Acquisition Payante)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Suivi et ajustements des campagnes Google Ads, Meta Ads, LinkedIn Ads, etc.</li>
                  <li>Questions sur les performances publicitaires, tracking & optimisation</li>
                  <li>Demandes de création ou de modification d'une campagne</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">✍️ #ghostwriting <span className="text-muted-foreground">(Contenus Réseaux Sociaux & Stratégie de Marque)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Échanges sur les posts LinkedIn et autres contenus de personal branding</li>
                  <li>Demandes de validation, ajustements et feedback sur les contenus</li>
                  <li>Planification et suivi du calendrier éditorial</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🆕 #nouvel-opt-in <span className="text-muted-foreground">(Nouveaux Prospects)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Notification automatique des nouveaux prospects générés</li>
                  <li>Suivi des leads qualifiés et actions à prendre</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">📆 #nouveau-meeting <span className="text-muted-foreground">(Rendez-vous Bookés)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Notification des nouveaux rendez-vous pris avec des prospects</li>
                  <li>Suivi des meetings et préparation si nécessaire</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🔊 Canal Vocal <span className="text-muted-foreground">(Discussions en direct)</span></h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Disponible pour des appels de dernière minute ou des échanges rapides</li>
                  <li>Utilisé principalement pour des mises au point urgentes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">🎯 Bonnes Pratiques de Communication</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Un message = une demande précise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Utilise toujours @mention pour interpeller la bonne personne</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Inclus les informations essentielles dès le premier message</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span>Si besoin d'un échange approfondi, propose directement un créneau d'appel</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center text-muted-foreground">
          <p>📩 Si tu as des questions sur ce protocole, envoie un message dans #discussion !</p>
          <p className="mt-2 font-semibold">Bonne collaboration à tous !</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="flex-1 max-w-md"
            onClick={() => window.open('https://discord.gg/votre-lien-discord', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Rejoindre le Discord
          </Button>

          <Link href="/onboarding" className="flex-1 max-w-md">
            <Button size="lg" className="w-full">
              Continuer
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DiscordProtocolPage 