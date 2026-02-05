import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | PickleTrack - Quiénes Somos',
  description: 'Conoce al equipo de PickleTrack. Más de 30 años de experiencia en escuelas deportivas, +40 profesionales. Diseñamos, construimos y gestionamos pistas de Pickleball.',
  keywords: [
    'pickletrack equipo',
    'quienes somos pickletrack',
    'escuelas deportivas madrid',
    'experiencia pickleball',
  ],
  openGraph: {
    title: 'Sobre Nosotros | PickleTrack',
    description: 'Más de 30 años de experiencia en escuelas deportivas. Conoce al equipo de PickleTrack.',
    url: 'https://pickletrack.es/sobre-nosotros',
  },
  alternates: {
    canonical: 'https://pickletrack.es/sobre-nosotros',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre Nosotros - PickleTrack',
  description: 'Información sobre el equipo de PickleTrack',
  url: 'https://pickletrack.es/sobre-nosotros',
  mainEntity: {
    '@type': 'Organization',
    name: 'PickleTrack',
    foundingDate: '1994',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 40,
    },
  },
}

export default function SobreNosotrosPage() {
  const stats = [
    { number: '+30', label: 'Años de Experiencia', color: 'lime' },
    { number: '+40', label: 'Profesionales', color: 'cyan' },
    { number: '1994', label: 'Año de Fundación', color: 'gold' },
    { number: '0€', label: 'Inversión Tuya', color: 'magenta' },
  ]

  const valores = [
    {
      title: 'Excelencia',
      description: 'Más de 30 años gestionando las escuelas de Tenis y Pádel en el Club de Campo Villa de Madrid nos avalan.',
      icon: '🏆',
    },
    {
      title: 'Innovación',
      description: 'Traemos el deporte de mayor crecimiento mundial a España con instalaciones de última generación.',
      icon: '💡',
    },
    {
      title: 'Compromiso',
      description: 'Invertimos en las instalaciones y gestionamos todo. Tu institución solo disfruta del retorno.',
      icon: '🤝',
    },
    {
      title: 'Profesionalidad',
      description: 'Un equipo de más de 40 profesionales dedicados a ofrecer la mejor experiencia deportiva.',
      icon: '⭐',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-20 pb-16 bg-gradient-to-br from-pickletrack-black via-pickletrack-dark to-pickletrack-black hero-light-wrapper">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pickletrack-gold/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pickletrack-cyan/15 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
            <p className="font-body text-accent-gold text-sm uppercase tracking-[0.3em] mb-4">
              Nuestra Historia
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase mb-6">
              <span className="text-theme-primary">Sobre</span>{' '}
              <span className="gradient-text-gold">Nosotros</span>
            </h1>
            <p className="font-body text-xl text-theme-secondary max-w-2xl mx-auto">
              Más de tres décadas de experiencia en escuelas deportivas,
              ahora llevando el Pickleball a toda España.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 bg-pickletrack-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className={`font-display text-5xl md:text-6xl text-pickletrack-${stat.color} mb-2`}>
                    {stat.number}
                  </p>
                  <p className="font-body text-sm text-theme-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black">
          <div className="absolute inset-0 bg-grid opacity-15" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-body text-accent-lime text-sm uppercase tracking-[0.3em] mb-4">
                  Nuestra Trayectoria
                </p>
                <h2 className="section-heading text-theme-primary mb-8">
                  +30 Años de <span className="gradient-text">Excelencia</span>
                </h2>
                <div className="space-y-6 text-theme-secondary font-body text-lg leading-relaxed">
                  <p>
                    Desde <strong className="text-accent-gold">1994</strong>, nuestro equipo gestiona
                    las escuelas de Tenis y Pádel en el prestigioso{' '}
                    <strong className="text-theme-primary">Club de Campo Villa de Madrid</strong>.
                  </p>
                  <p>
                    Ahora, con <strong className="text-accent-lime">PickleTrack</strong>, llevamos
                    nuestra experiencia al deporte de mayor crecimiento del mundo: el Pickleball.
                  </p>
                  <p>
                    Nuestro modelo es único: <strong className="text-accent-cyan">invertimos nosotros</strong> en
                    las instalaciones y gestionamos las escuelas. Tu institución solo disfruta de
                    los beneficios sin arriesgar un euro.
                  </p>
                </div>
              </div>

              {/* Team Photo */}
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/gallery/wilson-tennis-point-group.jpg"
                    alt="Equipo PickleTrack con Wilson y Tennis Point"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pickletrack-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-xl uppercase tracking-wider text-white">
                      Nuestro Equipo
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-5 py-3 bg-pickletrack-lime text-pickletrack-black">
                  <p className="font-display text-2xl">+40</p>
                  <p className="font-body text-xs uppercase">Profesionales</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="relative py-20 lg:py-24 bg-pickletrack-black">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-body text-accent-cyan text-sm uppercase tracking-[0.3em] mb-4">
                Lo Que Nos Define
              </p>
              <h2 className="section-heading text-theme-primary">
                Nuestros <span className="gradient-text">Valores</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor) => (
                <div
                  key={valor.title}
                  className="p-6 bg-theme-card border border-theme-subtle rounded-xl hover:border-pickletrack-lime/30 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{valor.icon}</span>
                  <h3 className="font-display text-xl text-theme-primary uppercase tracking-wide mb-3">
                    {valor.title}
                  </h3>
                  <p className="font-body text-sm text-theme-muted leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="relative py-16 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="font-body text-accent-gold text-sm uppercase tracking-[0.3em] mb-4">
              Trabajamos Con
            </p>
            <h2 className="font-display text-3xl text-theme-primary uppercase mb-12">
              Partners de Confianza
            </h2>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {['Wilson', 'Tennis Point', 'Badgie', 'RPPk'].map((partner) => (
                <div key={partner} className="text-center">
                  <p className="font-display text-2xl text-theme-primary">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-pickletrack-black">
          <div className="absolute inset-0 bg-gradient-to-r from-pickletrack-lime/5 via-transparent to-pickletrack-gold/5" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="section-heading text-theme-primary mb-6">
              ¿Quieres <span className="gradient-text">Trabajar</span> con Nosotros?
            </h2>
            <p className="font-body text-xl text-theme-secondary mb-8">
              Si representas a un colegio, club u hotel y quieres instalar pistas de Pickleball, hablemos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="btn-primary">
                Contactar
              </Link>
              <Link href="/colegios" className="btn-secondary">
                Info para Colegios
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 bg-theme-secondary border-t border-theme-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link href="/" className="relative w-36 h-12">
                <Image
                  src="/brand/pickletrack.png"
                  alt="PickleTrack"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="font-body text-sm text-theme-muted">
                © 2026 PickleTrack. Diseño - Construcción - Gestión
              </p>
              <Link
                href="/"
                className="font-body text-sm text-theme-muted hover:text-accent-lime transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
