import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

// Structured data for SEO - Sitelinks
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://pickletrack.es/#organization',
      name: 'PickleTrack',
      url: 'https://pickletrack.es',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pickletrack.es/brand/logo-black.png',
        width: 400,
        height: 100,
      },
      description: 'Diseñamos, construimos y gestionamos instalaciones de Pickleball en colegios y otros espacios.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+34647432206',
        email: 'admin@pickletrack.es',
        contactType: 'customer service',
        availableLanguage: ['Spanish'],
      },
      sameAs: [
        'https://www.badgie.es/pickleball',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pickletrack.es/#website',
      url: 'https://pickletrack.es',
      name: 'PickleTrack',
      description: 'Pistas de Pickleball para Colegios y Clubs',
      publisher: { '@id': 'https://pickletrack.es/#organization' },
      inLanguage: 'es-ES',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://pickletrack.es/#navigation',
      name: 'Navegación Principal',
      hasPart: [
        {
          '@type': 'SiteNavigationElement',
          name: 'Inicio',
          url: 'https://pickletrack.es',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Colegios',
          url: 'https://pickletrack.es/colegios',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Sobre Nosotros',
          url: 'https://pickletrack.es/sobre-nosotros',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Contacto',
          url: 'https://pickletrack.es/contacto',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Servicios',
          url: 'https://pickletrack.es/#servicios',
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Partners',
          url: 'https://pickletrack.es/#partners',
        },
      ],
    },
  ],
}

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
    <html lang="es" className={`${bebasNeue.variable} ${dmSans.variable} light`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-pickletrack-black transition-colors duration-500" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
