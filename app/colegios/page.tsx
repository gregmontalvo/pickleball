import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { InstitutionContactForm } from '@/components/contact/InstitutionContactForm'

export const metadata: Metadata = {
  title: 'Pistas de Pickleball para Colegios | PickleTrack',
  description: 'Instalamos pistas de Pickleball en tu colegio sin inversión. Diseño, construcción y gestión de escuelas deportivas incluido. El deporte escolar del futuro ya está aquí.',
  keywords: [
    'pistas pickleball colegios',
    'instalar pickleball colegio',
    'pickleball escolar',
    'deporte escolar pickleball',
    'pistas deportivas colegios madrid',
    'instalaciones deportivas colegios',
    'pickleball educación',
    'extraescolares pickleball',
  ],
  authors: [{ name: 'PickleTrack' }],
  openGraph: {
    title: 'Pistas de Pickleball para Colegios | PickleTrack',
    description: 'Instalamos pistas de Pickleball en tu colegio sin inversión. Diseño, construcción y gestión incluidos.',
    url: 'https://pickletrack.es/colegios',
    siteName: 'PickleTrack',
    images: [
      {
        url: '/brand/og-colegios.png',
        width: 1200,
        height: 630,
        alt: 'PickleTrack - Pistas de Pickleball para Colegios',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pistas de Pickleball para Colegios | PickleTrack',
    description: 'Instalamos pistas sin inversión. Diseño, construcción y gestión incluidos.',
    images: ['/brand/og-colegios.png'],
  },
  alternates: {
    canonical: 'https://pickletrack.es/colegios',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured data for SEO - Service oriented
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Instalación de Pistas de Pickleball para Colegios - PickleTrack',
  description: 'Servicio completo de diseño, construcción y gestión de pistas de Pickleball para instituciones educativas sin inversión inicial.',
  provider: {
    '@type': 'Organization',
    name: 'PickleTrack',
    url: 'https://pickletrack.es',
  },
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  serviceType: 'Instalación deportiva',
  url: 'https://pickletrack.es/colegios',
}

export default function ColegiosPage() {
  const beneficios = [
    {
      icon: '💰',
      title: 'Cero Inversión',
      description: 'PickleTrack corre con todos los gastos de instalación. Tu colegio no pone ni un euro.',
    },
    {
      icon: '🎯',
      title: 'Optimiza Espacios',
      description: 'Una pista de tenis equivale a 4 de pickleball. Más alumnos, mismo espacio.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Para Todas las Edades',
      description: 'Desde niños de 4 años hasta adultos. MiniTenis y Pickleball en las mismas pistas.',
    },
    {
      icon: '📈',
      title: 'Ingresos Pasivos',
      description: 'Alquiler de pistas fuera del horario escolar. Beneficio compartido.',
    },
  ]

  const proceso = [
    {
      step: '01',
      title: 'Evaluación',
      description: 'Visitamos tu centro y evaluamos el espacio disponible: patio, pista antigua, azotea...',
      color: 'lime',
    },
    {
      step: '02',
      title: 'Diseño',
      description: 'Creamos un proyecto a medida con opciones de colores, cubiertas e iluminación LED.',
      color: 'cyan',
    },
    {
      step: '03',
      title: 'Instalación',
      description: 'Construimos las pistas con materiales profesionales. PickleTrack asume el 100% del coste.',
      color: 'magenta',
    },
    {
      step: '04',
      title: 'Gestión',
      description: 'Gestionamos escuelas, alquileres y eventos. Tú solo disfrutas del retorno.',
      color: 'gold',
    },
  ]

  const incluido = [
    { text: 'Diseño personalizado de pistas', icon: '/brand/icons/icon-court-horizontal-white.png' },
    { text: 'Construcción con resinas de alta calidad', icon: '/brand/icons/icon-toggle-left-white.png' },
    { text: 'Equipamiento Wilson para alumnos', icon: '/brand/icons/pickleball.png' },
    { text: 'Gestión de escuelas con +40 profesionales', icon: '/brand/icons/icon-chat-white.png' },
    { text: 'Sistema digital Badgie (inscripciones e insignias)', icon: '/brand/icons/icon-square-white.png' },
    { text: 'Organización de eventos y torneos', icon: '/brand/icons/icon-toggle-right-white.png' },
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
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 bg-gradient-to-br from-pickletrack-black via-pickletrack-dark to-pickletrack-black hero-light-wrapper overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pickletrack-lime/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pickletrack-gold/20 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pickletrack-lime/10 border border-pickletrack-lime/30 rounded-full">
                  <span className="w-2 h-2 bg-pickletrack-lime rounded-full animate-pulse" />
                  <span className="font-body text-sm text-accent-lime uppercase tracking-wider font-semibold">
                    Sin Inversión
                  </span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] uppercase">
                  <span className="gradient-text">Pickleball</span>
                  <br />
                  <span className="text-theme-primary">para tu</span>
                  <br />
                  <span className="text-accent-gold">Colegio</span>
                </h1>

                <p className="font-body text-lg md:text-xl text-theme-secondary max-w-lg leading-relaxed">
                  Instalamos pistas profesionales <strong className="text-accent-lime">sin que pongas un euro</strong>.
                  Diseño, construcción y gestión de escuelas deportivas incluido.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#contacto" className="btn-primary inline-flex items-center gap-2">
                    <span>Solicitar Información</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#proceso" className="btn-secondary">
                    Cómo Funciona
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 mt-4 border-t border-theme-subtle">
                  <div className="text-center">
                    <p className="font-display text-3xl md:text-4xl text-accent-lime">0€</p>
                    <p className="font-body text-xs text-theme-muted uppercase tracking-wider">Inversión</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl md:text-4xl text-accent-cyan">+30</p>
                    <p className="font-body text-xs text-theme-muted uppercase tracking-wider">Años Exp.</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl md:text-4xl text-accent-gold">+40</p>
                    <p className="font-body text-xs text-theme-muted uppercase tracking-wider">Profesionales</p>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* Courts stack visualization */}
                  <div className="relative w-full max-w-[450px] h-[500px] mx-auto courts-container">
                    <div className="absolute top-0 left-0 transition-all duration-500 hover:translate-x-2 hover:-translate-y-2">
                      <Image
                        src="/courts/court-cyan-removebg-preview.png"
                        alt="Pista Pickleball"
                        width={220}
                        height={320}
                        className="w-[200px] h-auto drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
                      />
                    </div>
                    <div className="absolute top-16 left-24 transition-all duration-500 hover:translate-x-2 hover:-translate-y-2">
                      <Image
                        src="/courts/court-lime-removebg-preview.png"
                        alt="Pista Pickleball"
                        width={220}
                        height={320}
                        className="w-[200px] h-auto drop-shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                      />
                    </div>
                    <div className="absolute top-32 left-48 transition-all duration-500 hover:translate-x-2 hover:-translate-y-2">
                      <Image
                        src="/courts/court-magenta-removebg-preview.png"
                        alt="Pista Pickleball"
                        width={220}
                        height={320}
                        className="w-[200px] h-auto drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]"
                      />
                    </div>

                    {/* Floating badges */}
                    <div className="absolute top-4 right-0 px-5 py-2.5 bg-pickletrack-gold text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float shadow-2xl z-20 rounded">
                      Sin Coste
                    </div>
                    <div className="absolute bottom-32 left-0 px-5 py-2.5 bg-pickletrack-lime text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float shadow-2xl z-20 rounded" style={{ animationDelay: '0.5s' }}>
                      Llave en Mano
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué Pickleball */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black">
          <div className="absolute inset-0 bg-grid-dense opacity-10" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-body text-accent-lime text-sm uppercase tracking-[0.3em] mb-4">
                El Deporte del Futuro
              </p>
              <h2 className="section-heading text-theme-primary">
                ¿Por qué <span className="gradient-text">Pickleball</span>?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((beneficio, index) => (
                <div
                  key={beneficio.title}
                  className="p-6 bg-theme-card border border-theme-subtle rounded-xl hover:border-pickletrack-lime/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-4xl mb-4 block">{beneficio.icon}</span>
                  <h3 className="font-display text-xl text-theme-primary uppercase tracking-wide mb-3">
                    {beneficio.title}
                  </h3>
                  <p className="font-body text-sm text-theme-muted leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo Funciona */}
        <section id="proceso" className="relative py-20 lg:py-24 bg-pickletrack-black">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-body text-accent-gold text-sm uppercase tracking-[0.3em] mb-4">
                Proceso
              </p>
              <h2 className="section-heading text-theme-primary">
                Cómo <span className="gradient-text-gold">Funciona</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {proceso.map((paso) => (
                <div key={paso.step} className="group relative card-neon">
                  <div className={`font-display text-7xl text-pickletrack-${paso.color}/20 absolute -top-2 -left-2 group-hover:text-pickletrack-${paso.color}/40 transition-colors`}>
                    {paso.step}
                  </div>
                  <div className="relative pt-12">
                    <h3 className={`font-display text-2xl uppercase tracking-wide text-pickletrack-${paso.color} mb-3`}>
                      {paso.title}
                    </h3>
                    <p className="font-body text-theme-muted leading-relaxed">
                      {paso.description}
                    </p>
                  </div>
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-pickletrack-${paso.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué Incluimos */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black">
          <div className="absolute inset-0 bg-grid opacity-15" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-body text-accent-cyan text-sm uppercase tracking-[0.3em] mb-4">
                  Todo Incluido
                </p>
                <h2 className="section-heading text-theme-primary mb-8">
                  Qué <span className="gradient-text">Incluimos</span>
                </h2>

                <div className="space-y-4">
                  {incluido.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-4 p-4 bg-theme-card border border-theme-subtle rounded-lg hover:border-pickletrack-cyan/30 transition-colors"
                    >
                      <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="opacity-70"
                        />
                      </div>
                      <span className="font-body text-theme-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners */}
              <div className="space-y-8">
                <div className="p-8 bg-theme-card border border-theme-subtle rounded-2xl">
                  <h3 className="font-display text-2xl text-theme-primary uppercase mb-6">
                    Nuestros Partners
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { name: 'Wilson', desc: 'Equipamiento oficial' },
                      { name: 'Tennis Point', desc: 'Retail deportivo' },
                      { name: 'Badgie', desc: 'Gestión digital' },
                      { name: 'RPPk', desc: 'Registro Profesional' },
                    ].map((partner) => (
                      <div key={partner.name} className="text-center">
                        <p className="font-display text-lg text-accent-gold">{partner.name}</p>
                        <p className="font-body text-xs text-theme-muted">{partner.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-accent-lime-subtle border border-pickletrack-lime/30 rounded-xl">
                  <p className="font-body text-theme-secondary leading-relaxed">
                    <strong className="text-accent-lime">+30 años de experiencia</strong> gestionando escuelas
                    de Tenis y Pádel en el Club de Campo Villa de Madrid. Más de 40 profesionales
                    preparados para llevar el pickleball a tu centro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Formulario */}
        <section id="contacto" className="relative py-20 lg:py-24 bg-pickletrack-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pickletrack-lime/5 via-pickletrack-cyan/5 to-pickletrack-magenta/5" />
            <div className="absolute inset-0 bg-grid opacity-20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-body text-accent-lime text-sm uppercase tracking-[0.3em] mb-4">
                Contacto
              </p>
              <h2 className="section-heading text-theme-primary mb-6">
                ¿Interesado en <span className="gradient-text">Instalar Pistas</span>?
              </h2>
              <p className="font-body text-xl text-theme-secondary max-w-2xl mx-auto">
                Déjanos tus datos y te contactamos para evaluar tu espacio sin compromiso.
              </p>
            </div>

            <div className="bg-theme-card border border-theme-subtle rounded-2xl p-8">
              <InstitutionContactForm />
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-theme-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-lime-subtle rounded-lg flex items-center justify-center">
                  <Image
                    src="/brand/icons/icon-chat-white.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className="font-body text-xs text-theme-muted uppercase">Email</p>
                  <a href="mailto:admin@pickletrack.es" className="font-body text-theme-primary hover:text-accent-lime transition-colors">
                    admin@pickletrack.es
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-gold-subtle rounded-lg flex items-center justify-center">
                  <Image
                    src="/brand/icons/icon-pin-white.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className="font-body text-xs text-theme-muted uppercase">Teléfono</p>
                  <a href="tel:+34647432206" className="font-body text-theme-primary hover:text-accent-gold transition-colors">
                    +34 647 432 206
                  </a>
                </div>
              </div>
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
                © 2026 PickleTrack. Pistas de Pickleball para Colegios.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="font-body text-sm text-theme-muted hover:text-accent-lime transition-colors"
                >
                  ← Volver a PickleTrack
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
