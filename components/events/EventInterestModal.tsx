'use client';

import { useState, FormEvent, useEffect } from 'react';

interface EventInterestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventName: string;
}

interface EventInterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
}

export function EventInterestModal({
  isOpen,
  onClose,
  eventName,
}: EventInterestModalProps) {
  const [formData, setFormData] = useState<EventInterestFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventName: eventName,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Update eventName when prop changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, eventName }));
  }, [eventName]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventName: eventName,
      });
      setSubmitStatus({ type: null, message: '' });
    }
  }, [isOpen, eventName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/event-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus({
        type: 'success',
        message: '¡Gracias por tu interés! Te contactaremos pronto con más información.',
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventName: eventName,
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Error al enviar el formulario. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-theme-card border border-theme-subtle rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-pickletrack-lime/20 via-pickletrack-cyan/20 to-pickletrack-magenta/20 border-b border-theme-subtle">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-theme-muted hover:text-theme-primary transition-colors"
            aria-label="Cerrar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="font-display text-2xl text-theme-primary uppercase tracking-wide pr-8">
            Me Interesa
          </h2>
          <p className="font-body text-sm text-theme-muted mt-1">
            {eventName}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-body text-sm text-theme-muted uppercase tracking-wider mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-theme-secondary border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block font-body text-sm text-theme-muted uppercase tracking-wider mb-2"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-theme-secondary border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
                  placeholder="Tus apellidos"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-body text-sm text-theme-muted uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-theme-secondary border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-body text-sm text-theme-muted uppercase tracking-wider mb-2"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-theme-secondary border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
                placeholder="+34 600 000 000"
              />
            </div>

            <div>
              <label
                htmlFor="eventName"
                className="block font-body text-sm text-theme-muted uppercase tracking-wider mb-2"
              >
                Evento
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                readOnly
                className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-medium text-theme-primary font-body rounded-lg cursor-not-allowed opacity-70"
              />
            </div>
          </div>

          {submitStatus.type && (
            <div
              className={`mt-4 p-4 rounded-lg border ${
                submitStatus.type === 'success'
                  ? 'bg-pickletrack-lime/10 border-pickletrack-lime/30 text-pickletrack-lime'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
            >
              <p className="font-body text-sm">{submitStatus.message}</p>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-theme-secondary border border-theme-medium text-theme-primary font-display uppercase tracking-wider hover:bg-theme-medium transition-colors rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-pickletrack-lime text-pickletrack-black font-display uppercase tracking-wider hover:glow-lime transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
