import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Escuela Pickleball Saint Chaumond Madrid | PickleTrack',
  description: 'Escuela de Pickleball y MiniTenis en el Colegio Saint Chaumond de Madrid. Clases para niños y adultos. Inscripciones abiertas desde agosto 2026. 3 pistas profesionales.',
  keywords: [
    'escuela pickleball madrid',
    'clases pickleball niños',
    'minitenis bola roja',
    'colegio saint chaumond',
    'pickleball infantil madrid',
    'escuela deportiva madrid',
    'aprender pickleball',
    'cursos pickleball 2026'
  ],
  authors: [{ name: 'PickleTrack' }],
  openGraph: {
    title: 'Escuela Pickleball Saint Chaumond | PickleTrack',
    description: 'Aprende Pickleball y MiniTenis en el Colegio Saint Chaumond de Madrid. Inscripciones abiertas.',
    url: 'https://pickletrack.es/escuela/saint-chaumond',
    siteName: 'PickleTrack',
    images: [
      {
        url: '/brand/og-escuela-saint-chaumond.png',
        width: 1200,
        height: 630,
        alt: 'Escuela Pickleball Saint Chaumond - PickleTrack',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escuela Pickleball Saint Chaumond | PickleTrack',
    description: 'Aprende Pickleball y MiniTenis en Madrid. Inscripciones abiertas.',
    images: ['/brand/og-escuela-saint-chaumond.png'],
  },
  alternates: {
    canonical: 'https://pickletrack.es/escuela/saint-chaumond',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Escuela Pickleball Saint Chaumond - PickleTrack',
  description: 'Escuela de Pickleball y MiniTenis para niños y adultos en Madrid',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C. de Rodríguez Marín, 30-32',
    addressLocality: 'Madrid',
    postalCode: '28002',
    addressRegion: 'Chamartín',
    addressCountry: 'ES',
  },
  sport: ['Pickleball', 'Tennis'],
  openingHours: 'Mo,We 16:00-20:00, Sa,Su 10:00-14:00',
  url: 'https://pickletrack.es/escuela/saint-chaumond',
}

export default function SaintChaumondPage() {
  const eventos = [
    {
      fecha: '19 y 26 Abril 2026',
      titulo: 'Puertas Abiertas',
      descripcion: 'Ven a conocer el pickleball, jugar y probarlo. Sesiones gratuitas para toda la familia.',
      tipo: 'open',
    },
    {
      fecha: '24 Mayo 2026',
      titulo: 'Torneo Familiar',
      descripcion: 'Torneo Padres/Madres e Hijas. Una jornada de diversión y competición en familia.',
      tipo: 'torneo',
    },
    {
      fecha: '6 y 7 Junio 2026',
      titulo: 'Torneo Escolar',
      descripcion: 'Competición por categorías para todos los niveles. Premios y diversión asegurada.',
      tipo: 'torneo',
    },
  ]

  const programas = [
    {
      nombre: 'Pickleball',
      edades: 'Desde 8 años',
      descripcion: 'El deporte de raqueta que más crece en el mundo. Fácil de aprender, difícil de dominar. Perfecto para todas las edades.',
      color: 'lime',
      icon: '🏓',
    },
    {
      nombre: 'MiniTenis Bola Roja',
      edades: '4 a 7 años',
      descripcion: 'Iniciación al tenis con pelotas de baja presión. Las pistas de pickleball son ideales para este programa de iniciación.',
      color: 'magenta',
      icon: '🎾',
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
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-pickletrack-black via-[#0a1628] to-pickletrack-black hero-light-wrapper overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-grid opacity-20" />

          {/* Decorative gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1a5fb4]/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pickletrack-gold/20 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-8 pt-12 md:pt-16 pb-20 md:pb-32">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text content */}
              <div className="space-y-6 md:space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-pickletrack-gold/10 border border-pickletrack-gold/30 rounded-full backdrop-blur-sm">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-pickletrack-gold rounded-full animate-pulse" />
                  <span className="font-body text-sm md:text-base text-accent-gold uppercase tracking-wider font-semibold">
                    Inscripciones Agosto 2026
                  </span>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <p className="font-body text-theme-muted text-lg md:text-xl tracking-wide">
                    Colegio Union-Chrétienne de
                  </p>
                  <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] uppercase">
                    <span className="text-theme-primary">Saint</span>
                    <br />
                    <span className="text-accent-gold relative">
                      Chaumond
                      {/* Underline accent */}
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-gold via-accent-lime to-accent-cyan rounded-full opacity-60" />
                    </span>
                  </h1>
                </div>

                <p className="font-body text-xl md:text-2xl text-theme-secondary max-w-lg md:max-w-2xl leading-relaxed">
                  Escuela de <strong className="text-accent-lime font-bold">Pickleball</strong> y{' '}
                  <strong className="text-accent-magenta font-bold">MiniTenis</strong> en el corazón de Madrid.
                  3 pistas de última generación.
                </p>

                <div className="flex flex-wrap gap-4 pt-4 md:pt-6">
                  <a
                    href="#inscripcion"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <span>Quiero Inscribirme</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#eventos" className="btn-secondary">
                    Ver Eventos
                  </a>
                </div>

                {/* Quick stats - styled card */}
                <div className="hero-stats-card grid grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 mt-4 md:mt-6 mb-8 md:mb-12">
                  <div className="text-center">
                    <p className="font-display text-4xl md:text-5xl text-accent-lime mb-1 md:mb-2">3</p>
                    <p className="font-body text-xs md:text-sm text-theme-muted uppercase tracking-wider font-medium">Pistas</p>
                  </div>
                  <div className="text-center border-x border-theme-subtle">
                    <p className="font-display text-4xl md:text-5xl text-accent-cyan mb-1 md:mb-2">2</p>
                    <p className="font-body text-xs md:text-sm text-theme-muted uppercase tracking-wider font-medium">Programas</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-4xl md:text-5xl text-accent-gold mb-1 md:mb-2">+40</p>
                    <p className="font-body text-xs md:text-sm text-theme-muted uppercase tracking-wider font-medium">Profesionales</p>
                  </div>
                </div>
              </div>

              {/* Visual - Dynamic sports illustration */}
              <div className="relative hidden lg:block">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a5fb4]/20 via-pickletrack-gold/10 to-transparent rounded-3xl blur-2xl" />

                  {/* Main card */}
                  <div className="hero-visual-card relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center justify-center">
                    {/* Court lines decoration */}
                    <div className="absolute inset-8 border-2 border-dashed border-accent-lime/20 rounded-xl" />
                    <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-accent-lime/20" />

                    {/* PickleTrack logo */}
                    <div className="relative w-48 h-16 mb-6 z-10">
                      <Image
                        src="/brand/pickletrack.png"
                        alt="PickleTrack"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-6" />

                    {/* School name */}
                    <div className="text-center z-10">
                      <p className="font-body text-theme-muted text-sm uppercase tracking-[0.2em] mb-2">
                        Union-Chrétienne de
                      </p>
                      <h2 className="font-display text-4xl text-theme-primary uppercase tracking-wide">
                        Saint Chaumond
                      </h2>
                    </div>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-theme-muted/20 to-transparent my-6" />

                    {/* Tagline */}
                    <div className="flex items-center gap-4 text-theme-muted font-body text-sm uppercase tracking-widest">
                      <span>Escuela</span>
                      <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                      <span>Equipos</span>
                      <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                      <span>Instalación</span>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 px-5 py-2.5 bg-gradient-to-r from-accent-lime to-pickletrack-lime text-pickletrack-black font-display text-sm uppercase tracking-wider rounded-lg shadow-lg transform rotate-3">
                      Nuevo 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="font-body text-xs uppercase tracking-widest text-theme-subtle">Descubre más</span>
            <div className="w-px h-8 bg-gradient-to-b from-accent-gold to-transparent" />
          </div>
        </section>

        {/* Qué es Pickleball */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black">
          <div className="absolute inset-0 bg-grid-dense opacity-10" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-body text-accent-lime text-sm uppercase tracking-[0.3em] mb-4">
                  El deporte del momento
                </p>
                <h2 className="section-heading text-theme-primary mb-6">
                  ¿Qué es el <span className="gradient-text">Pickleball</span>?
                </h2>
                <div className="space-y-4 text-theme-secondary font-body text-lg leading-relaxed">
                  <p>
                    El <strong className="text-theme-primary">Pickleball</strong> combina elementos del tenis,
                    bádminton y ping-pong. Se juega en una pista más pequeña con palas sólidas
                    y una pelota perforada.
                  </p>
                  <p>
                    Es el <strong className="text-accent-lime">deporte de mayor crecimiento</strong> en
                    Estados Unidos y Europa. Fácil de aprender para principiantes, pero con
                    suficiente profundidad táctica para mantener a los jugadores avanzados comprometidos.
                  </p>
                  <p>
                    <strong className="text-accent-gold">Perfecto para todas las edades</strong>: desde niños
                    de 4 años hasta adultos mayores. La pista pequeña reduce el impacto físico
                    mientras mantiene la diversión y competitividad.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🎯', title: 'Fácil de aprender', desc: 'Domina los básicos en tu primera clase' },
                  { icon: '👨‍👩‍👧‍👦', title: 'Para toda la familia', desc: 'Niños y adultos pueden jugar juntos' },
                  { icon: '💪', title: 'Ejercicio completo', desc: 'Cardio, coordinación y reflejos' },
                  { icon: '🤝', title: 'Social', desc: 'Conoce gente mientras te diviertes' },
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-6 bg-theme-card border border-theme-subtle rounded-xl hover:border-pickletrack-lime/30 transition-colors"
                  >
                    <span className="text-4xl mb-4 block">{benefit.icon}</span>
                    <h3 className="font-display text-lg text-theme-primary uppercase tracking-wide mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-sm text-theme-muted">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programas */}
        <section id="programas" className="relative py-20 lg:py-24 bg-pickletrack-black">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-body text-accent-gold text-sm uppercase tracking-[0.3em] mb-4">
                Nuestros Programas
              </p>
              <h2 className="section-heading text-theme-primary">
                Elige tu <span className="gradient-text-gold">Disciplina</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {programas.map((programa) => (
                <div
                  key={programa.nombre}
                  className={`relative p-8 bg-theme-card border border-theme-subtle rounded-2xl hover:border-pickletrack-${programa.color}/60 transition-all duration-500 group`}
                >
                  <span className="text-6xl mb-6 block">{programa.icon}</span>
                  <h3 className={`font-display text-3xl ${programa.color === 'lime' ? 'text-accent-lime' : 'text-accent-magenta'} uppercase tracking-wide mb-2`}>
                    {programa.nombre}
                  </h3>
                  <p className="font-body text-theme-muted text-sm uppercase tracking-wider mb-4">
                    {programa.edades}
                  </p>
                  <p className="font-body text-theme-secondary leading-relaxed">
                    {programa.descripcion}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-pickletrack-${programa.color}/5 rounded-bl-[100px] group-hover:bg-pickletrack-${programa.color}/10 transition-colors`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eventos Promocionales */}
        <section id="eventos" className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black">
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-body text-accent-cyan text-sm uppercase tracking-[0.3em] mb-4">
                Primavera 2026
              </p>
              <h2 className="section-heading text-theme-primary">
                Eventos <span className="gradient-text">Promocionales</span>
              </h2>
              <p className="font-body text-theme-muted text-lg mt-4 max-w-2xl mx-auto">
                Antes del inicio de la escuela, ven a conocernos y probar el pickleball en nuestros eventos gratuitos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {eventos.map((evento, index) => (
                <div
                  key={evento.titulo}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative p-8 bg-theme-card border border-theme-subtle rounded-xl hover:border-pickletrack-lime/30 transition-all duration-500 h-full">
                    {/* Date badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-lime-subtle border border-pickletrack-lime/30 rounded-full mb-6">
                      <svg className="w-4 h-4 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-body text-sm text-accent-lime">{evento.fecha}</span>
                    </div>

                    <h3 className="font-display text-2xl text-theme-primary uppercase tracking-wide mb-3">
                      {evento.titulo}
                    </h3>
                    <p className="font-body text-theme-secondary leading-relaxed">
                      {evento.descripcion}
                    </p>

                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pickletrack-lime via-pickletrack-cyan to-pickletrack-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
                  </div>

                  {/* Number indicator */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-pickletrack-lime text-pickletrack-black font-display text-lg flex items-center justify-center rounded">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horarios y Precios */}
        <section id="horarios" className="relative py-20 lg:py-24 bg-pickletrack-black">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Horarios */}
              <div>
                <p className="font-body text-accent-lime text-sm uppercase tracking-[0.3em] mb-4">
                  Curso 2026-2027
                </p>
                <h2 className="section-heading text-theme-primary mb-8">
                  Horarios
                </h2>

                <div className="space-y-4">
                  {[
                    { dia: 'Lunes', horario: '16:00 - 20:00', tipo: 'Escuela' },
                    { dia: 'Miércoles', horario: '16:00 - 20:00', tipo: 'Escuela' },
                    { dia: 'Sábado', horario: '10:00 - 14:00', tipo: 'Escuela + Alquiler' },
                    { dia: 'Domingo', horario: '10:00 - 14:00', tipo: 'Alquiler' },
                  ].map((item) => (
                    <div
                      key={item.dia}
                      className="flex items-center justify-between p-4 bg-theme-card border border-theme-subtle rounded-lg"
                    >
                      <div>
                        <p className="font-display text-xl text-theme-primary uppercase">{item.dia}</p>
                        <p className="font-body text-sm text-theme-muted">{item.tipo}</p>
                      </div>
                      <p className="font-body text-accent-lime">{item.horario}</p>
                    </div>
                  ))}
                </div>

                <p className="font-body text-theme-subtle text-sm mt-6 italic">
                  * Horarios orientativos. El calendario definitivo se publicará en agosto 2026.
                </p>
              </div>

              {/* Info adicional */}
              <div>
                <p className="font-body text-accent-gold text-sm uppercase tracking-[0.3em] mb-4">
                  Información
                </p>
                <h2 className="section-heading text-theme-primary mb-8">
                  Detalles
                </h2>

                <div className="space-y-6">
                  <div className="p-6 bg-accent-gold-subtle border border-theme-subtle rounded-xl">
                    <h3 className="font-display text-xl text-accent-gold uppercase mb-3">
                      Inicio de Clases
                    </h3>
                    <p className="font-body text-theme-secondary">
                      Septiembre 2026. Las inscripciones se abrirán en <strong className="text-theme-primary">agosto 2026</strong> a
                      través de la plataforma Badgie.
                    </p>
                  </div>

                  <div className="p-6 bg-accent-lime-subtle border border-theme-subtle rounded-xl">
                    <h3 className="font-display text-xl text-accent-lime uppercase mb-3">
                      Instalaciones
                    </h3>
                    <p className="font-body text-theme-secondary">
                      <strong className="text-theme-primary">3 pistas profesionales</strong> de última generación.
                      Resina de alta calidad, líneas reglamentarias y equipamiento Wilson incluido.
                    </p>
                  </div>

                  <div className="p-6 bg-accent-cyan-subtle border border-theme-subtle rounded-xl">
                    <h3 className="font-display text-xl text-accent-cyan uppercase mb-3">
                      Equipamiento
                    </h3>
                    <p className="font-body text-theme-secondary">
                      Material <strong className="text-theme-primary">Wilson</strong> disponible para todos los alumnos.
                      Palas, pelotas y accesorios incluidos durante las clases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-body text-accent-magenta text-sm uppercase tracking-[0.3em] mb-4">
                Dónde Estamos
              </p>
              <h2 className="section-heading text-theme-primary">
                Ubicación
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Map placeholder */}
              <div className="aspect-video bg-pickletrack-dark/50 border border-white/10 rounded-xl overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0!2d-3.6782!3d40.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422895c2c8d9a1%3A0x8c2e6c4b8f5e1234!2sC.%20de%20Rodr%C3%ADguez%20Mar%C3%ADn%2C%2030%2C%20Chamart%C3%ADn%2C%2028002%20Madrid!5e0!3m2!1ses!2ses!4v1704800000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Address info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-magenta-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-theme-primary uppercase mb-1">Dirección</h3>
                    <p className="font-body text-theme-secondary">
                      Colegio Union-Chrétienne de Saint Chaumond<br />
                      C. de Rodríguez Marín, 30-32<br />
                      Chamartín, 28002 Madrid
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-theme-primary uppercase mb-1">Contacto</h3>
                    <p className="font-body text-theme-secondary">
                      <a href="mailto:admin@pickletrack.es" className="hover:text-accent-gold transition-colors">
                        admin@pickletrack.es
                      </a>
                      <br />
                      <a href="tel:+34647432206" className="hover:text-accent-gold transition-colors">
                        +34 647 432 206
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-lime-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-theme-primary uppercase mb-1">Apertura</h3>
                    <p className="font-body text-theme-secondary">
                      Instalaciones listas: Marzo 2026<br />
                      Inicio escuela: Septiembre 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Inscripción */}
        <section id="inscripcion" className="relative py-20 lg:py-24 bg-pickletrack-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pickletrack-lime/10 via-pickletrack-cyan/5 to-pickletrack-magenta/10" />
            <div className="absolute inset-0 bg-grid opacity-30" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="section-heading text-theme-primary mb-6">
              ¿Listo para <span className="gradient-text">Jugar</span>?
            </h2>
            <p className="font-body text-xl text-theme-secondary mb-10 max-w-2xl mx-auto">
              Las inscripciones para el curso 2026-2027 se abrirán en agosto.
              Déjanos tu email y te avisamos cuando estén disponibles.
            </p>

            {/* Email form */}
            <form className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-5 py-4 bg-theme-card border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-pickletrack-lime text-pickletrack-black font-display uppercase tracking-wider hover:glow-lime transition-all duration-300 rounded-lg"
                >
                  Avisarme
                </button>
              </div>
              <p className="font-body text-theme-subtle text-sm mt-4">
                Te notificaremos cuando abran las inscripciones. Sin spam.
              </p>
            </form>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-theme-subtle">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/brand/pickletrack.png"
                    alt="PickleTrack"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-body text-theme-muted text-sm">Gestionado por PickleTrack</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display text-accent-gold">Badgie</span>
                <span className="font-body text-theme-muted text-sm">Sistema de inscripciones</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display text-theme-primary">Wilson</span>
                <span className="font-body text-theme-muted text-sm">Equipamiento oficial</span>
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
                © 2026 PickleTrack. Escuela Saint Chaumond.
              </p>

              <Link
                href="/"
                className="font-body text-sm text-theme-muted hover:text-accent-lime transition-colors"
              >
                ← Volver a PickleTrack
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
