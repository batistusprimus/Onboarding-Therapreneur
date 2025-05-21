'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Types pour notre masterclass
interface Palier {
  id: string;
  title: string;
  videoUrl: string;
  workbookUrl?: string;
  description?: string;
  tags?: string[];
  completed?: boolean;
  moduleId: number;
  rubrique?: string;
  form?: {
    sections: {
      title: string;
      fields: string[];
    }[];
  };
}

interface Rubrique {
  title: string;
  paliers: Palier[];
}

interface Part {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  pdfUrl: string;
  order: number;
}

interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  workbookUrl: string;
  parts: Part[];
  paliers: Palier[];
}

interface Introduction {
  title: string;
  description: string;
  videoUrl: string;
  workbookUrl: string;
}

interface MasterclassContent {
  introduction: Introduction;
  modules: Module[];
}

// Contenu de la masterclass
const masterclassContent: MasterclassContent = {
  introduction: {
    title: "Bienvenue dans la Masterclass Thérapreneur",
    description: "Découvrez comment transformer votre pratique thérapeutique en entreprise florissante.",
    videoUrl: "/videos/introduction.mp4",
    workbookUrl: "/workbooks/introduction.pdf",
  },
  modules: [
    {
      id: 0,
      title: "Introduction",
      description: "Comprendre comment fonctionne le programme",
      icon: "🧠",
      color: "#9F99EB",
      workbookUrl: "/workbooks/module-0.pdf",
      parts: [
        {
          id: "0.1",
          title: "Présentation du programme",
          description: "Découvrez les objectifs et la structure de la formation",
          videoUrl: "/videos/0-1-presentation.mp4",
          pdfUrl: "/pdfs/0-1-presentation.pdf",
          order: 1
        },
        {
          id: "0.2",
          title: "Méthodologie",
          description: "Comprendre l'approche pédagogique",
          videoUrl: "/videos/0-2-methodologie.mp4",
          pdfUrl: "/pdfs/0-2-methodologie.pdf",
          order: 2
        },
        {
          id: "0.3",
          title: "Outils et ressources",
          description: "Découvrir les outils mis à disposition",
          videoUrl: "/videos/0-3-outils.mp4",
          pdfUrl: "/pdfs/0-3-outils.pdf",
          order: 3
        },
        {
          id: "0.4",
          title: "Planning de formation",
          description: "Organiser son parcours d'apprentissage",
          videoUrl: "/videos/0-4-planning.mp4",
          pdfUrl: "/pdfs/0-4-planning.pdf",
          order: 4
        },
        {
          id: "0.5",
          title: "Objectifs personnels",
          description: "Définir ses objectifs de formation",
          videoUrl: "/videos/0-5-objectifs.mp4",
          pdfUrl: "/pdfs/0-5-objectifs.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "0.1",
          title: "Bienvenue",
          videoUrl: "/videos/0-1-bienvenue.mp4",
          tags: ["introduction", "bienvenue"],
          moduleId: 0
        },
        {
          id: "0.2",
          title: "Protocole Discord",
          videoUrl: "/videos/0-2-discord.mp4",
          tags: ["introduction", "discord"],
          moduleId: 0
        }
      ]
    },
    {
      id: 1,
      title: "Clarté",
      description: "Définir la vision, la cible et la posture du thérapeute digital",
      icon: "🎯",
      color: "#FF9800",
      workbookUrl: "/workbooks/module-1.pdf",
      parts: [
        {
          id: "1.1",
          title: "Vision et mission",
          description: "Définir sa vision et sa mission en tant que thérapeute digital",
          videoUrl: "/videos/1-1-vision.mp4",
          pdfUrl: "/pdfs/1-1-vision.pdf",
          order: 1
        },
        {
          id: "1.2",
          title: "Positionnement",
          description: "Identifier son positionnement unique sur le marché",
          videoUrl: "/videos/1-2-positionnement.mp4",
          pdfUrl: "/pdfs/1-2-positionnement.pdf",
          order: 2
        },
        {
          id: "1.3",
          title: "Cible idéale",
          description: "Définir son client idéal et ses problématiques",
          videoUrl: "/videos/1-3-cible.mp4",
          pdfUrl: "/pdfs/1-3-cible.pdf",
          order: 3
        },
        {
          id: "1.4",
          title: "Posture digitale",
          description: "Adopter la bonne posture en ligne",
          videoUrl: "/videos/1-4-posture.mp4",
          pdfUrl: "/pdfs/1-4-posture.pdf",
          order: 4
        },
        {
          id: "1.5",
          title: "Objectifs business",
          description: "Définir ses objectifs business concrets",
          videoUrl: "/videos/1-5-objectifs.mp4",
          pdfUrl: "/pdfs/1-5-objectifs.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "1.1",
          title: "Vidéo explicative",
          videoUrl: "/videos/1-1-explication.mp4",
          tags: ["clarté", "vision"],
          moduleId: 1
        },
        {
          id: "1.2",
          title: "Formulaire de clarté",
          videoUrl: "/videos/1-2-formulaire.mp4",
          tags: ["clarté", "formulaire"],
          moduleId: 1,
          form: {
            sections: [
              {
                title: "Objectifs à 12 mois",
                fields: ["objectif1", "objectif2", "objectif3"]
              },
              {
                title: "Spécialité / sous-niche / posture",
                fields: ["specialite", "niche", "posture"]
              },
              {
                title: "ICP",
                fields: ["avatar", "problematiques", "transformation"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Offre",
      description: "Créer une offre digitale claire et alignée",
      icon: "💡",
      color: "#4CAF50",
      workbookUrl: "/workbooks/module-2.pdf",
      parts: [
        {
          id: "2.1",
          title: "Structure d'offre",
          description: "Comprendre la structure d'une offre digitale efficace",
          videoUrl: "/videos/2-1-structure.mp4",
          pdfUrl: "/pdfs/2-1-structure.pdf",
          order: 1
        },
        {
          id: "2.2",
          title: "Promesse de valeur",
          description: "Créer une promesse de valeur percutante",
          videoUrl: "/videos/2-2-promesse.mp4",
          pdfUrl: "/pdfs/2-2-promesse.pdf",
          order: 2
        },
        {
          id: "2.3",
          title: "Méthodologie",
          description: "Structurer sa méthodologie de travail",
          videoUrl: "/videos/2-3-methodologie.mp4",
          pdfUrl: "/pdfs/2-3-methodologie.pdf",
          order: 3
        },
        {
          id: "2.4",
          title: "Tarification",
          description: "Définir sa stratégie de tarification",
          videoUrl: "/videos/2-4-tarification.mp4",
          pdfUrl: "/pdfs/2-4-tarification.pdf",
          order: 4
        },
        {
          id: "2.5",
          title: "Packaging",
          description: "Emballer son offre de manière attractive",
          videoUrl: "/videos/2-5-packaging.mp4",
          pdfUrl: "/pdfs/2-5-packaging.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "2.1",
          title: "Vidéo + exemple d'offre",
          videoUrl: "/videos/2-1-offre.mp4",
          tags: ["offre", "exemple"],
          moduleId: 2
        },
        {
          id: "2.2",
          title: "Formulaire d'offre",
          videoUrl: "/videos/2-2-formulaire.mp4",
          tags: ["offre", "formulaire"],
          moduleId: 2,
          form: {
            sections: [
              {
                title: "Offre signature",
                fields: ["nom", "promesse", "duree", "format", "prix"]
              },
              {
                title: "Méthodologie",
                fields: ["etape1", "etape2", "etape3"]
              },
              {
                title: "Résultats et bénéfices",
                fields: ["resultats", "benefices"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Acquisition Organique",
      description: "Poser les bases d'un écosystème de contenu simple",
      icon: "📣",
      color: "#2196F3",
      workbookUrl: "/workbooks/module-3.pdf",
      parts: [
        {
          id: "3.1",
          title: "Stratégie de contenu",
          description: "Définir sa stratégie de contenu",
          videoUrl: "/videos/3-1-strategie.mp4",
          pdfUrl: "/pdfs/3-1-strategie.pdf",
          order: 1
        },
        {
          id: "3.2",
          title: "Création de contenu",
          description: "Apprendre à créer du contenu engageant",
          videoUrl: "/videos/3-2-creation.mp4",
          pdfUrl: "/pdfs/3-2-creation.pdf",
          order: 2
        },
        {
          id: "3.3",
          title: "Distribution",
          description: "Optimiser la distribution de son contenu",
          videoUrl: "/videos/3-3-distribution.mp4",
          pdfUrl: "/pdfs/3-3-distribution.pdf",
          order: 3
        },
        {
          id: "3.4",
          title: "Engagement",
          description: "Augmenter l'engagement sur ses contenus",
          videoUrl: "/videos/3-4-engagement.mp4",
          pdfUrl: "/pdfs/3-4-engagement.pdf",
          order: 4
        },
        {
          id: "3.5",
          title: "Mesure et optimisation",
          description: "Mesurer et optimiser ses performances",
          videoUrl: "/videos/3-5-mesure.mp4",
          pdfUrl: "/pdfs/3-5-mesure.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "3.1",
          title: "Vidéo + Template Notion",
          videoUrl: "/videos/3-1-template.mp4",
          tags: ["acquisition", "organique"],
          moduleId: 3
        },
        {
          id: "3.2",
          title: "Formulaire d'acquisition",
          videoUrl: "/videos/3-2-formulaire.mp4",
          tags: ["acquisition", "formulaire"],
          moduleId: 3,
          form: {
            sections: [
              {
                title: "Canal choisi",
                fields: ["canal"]
              },
              {
                title: "Promesse de contenu",
                fields: ["angle1", "angle2", "angle3"]
              },
              {
                title: "Planning édito",
                fields: ["planning"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Acquisition Payante",
      description: "Préparer et lancer sa première campagne",
      icon: "🚀",
      color: "#E91E63",
      workbookUrl: "/workbooks/module-4.pdf",
      parts: [
        {
          id: "4.1",
          title: "Fondamentaux des publicités",
          description: "Comprendre les bases de la publicité en ligne",
          videoUrl: "/videos/4-1-fondamentaux.mp4",
          pdfUrl: "/pdfs/4-1-fondamentaux.pdf",
          order: 1
        },
        {
          id: "4.2",
          title: "Création de campagne",
          description: "Créer sa première campagne publicitaire",
          videoUrl: "/videos/4-2-campagne.mp4",
          pdfUrl: "/pdfs/4-2-campagne.pdf",
          order: 2
        },
        {
          id: "4.3",
          title: "Ciblage",
          description: "Maîtriser le ciblage publicitaire",
          videoUrl: "/videos/4-3-ciblage.mp4",
          pdfUrl: "/pdfs/4-3-ciblage.pdf",
          order: 3
        },
        {
          id: "4.4",
          title: "Créatifs",
          description: "Créer des visuels et copies efficaces",
          videoUrl: "/videos/4-4-creatifs.mp4",
          pdfUrl: "/pdfs/4-4-creatifs.pdf",
          order: 4
        },
        {
          id: "4.5",
          title: "Optimisation",
          description: "Optimiser ses campagnes publicitaires",
          videoUrl: "/videos/4-5-optimisation.mp4",
          pdfUrl: "/pdfs/4-5-optimisation.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "4.1",
          title: "Vidéo + mini-tuto Meta Ads",
          videoUrl: "/videos/4-1-meta-ads.mp4",
          tags: ["acquisition", "payante"],
          moduleId: 4
        },
        {
          id: "4.2",
          title: "Formulaire de campagne",
          videoUrl: "/videos/4-2-formulaire.mp4",
          tags: ["acquisition", "formulaire"],
          moduleId: 4,
          form: {
            sections: [
              {
                title: "Objectif de campagne",
                fields: ["objectif"]
              },
              {
                title: "Budget",
                fields: ["budget"]
              },
              {
                title: "Lien de tunnel",
                fields: ["lien"]
              },
              {
                title: "Audiences",
                fields: ["audience1", "audience2"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "Conversion",
      description: "Structurer les appels de vente et scripts",
      icon: "💬",
      color: "#9C27B0",
      workbookUrl: "/workbooks/module-5.pdf",
      parts: [
        {
          id: "5.1",
          title: "Processus de vente",
          description: "Comprendre le processus de vente",
          videoUrl: "/videos/5-1-processus.mp4",
          pdfUrl: "/pdfs/5-1-processus.pdf",
          order: 1
        },
        {
          id: "5.2",
          title: "Script de vente",
          description: "Créer son script de vente",
          videoUrl: "/videos/5-2-script.mp4",
          pdfUrl: "/pdfs/5-2-script.pdf",
          order: 2
        },
        {
          id: "5.3",
          title: "Objections",
          description: "Gérer les objections",
          videoUrl: "/videos/5-3-objections.mp4",
          pdfUrl: "/pdfs/5-3-objections.pdf",
          order: 3
        },
        {
          id: "5.4",
          title: "Clôture",
          description: "Maîtriser la clôture de vente",
          videoUrl: "/videos/5-4-cloture.mp4",
          pdfUrl: "/pdfs/5-4-cloture.pdf",
          order: 4
        },
        {
          id: "5.5",
          title: "Suivi",
          description: "Assurer le suivi post-appel",
          videoUrl: "/videos/5-5-suivi.mp4",
          pdfUrl: "/pdfs/5-5-suivi.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "5.1",
          title: "Vidéo + script d'appel",
          videoUrl: "/videos/5-1-script.mp4",
          tags: ["conversion", "vente"],
          moduleId: 5
        },
        {
          id: "5.2",
          title: "Formulaire de conversion",
          videoUrl: "/videos/5-2-formulaire.mp4",
          tags: ["conversion", "formulaire"],
          moduleId: 5,
          form: {
            sections: [
              {
                title: "Ton et posture",
                fields: ["ton", "posture"]
              },
              {
                title: "Objections",
                fields: ["objection1", "objection2", "objection3"]
              },
              {
                title: "Score de confort",
                fields: ["score"]
              },
              {
                title: "Actions à tester",
                fields: ["action1", "action2", "action3"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "Livraison",
      description: "Poser les bases de l'expérience client",
      icon: "📦",
      color: "#FFC107",
      workbookUrl: "/workbooks/module-6.pdf",
      parts: [
        {
          id: "6.1",
          title: "Onboarding",
          description: "Créer un onboarding efficace",
          videoUrl: "/videos/6-1-onboarding.mp4",
          pdfUrl: "/pdfs/6-1-onboarding.pdf",
          order: 1
        },
        {
          id: "6.2",
          title: "Suivi client",
          description: "Mettre en place le suivi client",
          videoUrl: "/videos/6-2-suivi.mp4",
          pdfUrl: "/pdfs/6-2-suivi.pdf",
          order: 2
        },
        {
          id: "6.3",
          title: "Outils de suivi",
          description: "Choisir ses outils de suivi",
          videoUrl: "/videos/6-3-outils.mp4",
          pdfUrl: "/pdfs/6-3-outils.pdf",
          order: 3
        },
        {
          id: "6.4",
          title: "Feedback",
          description: "Collecter et utiliser les feedbacks",
          videoUrl: "/videos/6-4-feedback.mp4",
          pdfUrl: "/pdfs/6-4-feedback.pdf",
          order: 4
        },
        {
          id: "6.5",
          title: "Amélioration continue",
          description: "Mettre en place l'amélioration continue",
          videoUrl: "/videos/6-5-amelioration.mp4",
          pdfUrl: "/pdfs/6-5-amelioration.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "6.1",
          title: "Vidéo + modèle de suivi",
          videoUrl: "/videos/6-1-suivi.mp4",
          tags: ["livraison", "client"],
          moduleId: 6
        },
        {
          id: "6.2",
          title: "Formulaire de livraison",
          videoUrl: "/videos/6-2-formulaire.mp4",
          tags: ["livraison", "formulaire"],
          moduleId: 6,
          form: {
            sections: [
              {
                title: "Format de suivi",
                fields: ["format"]
              },
              {
                title: "Fréquence",
                fields: ["frequence"]
              },
              {
                title: "Checklist",
                fields: ["checklist"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Croissance",
      description: "Mettre en place le pilotage mensuel",
      icon: "📈",
      color: "#673AB7",
      workbookUrl: "/workbooks/module-7.pdf",
      parts: [
        {
          id: "7.1",
          title: "KPIs",
          description: "Définir ses indicateurs clés",
          videoUrl: "/videos/7-1-kpis.mp4",
          pdfUrl: "/pdfs/7-1-kpis.pdf",
          order: 1
        },
        {
          id: "7.2",
          title: "Tableau de bord",
          description: "Créer son tableau de bord",
          videoUrl: "/videos/7-2-dashboard.mp4",
          pdfUrl: "/pdfs/7-2-dashboard.pdf",
          order: 2
        },
        {
          id: "7.3",
          title: "Analyse",
          description: "Analyser ses performances",
          videoUrl: "/videos/7-3-analyse.mp4",
          pdfUrl: "/pdfs/7-3-analyse.pdf",
          order: 3
        },
        {
          id: "7.4",
          title: "Objectifs",
          description: "Fixer et suivre ses objectifs",
          videoUrl: "/videos/7-4-objectifs.mp4",
          pdfUrl: "/pdfs/7-4-objectifs.pdf",
          order: 4
        },
        {
          id: "7.5",
          title: "Ajustements",
          description: "Ajuster sa stratégie",
          videoUrl: "/videos/7-5-ajustements.mp4",
          pdfUrl: "/pdfs/7-5-ajustements.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "7.1",
          title: "Vidéo + modèle dashboard",
          videoUrl: "/videos/7-1-dashboard.mp4",
          tags: ["croissance", "pilotage"],
          moduleId: 7
        },
        {
          id: "7.2",
          title: "Formulaire de croissance",
          videoUrl: "/videos/7-2-formulaire.mp4",
          tags: ["croissance", "formulaire"],
          moduleId: 7,
          form: {
            sections: [
              {
                title: "KPIs",
                fields: ["kpi1", "kpi2", "kpi3"]
              },
              {
                title: "Satisfaction client",
                fields: ["mesure"]
              },
              {
                title: "Objectif mensuel",
                fields: ["objectif"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Optimisation",
      description: "Préparer les étapes d'après : délégation, automatisation",
      icon: "🔁",
      color: "#607D8B",
      workbookUrl: "/workbooks/module-8.pdf",
      parts: [
        {
          id: "8.1",
          title: "Délégation",
          description: "Comprendre les bases de la délégation",
          videoUrl: "/videos/8-1-delegation.mp4",
          pdfUrl: "/pdfs/8-1-delegation.pdf",
          order: 1
        },
        {
          id: "8.2",
          title: "Automatisation",
          description: "Identifier les tâches à automatiser",
          videoUrl: "/videos/8-2-automatisation.mp4",
          pdfUrl: "/pdfs/8-2-automatisation.pdf",
          order: 2
        },
        {
          id: "8.3",
          title: "Outils",
          description: "Choisir ses outils d'automatisation",
          videoUrl: "/videos/8-3-outils.mp4",
          pdfUrl: "/pdfs/8-3-outils.pdf",
          order: 3
        },
        {
          id: "8.4",
          title: "Processus",
          description: "Documenter ses processus",
          videoUrl: "/videos/8-4-processus.mp4",
          pdfUrl: "/pdfs/8-4-processus.pdf",
          order: 4
        },
        {
          id: "8.5",
          title: "Évolution",
          description: "Planifier son évolution",
          videoUrl: "/videos/8-5-evolution.mp4",
          pdfUrl: "/pdfs/8-5-evolution.pdf",
          order: 5
        }
      ],
      paliers: [
        {
          id: "8.1",
          title: "Vidéo + SOP template",
          videoUrl: "/videos/8-1-sop.mp4",
          tags: ["optimisation", "délégation"],
          moduleId: 8
        },
        {
          id: "8.2",
          title: "Formulaire d'optimisation",
          videoUrl: "/videos/8-2-formulaire.mp4",
          tags: ["optimisation", "formulaire"],
          moduleId: 8,
          form: {
            sections: [
              {
                title: "Processus à déléguer",
                fields: ["processus"]
              },
              {
                title: "Outils",
                fields: ["outil1", "outil2"]
              },
              {
                title: "Blocages",
                fields: ["blocage1", "blocage2"]
              }
            ]
          }
        }
      ]
    }
  ]
};

export default function MasterclassPage() {
  const [activeModuleId, setActiveModuleId] = useState<number>(-1);
  const [activePartId, setActivePartId] = useState<string | null>(null);
  const [activePalierId, setActivePalierId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'focus' | 'explore'>('focus');
  const [clientInfo, setClientInfo] = useState<any>(null);
  const router = useRouter();

  // Vérifier l'état de connexion et récupérer les infos client
  useEffect(() => {
    const storedInfo = localStorage.getItem('clientInfo');
    if (storedInfo) {
      setClientInfo(JSON.parse(storedInfo));
      // Précharger la page dashboard spécifique au client
      router.prefetch(`/clients/${JSON.parse(storedInfo).id}`);
    } else {
      // Précharger la page template si pas de client connecté
      router.prefetch('/clients/template');
    }
  }, [router]);

  // Fonction pour gérer la navigation vers le dashboard
  const handleDashboardClick = () => {
    if (clientInfo) {
      router.push(`/clients/${clientInfo.id}`);
    } else {
      router.push('/clients/template');
    }
  };

  const currentModule = activeModuleId !== -1 ? masterclassContent.modules[activeModuleId] : null;
  const currentPart = currentModule?.parts.find(p => p.id === activePartId);
  const currentPartIndex = currentModule?.parts.findIndex(p => p.id === activePartId) ?? -1;

  const nextPart = currentPartIndex !== -1 && currentModule?.parts[currentPartIndex + 1];
  const prevPart = currentPartIndex !== -1 && currentModule?.parts[currentPartIndex - 1];
  const nextModule = currentModule && masterclassContent.modules[currentModule.id + 1];
  const isLastPart = currentPartIndex === (currentModule?.parts.length ?? 0) - 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Header fixe */}
      <div className="glass sticky top-0 z-40">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-accent">
                Masterclass Thérapreneur
              </h1>
              <p className="text-gray-600 mt-1">
                Transformez votre pratique thérapeutique en entreprise florissante
              </p>
            </div>
            <button
              onClick={handleDashboardClick}
              className="button-primary focus-visible"
            >
              <div className="flex items-center">
                <span>Dashboard</span>
                <span className="ml-2">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal avec padding-top pour compenser le header fixe */}
      <div className="container mx-auto px-4 pt-8 pb-8">
        {/* Mode d'affichage */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setViewMode('focus')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'focus'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Focus
            </button>
            <button
              onClick={() => setViewMode('explore')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'explore'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Explorer
            </button>
          </div>
        </div>

        {/* Contenu principal */}
        {viewMode === 'focus' ? (
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
            {/* Module sélectionné */}
            <div className="lg:col-span-1 order-1">
              {activeModuleId !== -1 && currentModule && (
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{currentModule.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold">{currentModule.title}</h2>
                      <p className="text-sm text-gray-500">{currentModule.parts.length} parties</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{currentModule.description}</p>
                  <div className="space-y-2">
                    {currentModule.parts.map((part) => (
                      <button
                        key={part.id}
                        onClick={() => setActivePartId(part.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                          activePartId === part.id
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-2">▶</span>
                          <span className="truncate">{part.title}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contenu principal (vidéo et détails) */}
            <div className="lg:col-span-2 order-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {activeModuleId === -1 ? (
                  <div className="p-8">
                    <div className="max-w-3xl mx-auto">
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                          {masterclassContent.introduction.title}
                        </h2>
                        <p className="text-gray-600 text-lg">
                          {masterclassContent.introduction.description}
                        </p>
                      </div>
                      <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
                        <video
                          src={masterclassContent.introduction.videoUrl}
                          controls
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <a
                          href={masterclassContent.introduction.workbookUrl}
                          download
                          className="w-full sm:w-auto inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md"
                        >
                          <span className="mr-2">📄</span>
                          Télécharge le PDF
                        </a>
                        <button
                          onClick={() => {
                            setActiveModuleId(0);
                            setActivePartId(masterclassContent.modules[0].parts[0].id);
                          }}
                          className="w-full sm:w-auto inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md"
                        >
                          Commencer le premier module
                          <span className="ml-2">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : currentPart ? (
                  <div className="p-8">
                    <div className="max-w-4xl mx-auto">
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">{currentModule?.icon}</span>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-800">
                              {currentPart.title}
                            </h2>
                            <p className="text-gray-500">
                              Module {currentModule?.title}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg mt-4">
                          {currentPart.description}
                        </p>
                      </div>
                      
                      <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
                        <video
                          src={currentPart.videoUrl}
                          controls
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                        <a
                          href={currentPart.pdfUrl}
                          download
                          className="w-full sm:w-auto inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md"
                        >
                          <span className="mr-2">📄</span>
                          Télécharge le PDF
                        </a>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-6 border-t border-gray-100">
                        {prevPart && (
                          <button
                            onClick={() => setActivePartId(prevPart.id)}
                            className="w-full sm:w-auto flex items-center px-6 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                          >
                            <span className="mr-2">←</span>
                            Leçon précédente
                          </button>
                        )}
                        {isLastPart && nextModule ? (
                          <button
                            onClick={() => {
                              setActiveModuleId(nextModule.id);
                              setActivePartId(nextModule.parts[0].id);
                            }}
                            className="w-full sm:w-auto flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md"
                          >
                            Module suivant
                            <span className="ml-2">→</span>
                          </button>
                        ) : nextPart ? (
                          <button
                            onClick={() => setActivePartId(nextPart.id)}
                            className="w-full sm:w-auto flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md"
                          >
                            Leçon suivante
                            <span className="ml-2">→</span>
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="max-w-3xl mx-auto">
                      <div className="flex items-center mb-6">
                        <span className="text-3xl mr-4">{currentModule?.icon}</span>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-800">
                            {currentModule?.title}
                          </h2>
                          <p className="text-gray-500">
                            {currentModule?.parts.length} parties
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg mb-6">
                        {currentModule?.description}
                      </p>
                      <p className="text-gray-500">
                        Sélectionne une partie pour commencer.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Liste des modules */}
            <div className="lg:col-span-1 order-3">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Modules</h2>
                <div className="space-y-2">
                  {masterclassContent.modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => setActiveModuleId(module.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                        activeModuleId === module.id
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{module.icon}</span>
                        <span className="font-medium">{module.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* En-tête */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Explorer la Masterclass</h2>
              <p className="text-gray-600">
                Découvre l'ensemble des modules et de leur contenu. Clique sur un module pour voir ses détails.
              </p>
            </div>

            {/* Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {masterclassContent.modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  {/* En-tête du module */}
                  <div
                    className="p-6 relative"
                    style={{ backgroundColor: module.color + '20' }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{module.icon}</span>
                      <h3 className="text-xl font-bold">{module.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {module.description}
                    </p>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs bg-white/80 text-gray-700 px-2 py-1 rounded-full">
                        {module.parts.length} parties
                      </span>
                    </div>
                  </div>

                  {/* Contenu du module */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Parties du module */}
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                        {module.parts.map((part) => (
                          <div
                            key={part.id}
                            className="group p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                            onClick={() => {
                              setViewMode('focus');
                              setActiveModuleId(module.id);
                              setActivePartId(part.id);
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1 min-w-0">
                                <p className="font-medium truncate">
                                  {part.title}
                                </p>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                  {part.description}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2 ml-4">
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                  Vidéo
                                </span>
                                <span className="text-gray-400 group-hover:text-gray-600">
                                  →
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bouton d'action */}
                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setViewMode('focus');
                            setActiveModuleId(module.id);
                            setActivePartId(module.parts[0].id);
                          }}
                          className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <span>Commence ce module</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 