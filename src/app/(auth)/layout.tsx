import React from 'react'
import MainNav from '@/components/custom/MainNav'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            {/* Ajouter ici le bouton de profil et autres éléments */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          {children}
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Thérapreneur. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
} 