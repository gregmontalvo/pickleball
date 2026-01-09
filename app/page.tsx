import { Header } from '@/components/layout/Header'
import { PickleballCourt } from '@/components/landing/PickleballCourt'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-pickletrack-black">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-radial from-pickletrack-lime/5 via-transparent to-transparent" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pickletrack-lime/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pickletrack-magenta/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pickletrack-cyan/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] animate-fade-in">
                  Diseno - Construccion - Gestion
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
                Invertimos en la instalacion de pistas de ultima generacion en tu centro.
                Tu solo gestionas y disfrutas del retorno.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
                <a
                  href="#contacto"
                  className="btn-primary"
                >
                  Quiero Saber Mas
                </a>
                <a
                  href="#servicios"
                  className="btn-secondary"
                >
                  Como Funciona
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 animate-slide-up stagger-4">
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-lime">+30</p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">Anos experiencia</p>
                </div>
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-cyan">+40</p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">Profesionales</p>
                </div>
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-magenta">0</p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">Inversion tuya</p>
                </div>
              </div>
            </div>

            {/* Court visualization */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-64 sm:w-80 lg:w-96 animate-scale-in">
                <PickleballCourt variant="gradient" animated />

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-pickletrack-gold text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float">
                  Sin Coste
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-pickletrack-lime text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float" style={{ animationDelay: '0.5s' }}>
                  Llaves en Mano
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
      <section id="servicios" className="relative py-32 bg-pickletrack-dark">
        <div className="absolute inset-0 bg-grid-dense opacity-30" />

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
                title: 'Diseno',
                description: 'Nuestro equipo ofrece las opciones mas novedosas: instalaciones permanentes o temporales, resinas, cubiertas, iluminacion LED.',
                color: 'cyan',
              },
              {
                step: '03',
                title: 'Inversion',
                description: 'PickleTrack corre con TODOS los gastos de instalacion y obra. Desde el diseno hasta la cubierta e iluminacion.',
                color: 'magenta',
              },
              {
                step: '04',
                title: 'Gestion',
                description: 'Desde el dia uno, nos encargamos de escuelas, alquileres, torneos y equipos. Con herramientas digitales de vanguardia.',
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
      <section id="disenos" className="relative py-32 bg-pickletrack-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pickletrack-lime/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pickletrack-magenta/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] mb-4">
                Playincolors
              </p>
              <h2 className="section-heading text-pickletrack-white">
                Disenos <span className="gradient-text">Unicos</span>
              </h2>
            </div>
            <p className="font-body text-lg text-white/50 max-w-md mt-6 lg:mt-0">
              Victor Garcia, creador de PLAYINCOLORS, disena instalaciones que transforman
              cualquier espacio en una obra de arte deportiva.
            </p>
          </div>

          {/* Court gallery - 3 animated courts */}
          <div className="grid md:grid-cols-3 gap-8">
            {['lime', 'magenta', 'cyan'].map((color, index) => (
              <div
                key={color}
                className="group relative aspect-[2/3] bg-pickletrack-dark/50 rounded-lg overflow-hidden court-border p-6 hover:scale-105 transition-transform duration-500"
              >
                <PickleballCourt
                  variant={color as 'lime' | 'magenta' | 'cyan'}
                  animated
                  className="w-full h-full"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className={`font-display text-xl uppercase tracking-wider text-pickletrack-${color}`}>
                    Diseno {['Neon', 'Vibrante', 'Electrico'][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              'Resinas de alta calidad',
              'Iluminacion LED integrada',
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
                +30 Anos de Experiencia
              </p>
              <h2 className="section-heading text-pickletrack-white mb-8">
                Escuelas de <span className="gradient-text-gold">Elite</span>
              </h2>
              <div className="space-y-6 text-white/60 font-body text-lg leading-relaxed">
                <p>
                  Con mas de 30 anos gestionando las escuelas de Tenis y Padel en el
                  <strong className="text-pickletrack-gold"> Club de Campo Villa de Madrid</strong>,
                  nuestro equipo de mas de 40 profesionales esta preparado para
                  brindar programas de entrenamiento de alta calidad.
                </p>
                <p>
                  Las pistas de pickleball son ideales tambien para la
                  <strong className="text-pickletrack-lime"> iniciacion al tenis con bola roja </strong>
                  para ninos de 4 a 7 anos.
                </p>
              </div>

              {/* Badges system preview */}
              <div className="mt-10 p-6 bg-pickletrack-black/50 border border-white/10 rounded-lg">
                <p className="font-display text-xl uppercase tracking-wider text-white mb-4">
                  Sistema de Insignias Badgie
                </p>
                <div className="flex gap-4">
                  {['Golpes Basicos', 'Smash King', 'Ace Master'].map((badge, i) => (
                    <div
                      key={badge}
                      className="flex-1 p-3 bg-gradient-to-br from-pickletrack-gold/20 to-pickletrack-orange/10 border border-pickletrack-gold/30 rounded text-center"
                    >
                      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-pickletrack-gold/20 flex items-center justify-center">
                        <span className="text-pickletrack-gold text-xl">★</span>
                      </div>
                      <p className="font-body text-xs text-white/70">{badge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Placeholder for school image/illustration */}
              <div className="aspect-square bg-gradient-to-br from-pickletrack-dark to-pickletrack-black border border-white/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src="/brand/icon.png"
                      alt="PickleTrack"
                      fill
                      className="object-contain opacity-50"
                    />
                  </div>
                  <p className="font-display text-2xl uppercase tracking-wider text-white/30">
                    Formando Campeones
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
              { name: 'Badgie', desc: 'Gestion digital' },
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
                Si representas a un colegio, club, hotel o asociacion y quieres
                instalar pistas de pickleball sin inversion, hablemos.
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
                    <p className="font-body text-sm text-white/40 uppercase tracking-wider">Telefono</p>
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
                      Nombre Institucion
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
                      <option value="asociacion">Asociacion</option>
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
                    Telefono
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
                    placeholder="Cuentanos sobre tu espacio y que necesitas..."
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
              © 2025 PickleTrack. Diseno - Construccion - Gestion
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
