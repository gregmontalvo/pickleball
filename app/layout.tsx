import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PickleTrack | Pistas de Pickleball para Colegios y Clubs',
  description: 'Diseñamos, construimos y gestionamos instalaciones de Pickleball en colegios y otros espacios. Más de 30 años de experiencia en escuelas deportivas.',
  keywords: ['pickleball', 'colegios', 'pistas', 'escuelas deportivas', 'Madrid', 'instalaciones deportivas'],
  authors: [{ name: 'PickleTrack' }],
  openGraph: {
    title: 'PickleTrack | Pistas de Pickleball',
    description: 'Diseñamos, construimos y gestionamos instalaciones de Pickleball',
    url: 'https://pickletrack.es',
    siteName: 'PickleTrack',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-pickletrack-black">
        {children}
      </body>
    </html>
  )
}
