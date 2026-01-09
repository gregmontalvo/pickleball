import { Header } from '@/components/layout/Header'
import { PickleballCourt } from '@/components/landing/PickleballCourt'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pickletrack-black via-pickletrack-dark to-pickletrack-black">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-pickletrack-lime/8 via-transparent to-transparent" />

        {/* Decorative background courts - subtle */}
        <div className="absolute top-20 left-10 w-32 h-56 opacity-[0.03] rotate-12">
          <Image src="/courts/court-cyan.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-56 opacity-[0.03] -rotate-12">
          <Image src="/courts/court-magenta.png" alt="" fill className="object-contain" />
        </div>

        {/* Animated gradient orbs - slightly more visible for warmth */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pickletrack-lime/25 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pickletrack-magenta/25 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pickletrack-cyan/15 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] animate-fade-in">
                  Diseño - Construcción - Gestión
                </p>
                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] uppercase animate-slide-up">
                  <span className="text-pickletrack-white">Pistas de</span>
                  <br />
                  <span className="gradient-text">Pickleball</span>
                  <br />
                  <span className="text-pickletrack-white/80">Para tu</span>
                  <br />
                  <span className="text-pickletrack-gold">Colegio</span>
                </h1>
              </div>

              <p className="font-body text-lg sm:text-xl text-white/60 max-w-lg animate-slide-up stagger-2">
                Diseñamos y construimos tus pistas de Pickleball y nos encargamos
                de la gestión y escuelas; tú solo disfrutas del retorno.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
                <a
                  href="#contacto"
                  className="btn-primary"
                >
                  Quiero Saber Más
                </a>
                <a
                  href="#servicios"
                  className="btn-secondary"
                >
                  Cómo Funciona
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 animate-slide-up stagger-4">
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-lime">+30</p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">Años experiencia</p>
                </div>
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-cyan">+40</p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">Profesionales</p>
                </div>
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-magenta">0</p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">Inversión tuya</p>
                </div>
              </div>
            </div>

            {/* Court visualization - 3 courts side by side */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative animate-scale-in">
                {/* Three courts in a row */}
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-20 sm:w-24 lg:w-28 transition-transform hover:scale-105">
                    <Image
                      src="/courts/court-cyan.png"
                      alt="Pista Pickleball Cyan"
                      width={112}
                      height={200}
                      className="w-full h-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                    />
                  </div>
                  <div className="w-20 sm:w-24 lg:w-28 transition-transform hover:scale-105">
                    <Image
                      src="/courts/court-lime.png"
                      alt="Pista Pickleball Lima"
                      width={112}
                      height={200}
                      className="w-full h-auto drop-shadow-[0_0_15px_rgba(204,255,0,0.4)]"
                    />
                  </div>
                  <div className="w-20 sm:w-24 lg:w-28 transition-transform hover:scale-105">
                    <Image
                      src="/courts/court-magenta.png"
                      alt="Pista Pickleball Magenta"
                      width={112}
                      height={200}
                      className="w-full h-auto drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]"
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-pickletrack-gold text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float">
                  Sin Coste
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-pickletrack-lime text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float" style={{ animationDelay: '0.5s' }}>
                  Llave en Mano
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-body text-xs uppercase tracking-widest text-white/40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-pickletrack-lime to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative py-32 bg-gradient-to-b from-pickletrack-dark via-pickletrack-dark to-pickletrack-black/90">
        <div className="absolute inset-0 bg-grid-dense opacity-20" />
        {/* Subtle decorative element */}
        <div className="absolute top-1/2 right-0 w-48 h-80 opacity-[0.02] translate-x-1/2">
          <Image src="/courts/court-lime.png" alt="" fill className="object-contain" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] mb-4">
              Proceso
            </p>
            <h2 className="section-heading text-pickletrack-white">
              Que <span className="gradient-text">Hacemos</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Espacio',
                description: 'El patio del cole, una pista antigua, una zona multideporte, una azotea... Las pistas de pickleball caben en casi cualquier sitio.',
                color: 'lime',
              },
              {
                step: '02',
                title: 'Diseño',
                description: 'Nuestro equipo ofrece las opciones más novedosas: instalaciones permanentes o temporales, resinas, cubiertas, iluminación LED.',
                color: 'cyan',
              },
              {
                step: '03',
                title: 'Inversión',
                description: 'PickleTrack corre con TODOS los gastos de instalación y obra. Desde el diseño hasta la cubierta e iluminación.',
                color: 'magenta',
              },
              {
                step: '04',
                title: 'Gestión',
                description: 'Desde el día uno, nos encargamos de escuelas, alquileres, torneos y equipos. Con herramientas digitales de vanguardia.',
                color: 'gold',
              },
            ].map((service, index) => (
              <div
                key={service.step}
                className="group relative card-neon"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className={`font-display text-7xl text-pickletrack-${service.color}/20 absolute -top-2 -left-2 group-hover:text-pickletrack-${service.color}/40 transition-colors`}>
                  {service.step}
                </div>

                <div className="relative pt-12">
                  <h3 className={`font-display text-3xl uppercase tracking-wide text-pickletrack-${service.color} mb-4`}>
                    {service.title}
                  </h3>
                  <p className="font-body text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-pickletrack-${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Court Designs Gallery */}
      <section id="disenos" className="relative py-32 bg-gradient-to-b from-pickletrack-black via-[#0a0a0a] to-pickletrack-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pickletrack-lime/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pickletrack-magenta/8 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] mb-4">
                Personalización
              </p>
              <h2 className="section-heading text-pickletrack-white">
                Diseños <span className="gradient-text">Únicos</span>
              </h2>
            </div>
            <p className="font-body text-lg text-white/50 max-w-md mt-6 lg:mt-0">
              Diseñamos y construimos pistas únicas que transforman los espacios
              y logran transmitir la esencia del deporte.
            </p>
          </div>

          {/* Court gallery - 3 design options */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: '/courts/court-lime.png', name: 'Neón', color: 'lime', glow: 'rgba(204,255,0,0.4)' },
              { image: '/courts/court-magenta.png', name: 'Vibrante', color: 'magenta', glow: 'rgba(255,0,255,0.4)' },
              { image: '/courts/court-tropical.png', name: 'Tropical', color: 'cyan', glow: 'rgba(0,255,255,0.4)' },
            ].map((court) => (
              <div
                key={court.name}
                className="group relative aspect-[2/3] bg-pickletrack-dark/30 rounded-lg overflow-hidden p-6 hover:scale-105 transition-transform duration-500"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src={court.image}
                    alt={`Diseño ${court.name}`}
                    width={200}
                    height={350}
                    className="w-auto h-full max-h-[90%] object-contain transition-all duration-500 group-hover:scale-105"
                    style={{ filter: `drop-shadow(0 0 20px ${court.glow})` }}
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className={`font-display text-xl uppercase tracking-wider text-pickletrack-${court.color}`}>
                    Diseño {court.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              'Resinas de alta calidad',
              'Iluminación LED integrada',
              'Colores personalizables',
              'Mantenimiento incluido',
            ].map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-white/70"
              >
                <div className="w-2 h-2 bg-pickletrack-lime rounded-full" />
                <span className="font-body">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School/Escuela Section */}
      <section id="escuela" className="relative py-32 bg-pickletrack-dark">
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-pickletrack-gold text-sm uppercase tracking-[0.3em] mb-4">
                +30 Años de Experiencia
              </p>
              <h2 className="section-heading text-pickletrack-white mb-8">
                Escuelas de <span className="gradient-text-gold">Elite</span>
              </h2>
              <div className="space-y-6 text-white/60 font-body text-lg leading-relaxed">
                <p>
                  Con más de 30 años gestionando las escuelas de Tenis y Pádel en el
                  <strong className="text-pickletrack-gold"> Club de Campo Villa de Madrid</strong>,
                  nuestro equipo de más de 40 profesionales está preparado para
                  brindar programas de entrenamiento de alta calidad.
                </p>
                <p>
                  Las pistas de pickleball son ideales también para la
                  <strong className="text-pickletrack-lime"> iniciación al tenis con bola roja </strong>
                  para niños de 4 a 7 años.
                </p>
              </div>

              {/* Badges system preview */}
              <div className="mt-10 p-6 bg-pickletrack-black/50 border border-white/10 rounded-lg">
                <p className="font-display text-xl uppercase tracking-wider text-white mb-4">
                  Sistema de Insignias Badgie
                </p>
                <div className="flex gap-4">
                  {[
                    { name: 'Golpes Básicos', icon: '/brand/badges/badge-ball.png', color: 'lime' },
                    { name: 'Jugador Social', icon: '/brand/badges/badge-chat.png', color: 'cyan' },
                    { name: 'Pro Player', icon: '/brand/badges/badge-court.png', color: 'magenta' },
                  ].map((badge) => (
                    <div
                      key={badge.name}
                      className={`flex-1 p-3 bg-gradient-to-br from-pickletrack-${badge.color}/20 to-transparent border border-pickletrack-${badge.color}/30 rounded text-center`}
                    >
                      <div className="w-12 h-12 mx-auto mb-2 relative">
                        <Image
                          src={badge.icon}
                          alt={badge.name}
                          fill
                          className="object-contain invert"
                        />
                      </div>
                      <p className="font-body text-xs text-white/70">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Group photo with Wilson/Tennis Point */}
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

              {/* Floating stat cards */}
              <div className="absolute -top-6 -right-6 px-6 py-4 bg-pickletrack-lime text-pickletrack-black">
                <p className="font-display text-3xl">+40</p>
                <p className="font-body text-xs uppercase tracking-wider">Profesionales</p>
              </div>
              <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-pickletrack-gold text-pickletrack-black">
                <p className="font-display text-3xl">1994</p>
                <p className="font-body text-xs uppercase tracking-wider">Desde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative py-32 bg-pickletrack-black">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] mb-4">
              Colaboradores
            </p>
            <h2 className="section-heading text-pickletrack-white">
              Nuestros <span className="gradient-text">Partners</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { name: 'Wilson', desc: 'Equipamiento oficial' },
              { name: 'Tennis Point', desc: 'Retail deportivo' },
              { name: 'Badgie', desc: 'Gestión digital' },
              { name: 'RPPk', desc: 'Registro Profesional' },
            ].map((partner, index) => (
              <div
                key={partner.name}
                className="group p-8 bg-pickletrack-dark/30 border border-white/5 hover:border-pickletrack-lime/30 transition-all duration-500 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-pickletrack-lime/10 transition-colors">
                  <span className="font-display text-2xl text-white/50 group-hover:text-pickletrack-lime transition-colors">
                    {partner.name[0]}
                  </span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white mb-1">
                  {partner.name}
                </h3>
                <p className="font-body text-sm text-white/40">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-32 bg-pickletrack-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pickletrack-lime/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] mb-4">
                Contacto
              </p>
              <h2 className="section-heading text-pickletrack-white mb-8">
                Quieres <span className="gradient-text">Pistas</span>?
              </h2>
              <p className="font-body text-xl text-white/60 mb-8 max-w-lg">
                Si representas a un colegio, club, hotel o asociación y quieres
                instalar pistas de pickleball sin inversión, hablemos.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pickletrack-lime/10 rounded flex items-center justify-center">
                    <span className="text-pickletrack-lime">@</span>
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/40 uppercase tracking-wider">Email</p>
                    <a href="mailto:admin@pickletrack.es" className="font-body text-lg text-white hover:text-pickletrack-lime transition-colors">
                      admin@pickletrack.es
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pickletrack-lime/10 rounded flex items-center justify-center">
                    <span className="text-pickletrack-lime">T</span>
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/40 uppercase tracking-wider">Teléfono</p>
                    <a href="tel:+34647432206" className="font-body text-lg text-white hover:text-pickletrack-lime transition-colors">
                      +34 647 432 206
                    </a>
                  </div>
                </div>
              </div>

              <p className="font-body text-white/40">
                <strong className="text-white">Gonzalo Junco</strong> - Director
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-pickletrack-black/50 border border-white/10 p-8 lg:p-10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                      Nombre Institución
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
                      placeholder="Colegio, Club, Hotel..."
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                      Tipo
                    </label>
                    <select className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors">
                      <option value="">Selecciona...</option>
                      <option value="colegio">Colegio</option>
                      <option value="club">Club Deportivo</option>
                      <option value="hotel">Hotel</option>
                      <option value="asociacion">Asociación</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                      Nombre Contacto
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu espacio y qué necesitas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-pickletrack-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/icon.png"
                alt="PickleTrack"
                width={32}
                height={32}
              />
              <span className="font-display text-xl tracking-wider text-white">
                PICKLETRACK
              </span>
            </div>

            <p className="font-body text-sm text-white/40">
              © 2025 PickleTrack. Diseño - Construcción - Gestión
            </p>

            <div className="flex items-center gap-2">
              <span className="font-body text-sm text-white/40">Powered by</span>
              <span className="font-display text-pickletrack-gold">Badgie</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
