import React from 'react'
import type { Metadata } from 'next'
import { Anton, Archivo_Black, Montserrat } from 'next/font/google'
import './globals.css'

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Thérapreneur - Espace Client',
  description: 'Plateforme privée pour les clients du programme Thérapreneur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${anton.variable} ${archivoBlack.variable} ${montserrat.variable} font-sans bg-white`}>
        {children}
      </body>
    </html>
  )
} 