'use client';

import { useState } from 'react';
import { EventInterestModal } from './EventInterestModal';

interface Evento {
  fecha: string;
  titulo: string;
  descripcion: string;
  tipo: string;
}

interface EventosSectionProps {
  eventos: Evento[];
}

export function EventosSection({ eventos }: EventosSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInterestClick = (eventName: string) => {
    setSelectedEvent(eventName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Keep selectedEvent for a moment to allow modal to close smoothly
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <>
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
                <div className="relative p-8 bg-theme-card border border-theme-subtle rounded-xl hover:border-pickletrack-lime/30 transition-all duration-500 h-full flex flex-col">
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
                  <p className="font-body text-theme-secondary leading-relaxed mb-6 flex-grow">
                    {evento.descripcion}
                  </p>

                  {/* Me Interesa Button */}
                  <button
                    onClick={() => handleInterestClick(evento.titulo)}
                    className="w-full px-6 py-3 bg-pickletrack-lime text-pickletrack-black font-display uppercase tracking-wider hover:glow-lime transition-all duration-300 rounded-lg mt-auto"
                  >
                    Me Interesa
                  </button>

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

      {/* Modal */}
      {selectedEvent && (
        <EventInterestModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          eventName={selectedEvent}
        />
      )}
    </>
  );
}
