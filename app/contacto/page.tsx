import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | PickleTrack - Pistas de Pickleball',
  description: 'Contacta con PickleTrack para instalar pistas de Pickleball en tu colegio, club u hotel. Sin inversión, gestión incluida. Llámanos al +34 647 432 206.',
  keywords: [
    'contacto pickletrack',
    'instalar pistas pickleball',
    'presupuesto pickleball',
    'pistas pickleball madrid',
  ],
  openGraph: {
    title: 'Contacto | PickleTrack',
    description: 'Contacta con nosotros para instalar pistas de Pickleball sin inversión.',
    url: 'https://pickletrack.es/contacto',
  },
  alternates: {
    canonical: 'https://pickletrack.es/contacto',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto - PickleTrack',
  description: 'Página de contacto de PickleTrack',
  url: 'https://pickletrack.es/contacto',
  mainEntity: {
    '@type': 'Organization',
    name: 'PickleTrack',
    telephone: '+34647432206',
    email: 'admin@pickletrack.es',
  },
}

export default function ContactoPage() {
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
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pickletrack-lime/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pickletrack-gold/15 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
            <p className="font-body text-accent-lime text-sm uppercase tracking-[0.3em] mb-4">
              Hablemos
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase mb-6">
              <span className="gradient-text">Contacto</span>
            </h1>
            <p className="font-body text-xl text-theme-secondary max-w-2xl mx-auto">
              ¿Quieres instalar pistas de Pickleball en tu institución?
              Cuéntanos tu proyecto y te asesoramos sin compromiso.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative py-20 lg:py-24 bg-pickletrack-dark">
          <div className="absolute inset-0 bg-grid opacity-15" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl text-theme-primary uppercase mb-6">
                    Información de Contacto
                  </h2>
                  <p className="font-body text-theme-secondary text-lg leading-relaxed">
                    Somos especialistas en diseñar, construir y gestionar instalaciones
                    de Pickleball. Con más de 30 años de experiencia en escuelas deportivas,
                    estamos preparados para llevar este deporte a tu institución.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent-lime-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/brand/icons/icon-chat-white.png"
                        alt="Email"
                        width={28}
                        height={28}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-theme-primary uppercase mb-1">Email</h3>
                      <a
                        href="mailto:admin@pickletrack.es"
                        className="font-body text-lg text-theme-secondary hover:text-accent-lime transition-colors"
                      >
                        admin@pickletrack.es
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent-gold-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/brand/icons/icon-pin-white.png"
                        alt="Teléfono"
                        width={28}
                        height={28}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-theme-primary uppercase mb-1">Teléfono</h3>
                      <a
                        href="tel:+34647432206"
                        className="font-body text-lg text-theme-secondary hover:text-accent-gold transition-colors"
                      >
                        +34 647 432 206
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent-cyan-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-theme-primary uppercase mb-1">Director</h3>
                      <p className="font-body text-lg text-theme-secondary">
                        Gonzalo Junco
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="pt-8 border-t border-theme-subtle">
                  <h3 className="font-display text-xl text-theme-primary uppercase mb-4">
                    Enlaces Rápidos
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/colegios" className="btn-secondary text-sm py-2 px-4">
                      Info para Colegios
                    </Link>
                    <Link href="/#servicios" className="btn-secondary text-sm py-2 px-4">
                      Nuestros Servicios
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-theme-card border border-theme-subtle rounded-2xl p-8">
                <h2 className="font-display text-2xl text-theme-primary uppercase mb-6">
                  Envíanos un Mensaje
                </h2>
                <ContactForm />
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
