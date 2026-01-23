import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
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
  metadataBase: new URL('https://pickletrack.es'),
  title: 'PickleTrack | Pistas de Pickleball para Colegios y Clubs',
  description: 'Diseñamos, construimos y gestionamos instalaciones de Pickleball en colegios y otros espacios. Más de 30 años de experiencia en escuelas deportivas.',
  keywords: ['pickleball', 'colegios', 'pistas', 'escuelas deportivas', 'Madrid', 'instalaciones deportivas'],
  authors: [{ name: 'PickleTrack' }],
  openGraph: {
    title: 'PickleTrack | Pistas de Pickleball',
    description: 'Diseñamos, construimos y gestionamos instalaciones de Pickleball',
    url: 'https://pickletrack.es',
    siteName: 'PickleTrack',
    images: [
      {
        url: '/brand/logo-black.png',
        width: 1200,
        height: 630,
        alt: 'PickleTrack - Pistas de Pickleball',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PickleTrack | Pistas de Pickleball',
    description: 'Diseñamos, construimos y gestionamos instalaciones de Pickleball',
    images: ['/brand/logo-black.png'],
  },
  icons: {
    icon: '/brand/icon.png',
    apple: '/brand/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${dmSans.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-pickletrack-black transition-colors duration-500" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
