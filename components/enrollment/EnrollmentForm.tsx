'use client';

import { useState, FormEvent } from 'react';

interface EnrollmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function EnrollmentForm() {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/enrollment', {
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
        message: '¡Gracias por tu interés! Te notificaremos cuando abran las inscripciones.',
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      });
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

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
            className="w-full px-5 py-4 bg-theme-card border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
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
            className="w-full px-5 py-4 bg-theme-card border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
            placeholder="Tus apellidos"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
            className="w-full px-5 py-4 bg-theme-card border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
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
            className="w-full px-5 py-4 bg-theme-card border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors"
            placeholder="+34 600 000 000"
          />
        </div>
      </div>

      {submitStatus.type && (
        <div
          className={`mb-4 p-4 rounded-lg border ${
            submitStatus.type === 'success'
              ? 'bg-pickletrack-lime/10 border-pickletrack-lime/30 text-pickletrack-lime'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}
        >
          <p className="font-body text-sm">{submitStatus.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-pickletrack-lime text-pickletrack-black font-display uppercase tracking-wider hover:glow-lime transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Avisarme'}
      </button>
      <p className="font-body text-theme-subtle text-sm mt-4 text-center">
        Te notificaremos cuando abran las inscripciones. Sin spam.
      </p>
    </form>
  );
}
