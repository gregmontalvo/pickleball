import { Header } from "@/components/layout/Header";
import { PickleballCourt } from "@/components/landing/PickleballCourt";
import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-pickletrack-black via-pickletrack-dark to-pickletrack-black hero-light-wrapper">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-pickletrack-lime/8 via-transparent to-transparent" />

        {/* Decorative background courts - subtle */}
        <div className="absolute top-20 left-10 w-32 h-56 opacity-[0.03] rotate-12">
          <Image
            src="/courts/court-cyan-removebg-preview.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-56 opacity-[0.03] -rotate-12">
          <Image
            src="/courts/court-magenta-removebg-preview.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Animated gradient orbs - slightly more visible for warmth */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pickletrack-lime/25 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pickletrack-magenta/25 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pickletrack-cyan/15 rounded-full blur-[150px]" />

        <div className="relative z-10 w-full max-w-full sm:max-w-[98%] md:max-w-[96%] lg:max-w-[94%] xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 py-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
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
                Diseñamos y construimos tus pistas de Pickleball y nos
                encargamos de la gestión y escuelas; tú solo disfrutas del
                retorno.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
                <a href="#contacto" className="btn-primary">
                  Quiero Saber Más
                </a>
                <a href="#servicios" className="btn-secondary">
                  Cómo Funciona
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 animate-slide-up stagger-4">
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-lime">
                    +30
                  </p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">
                    Años experiencia
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-cyan">
                    +40
                  </p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">
                    Profesionales
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-pickletrack-magenta">
                    0
                  </p>
                  <p className="font-body text-sm text-white/50 uppercase tracking-wider">
                    Inversión tuya
                  </p>
                </div>
              </div>
            </div>

            {/* Court visualization - 3 courts in perspective stack */}
            <div className="relative hidden md:flex items-start justify-center -mt-42">
              <div className="relative animate-scale-in w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-[420px] md:h-[480px] lg:h-[520px] courts-container">
                {/* Background for light mode */}
                <div className="absolute -inset-8 bg-gradient-to-br from-pickletrack-black/90 via-pickletrack-dark/80 to-pickletrack-black/90 rounded-3xl opacity-0 light-mode-bg -z-10" />

                {/* Three courts in cascading stack with perspective */}

                {/* Court 1 - Back (Cyan) */}
                <div className="absolute top-0 left-0 transition-all duration-500 hover:translate-x-2 hover:-translate-y-2">
                  <Image
                    src="/courts/court-cyan-removebg-preview.png"
                    alt="Pista Pickleball Cyan"
                    width={200}
                    height={300}
                    className="w-[180px] md:w-[200px] lg:w-[240px] h-auto drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
                  />
                </div>

                {/* Court 2 - Middle (Lime) */}
                <div className="absolute top-12 md:top-16 lg:top-20 left-20 md:left-24 lg:left-28 transition-all duration-500 hover:translate-x-2 hover:-translate-y-2">
                  <Image
                    src="/courts/court-lime-removebg-preview.png"
                    alt="Pista Pickleball Lima"
                    width={200}
                    height={300}
                    className="w-[180px] md:w-[200px] lg:w-[240px] h-auto drop-shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                  />
                </div>

                {/* Court 3 - Front (Magenta) */}
                <div className="absolute top-24 md:top-32 lg:top-40 left-40 md:left-48 lg:left-56 transition-all duration-500 hover:translate-x-2 hover:-translate-y-2">
                  <Image
                    src="/courts/court-magenta-removebg-preview.png"
                    alt="Pista Pickleball Magenta"
                    width={200}
                    height={300}
                    className="w-[180px] md:w-[200px] lg:w-[240px] h-auto drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 right-4 px-5 py-2.5 bg-pickletrack-gold text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float shadow-2xl z-20 rounded">
                  Sin Coste
                </div>
                <div
                  className="absolute bottom-24 left-0 px-5 py-2.5 bg-pickletrack-lime text-pickletrack-black font-display text-sm uppercase tracking-wider animate-float shadow-2xl z-20 rounded"
                  style={{ animationDelay: "0.5s" }}
                >
                  Llave en Mano
                </div>
              </div>
            </div>

            {/* Mobile courts - simpler layout */}
            <div className="relative flex lg:hidden items-center justify-center mt-8">
              <div className="relative w-[200px] h-[320px]">
                <Image
                  src="/courts/court-lime-removebg-preview.png"
                  alt="Pista Pickleball"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                />
                <div className="absolute -top-2 -right-4 px-4 py-2 bg-pickletrack-gold text-pickletrack-black font-display text-xs uppercase tracking-wider animate-float shadow-xl z-10 rounded">
                  Sin Coste
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-body text-xs uppercase tracking-widest text-white/40">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-pickletrack-lime to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark via-pickletrack-dark to-pickletrack-black/90"
      >
        <div className="absolute inset-0 bg-grid-dense opacity-20" />
        {/* Subtle decorative element */}
        <div className="absolute top-1/2 right-0 w-48 h-80 opacity-[0.02] translate-x-1/2">
          <Image
            src="/courts/court-lime-removebg-preview.png"
            alt=""
            fill
            className="object-contain"
          />
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
                step: "01",
                title: "Espacio",
                description:
                  "El patio del cole, una pista antigua, una zona multideporte, una azotea... Las pistas de pickleball caben en casi cualquier sitio.",
                color: "lime",
              },
              {
                step: "02",
                title: "Diseño",
                description:
                  "Nuestro equipo ofrece las opciones más novedosas: instalaciones permanentes o temporales, resinas, cubiertas, iluminación LED.",
                color: "cyan",
              },
              {
                step: "03",
                title: "Inversión",
                description:
                  "PickleTrack corre con TODOS los gastos de instalación y obra. Desde el diseño hasta la cubierta e iluminación.",
                color: "magenta",
              },
              {
                step: "04",
                title: "Gestión",
                description:
                  "Desde el día uno, nos encargamos de escuelas, alquileres, torneos y equipos. Con herramientas digitales de vanguardia.",
                color: "gold",
              },
            ].map((service, index) => (
              <div
                key={service.step}
                className="group relative card-neon"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div
                  className={`font-display text-7xl text-pickletrack-${service.color}/20 absolute -top-2 -left-2 group-hover:text-pickletrack-${service.color}/40 transition-colors`}
                >
                  {service.step}
                </div>

                <div className="relative pt-12">
                  <h3
                    className={`font-display text-3xl uppercase tracking-wide text-pickletrack-${service.color} mb-4`}
                  >
                    {service.title}
                  </h3>
                  <p className="font-body text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-pickletrack-${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Court Designs Gallery */}
      <section
        id="disenos"
        className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-black via-[#0a0a0a] to-pickletrack-dark overflow-hidden"
      >
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
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                image: "/courts/court-lime-removebg-preview.png",
                name: "Neón",
                color: "lime",
                glow: "rgba(204,255,0,0.4)",
              },
              {
                image: "/courts/court-magenta-removebg-preview.png",
                name: "Vibrante",
                color: "magenta",
                glow: "rgba(255,0,255,0.4)",
              },
              {
                image: "/courts/court-tropical-removebg-preview.png",
                name: "Tropical",
                color: "cyan",
                glow: "rgba(0,255,255,0.4)",
              },
            ].map((court) => (
              <div
                key={court.name}
                className="group relative aspect-[2/3] court-card-bg rounded-xl overflow-hidden p-6 hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image
                    src={court.image}
                    alt={`Diseño ${court.name}`}
                    width={200}
                    height={350}
                    className="w-auto h-full max-h-[85%] object-contain transition-all duration-500 group-hover:scale-105"
                    style={{ filter: `drop-shadow(0 0 25px ${court.glow})` }}
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p
                    className={`font-display text-xl uppercase tracking-wider text-pickletrack-${court.color}`}
                  >
                    Diseño {court.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                text: "Resinas de alta calidad",
                icon: "/brand/icons/icon-toggle-left-white.png",
              },
              {
                text: "Iluminación LED integrada",
                icon: "/brand/icons/icon-square-white.png",
              },
              {
                text: "Colores personalizables",
                icon: "/brand/icons/icon-court-horizontal-white.png",
              },
              {
                text: "Mantenimiento incluido",
                icon: "/brand/icons/icon-toggle-right-white.png",
              },
            ].map((feature, index) => (
              <div
                key={feature.text}
                className="flex items-center gap-4 text-white/70"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="opacity-70"
                  />
                </div>
                <span className="font-body">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School/Escuela Section */}
      <section
        id="escuela"
        className="relative py-20 lg:py-24 bg-pickletrack-dark"
      >
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div>
                <p className="font-body text-pickletrack-gold text-sm uppercase tracking-[0.3em] mb-4">
                  +30 Años de Experiencia
                </p>
                <h2 className="section-heading text-pickletrack-white mb-8">
                  Escuelas de <span className="gradient-text-gold">Elite</span>
                </h2>
                <div className="space-y-6 text-white/60 font-body text-lg leading-relaxed">
                  <p>
                    Con más de 30 años gestionando las escuelas de Tenis y Pádel
                    en el
                    <strong className="text-pickletrack-gold">
                      {" "}
                      Club de Campo Villa de Madrid
                    </strong>
                    , nuestro equipo de más de 40 profesionales está preparado
                    para brindar programas de entrenamiento de alta calidad.
                  </p>
                  <p>
                    Las pistas de pickleball son ideales también para la
                    <strong className="text-pickletrack-lime">
                      {" "}
                      iniciación al tenis con bola roja{" "}
                    </strong>
                    para niños de 4 a 7 años.
                  </p>
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
                <p className="font-body text-xs uppercase tracking-wider">
                  Profesionales
                </p>
              </div>
              <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-pickletrack-gold text-pickletrack-black">
                <p className="font-display text-3xl">1994</p>
                <p className="font-body text-xs uppercase tracking-wider">
                  Desde
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badgie System Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-black to-pickletrack-dark">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="p-8 bg-pickletrack-black/50 border border-white/10 rounded-xl">
            <a
              href="https://www.badgie.es/pickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 group"
            >
              <p className="font-display text-xl uppercase tracking-wider text-white group-hover:text-accent-lime transition-colors">
                Sistema de Insignias Badgie
                <svg
                  className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </p>
            </a>
            <div className="flex gap-4 mb-6">
              {[
                {
                  name: "Golpes Básicos",
                  image: "/brand/badges/badge-golpes-basicos.png",
                  color: "lime",
                },
                {
                  name: "Jugador Social",
                  image: "/brand/badges/badge-jugador-social.png",
                  color: "cyan",
                },
                {
                  name: "Pro Player",
                  image: "/brand/badges/badge-pro-player.png",
                  color: "magenta",
                },
              ].map((badge) => (
                <div
                  key={badge.name}
                  className={`badge-card relative flex-1 p-1 bg-gradient-to-br from-pickletrack-${badge.color}/40 to-pickletrack-${badge.color}/20 border-2 border-pickletrack-${badge.color}/60 rounded-lg overflow-hidden`}
                >
                  {/* Background badge image */}
                  <div className="absolute inset-0 z-0 badge-bg-image">
                    <Image
                      src={badge.image}
                      alt={badge.name}
                      fill
                      className="object-contain"
                      style={{ padding: "2px" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Badgie Features Description */}
            <div className="space-y-4 text-theme-secondary">
              <p className="font-body text-base leading-relaxed">
                <strong className="text-accent-lime">Badgie</strong> es la
                plataforma digital que revoluciona la gestión de escuelas
                deportivas. Tus estudiantes pueden{" "}
                <strong className="text-theme-primary">
                  coleccionar insignias digitales
                </strong>{" "}
                por cada nueva habilidad adquirida, creando un sistema de
                gamificación que fideliza y motiva como nunca antes.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-theme-card/50 border border-theme-subtle rounded-lg">
                  <h4 className="font-display text-lg font-semibold text-accent-cyan uppercase tracking-wide mb-3">
                    📱 Apps Móviles
                  </h4>
                  <p className="font-body text-sm text-theme-muted leading-relaxed">
                    Disponible en{" "}
                    <strong className="text-theme-primary">App Store</strong> y{" "}
                    <strong className="text-theme-primary">Google Play</strong>.
                    Los estudiantes pueden ver sus insignias, progreso y
                    comunicarse con profesores desde cualquier lugar.
                  </p>
                </div>

                <div className="p-5 bg-theme-card/50 border border-theme-subtle rounded-lg">
                  <h4 className="font-display text-lg font-semibold text-accent-magenta uppercase tracking-wide mb-3">
                    💬 Comunicación WhatsApp
                  </h4>
                  <p className="font-body text-sm text-theme-muted leading-relaxed">
                    Comunícate con alumnos, padres y profesores directamente a
                    través de{" "}
                    <strong className="text-theme-primary">WhatsApp</strong>,
                    automatizando notificaciones y manteniendo a todos
                    informados.
                  </p>
                </div>

                <div className="p-5 bg-theme-card/50 border border-theme-subtle rounded-lg">
                  <h4 className="font-display text-lg font-semibold text-accent-gold uppercase tracking-wide mb-3">
                    📊 Informes Personalizados
                  </h4>
                  <p className="font-body text-sm text-theme-muted leading-relaxed">
                    Genera{" "}
                    <strong className="text-theme-primary">
                      informes deportivos detallados
                    </strong>{" "}
                    personalizados para cada estudiante. Evalúa progreso,
                    habilidades y entrega informes profesionales fácilmente.
                  </p>
                </div>

                <div className="p-5 bg-theme-card/50 border border-theme-subtle rounded-lg">
                  <h4 className="font-display text-lg font-semibold text-accent-lime uppercase tracking-wide mb-3">
                    ⚡ Evaluación Bidireccional
                  </h4>
                  <p className="font-body text-sm text-theme-muted leading-relaxed">
                    Sistema de evaluación completo:{" "}
                    <strong className="text-theme-primary">
                      profesores evalúan alumnos
                    </strong>
                    ,
                    <strong className="text-theme-primary">
                      {" "}
                      alumnos evalúan profesores
                    </strong>{" "}
                    y{" "}
                    <strong className="text-theme-primary">
                      familias evalúan la escuela
                    </strong>
                    . Mejora continua garantizada.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent-lime-subtle border border-pickletrack-lime/30 rounded-lg">
                <p className="font-body text-sm leading-relaxed">
                  <strong className="text-accent-lime">
                    La viralidad de las insignias
                  </strong>{" "}
                  atrae nuevos alumnos a tu escuela, fideliza a los existentes y
                  descubre nuevas formas de monetización para tu club o escuela.
                  Badgie no solo organiza tu escuela,{" "}
                  <strong className="text-theme-primary">la hace crecer</strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primera Escuela - Saint Chaumond */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-pickletrack-dark to-pickletrack-black overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#1a5fb4]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pickletrack-gold/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pickletrack-gold/10 border border-pickletrack-gold/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-pickletrack-gold rounded-full animate-pulse" />
                <span className="font-body text-sm text-pickletrack-gold uppercase tracking-wider">
                  Septiembre 2026
                </span>
              </div>

              <p className="font-body text-pickletrack-lime text-sm uppercase tracking-[0.3em] mb-4">
                Primera Escuela PickleTrack
              </p>
              <h2 className="section-heading text-pickletrack-white mb-6">
                Colegio{" "}
                <span className="text-pickletrack-gold">Saint Chaumond</span>
              </h2>
              <p className="font-body text-lg text-white/60 mb-8 max-w-lg">
                Nuestra primera escuela de Pickleball y MiniTenis en Madrid. 3
                pistas profesionales, programas para todas las edades y eventos
                promocionales durante la primavera.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-display text-3xl text-pickletrack-lime">
                    3
                  </p>
                  <p className="font-body text-xs text-white/50 uppercase">
                    Pistas
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-display text-3xl text-pickletrack-cyan">
                    2
                  </p>
                  <p className="font-body text-xs text-white/50 uppercase">
                    Programas
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-display text-3xl text-pickletrack-magenta">
                    4+
                  </p>
                  <p className="font-body text-xs text-white/50 uppercase">
                    Eventos
                  </p>
                </div>
              </div>

              <a
                href="/escuela/saint-chaumond"
                className="inline-flex items-center gap-3 btn-primary"
              >
                <span>Ver Escuela</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Card visual */}
            <div className="relative hidden lg:block">
              <div className="school-info-card relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                {/* PickleTrack + School */}
                <div className="flex items-center justify-between mb-8">
                  <div className="relative w-32 h-10">
                    <Image
                      src="/brand/pickletrack.png"
                      alt="PickleTrack"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="px-3 py-1 bg-pickletrack-gold text-pickletrack-black font-display text-xs uppercase tracking-wider rounded">
                    2026
                  </div>
                </div>

                <div className="text-center py-8 border-y border-white/10 school-info-divider">
                  <p className="font-body text-white/40 text-xs uppercase tracking-[0.2em] mb-2 school-info-subtitle">
                    Union-Chrétienne de
                  </p>
                  <h3 className="font-display text-4xl text-white uppercase school-info-title">
                    Saint Chaumond
                  </h3>
                  <p className="font-body text-white/50 text-sm mt-2 school-info-address">
                    C. de Rodríguez Marín, 30-32, Madrid
                  </p>
                </div>

                {/* Programs */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-pickletrack-lime/10 border border-pickletrack-lime/30 rounded-lg text-center school-program-card school-program-card-pickleball">
                    <div className="relative w-8 h-8 mx-auto mb-2">
                      <Image
                        src="/brand/icons/pickleball.png"
                        alt="Pickleball"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-display text-sm text-pickletrack-lime uppercase">
                      Pickleball
                    </p>
                  </div>
                  <div className="p-4 bg-pickletrack-magenta/10 border border-pickletrack-magenta/30 rounded-lg text-center school-program-card school-program-card-tennis">
                    <div className="relative w-8 h-8 mx-auto mb-2">
                      <Image
                        src="/brand/icons/tennis.png"
                        alt="MiniTenis"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-display text-sm text-pickletrack-magenta uppercase">
                      MiniTenis
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-pickletrack-lime text-pickletrack-black font-display text-sm uppercase tracking-wider rounded shadow-lg animate-float">
                  Inscripciones Agosto
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="relative py-20 lg:py-24 bg-pickletrack-black"
      >
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
              {
                name: "Wilson",
                desc: "Equipamiento oficial",
                icon: "/brand/icons/icon-toggle-left-white.png",
              },
              {
                name: "Tennis Point",
                desc: "Retail deportivo",
                icon: "/brand/icons/icon-toggle-right-white.png",
              },
              {
                name: "Badgie",
                desc: "Gestión digital",
                icon: "/brand/icons/icon-square-white.png",
              },
              {
                name: "RPPk",
                desc: "Registro Profesional",
                icon: "/brand/icons/icon-court-vertical-white.png",
              },
            ].map((partner, index) => (
              <div
                key={partner.name}
                className="group p-8 bg-pickletrack-dark/30 border border-white/5 hover:border-pickletrack-lime/30 transition-all duration-500 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-pickletrack-lime/10 transition-colors">
                  <Image
                    src={partner.icon}
                    alt={partner.name}
                    width={72}
                    height={72}
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white mb-1">
                  {partner.name}
                </h3>
                <p className="font-body text-sm text-white/40">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="relative py-20 lg:py-24 bg-pickletrack-dark overflow-hidden"
      >
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

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-pickletrack-lime/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/brand/icons/icon-chat-white.png"
                      alt="Email"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/40 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:admin@pickletrack.es"
                      className="font-body text-lg text-white hover:text-pickletrack-lime transition-colors"
                    >
                      admin@pickletrack.es
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-pickletrack-lime/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/brand/icons/icon-pin-white.png"
                      alt="Teléfono"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/40 uppercase tracking-wider">
                      Teléfono
                    </p>
                    <a
                      href="tel:+34647432206"
                      className="font-body text-lg text-white hover:text-pickletrack-lime transition-colors"
                    >
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
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-pickletrack-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-36 h-28">
              <Image
                src="/brand/pickletrack.png"
                alt="PickleTrack"
                fill
                className="object-contain object-left invert-on-light"
              />
            </div>

            <p className="font-body text-sm text-white/40">
              © 2025 PickleTrack. Diseño - Construcción - Gestión
            </p>

            <a
              href="https://www.badgiestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="font-body text-sm text-white/40">
                Powered by
              </span>
              <span className="font-display text-pickletrack-gold">Badgie</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
