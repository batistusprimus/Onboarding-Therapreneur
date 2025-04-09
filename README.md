# Thérapreneur - Espace Client

Plateforme privée pour les clients du programme Thérapreneur, permettant l'accès aux ressources pédagogiques, à la masterclass et au suivi personnalisé.

## Stack Technique

- **Frontend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Authentication**: NextAuth.js avec email/password
- **Database**: JSON local (préparé pour future intégration Notion API)
- **Hosting**: Vercel

## Structure du Projet

```
src/
├── app/                    # App Router pages
│   ├── (auth)/            # Routes authentifiées
│   │   ├── dashboard/     # Page d'accueil client
│   │   ├── onboarding/    # Formulaire multi-étapes
│   │   ├── masterclass/   # Modules de formation
│   │   ├── ressources/    # Ressources téléchargeables
│   │   ├── equipe/        # Présentation de l'équipe
│   │   ├── faq/          # Questions fréquentes
│   │   └── support/      # Support et contact
│   ├── admin/            # Interface administrateur
│   └── api/              # Routes API
├── components/           # Composants réutilisables
│   ├── ui/              # Composants shadcn/ui
│   └── custom/          # Composants spécifiques
├── lib/                 # Utilitaires et helpers
├── types/              # Types TypeScript
└── constants/          # Constants et configuration
```

## Design System

### Couleurs
- Fond: `#FFFFFF`
- Primaire: `#2C3E50` (bleu thérapeutique)
- Accent: `#000000`

### Typographie
- Titres: Anton
- Sous-titres: Archivo Black
- Texte: Montserrat

### Composants Principaux
- `CardModule`: Affichage des modules de formation
- `StepForm`: Formulaire multi-étapes pour l'onboarding
- `DashboardWidget`: Widgets du tableau de bord
- `RessourceItem`: Affichage des ressources

## Installation

1. Cloner le repository
```bash
git clone [url-du-repo]
cd therapreneur-client
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer en développement
```bash
npm run dev
```

## Authentification

Le système utilise NextAuth.js avec:
- Connexion email/password
- Rôles utilisateur: `client`, `admin`
- Protection des routes par middleware
- Sessions persistantes

## Onboarding

Le formulaire multi-étapes est situé dans `src/app/(auth)/onboarding/` et utilise:
- React Hook Form pour la validation
- Zod pour le typage des données
- Stockage local JSON (préparé pour Notion API)

## Future Intégration Notion API

La structure est préparée pour l'intégration avec Notion:
- Types définis dans `src/types/notion.ts`
- Adaptateurs dans `src/lib/notion/`
- Configuration dans `src/constants/notion.ts`

## Administration

### Ajout de Modules
1. Accéder à `/admin/modules`
2. Utiliser le formulaire d'ajout
3. Uploader les ressources associées

### Gestion des Utilisateurs
1. Accéder à `/admin/users`
2. Gérer les rôles et accès
3. Voir les progressions

## Extensions Possibles

- Intégration Discord via Webhook
- Système de notifications
- Analytics et suivi de progression
- Export des données d'onboarding
- Chat en direct avec les coachs

## Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request 