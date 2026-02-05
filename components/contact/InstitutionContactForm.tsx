'use client';

import { useState, FormEvent } from 'react';

interface InstitutionFormData {
  institutionName: string;
  institutionType: string;
  city: string;
  contactName: string;
  email: string;
  phone: string;
  spaceType: string;
  message: string;
}

export function InstitutionContactForm() {
  const [formData, setFormData] = useState<InstitutionFormData>({
    institutionName: '',
    institutionType: '',
    city: '',
    contactName: '',
    email: '',
    phone: '',
    spaceType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'landing-colegios',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus({
        type: 'success',
        message: '¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.',
      });

      setFormData({
        institutionName: '',
        institutionType: '',
        city: '',
        contactName: '',
        email: '',
        phone: '',
        spaceType: '',
        message: '',
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

  const inputClasses =
    'w-full px-4 py-3 bg-theme-card border border-theme-medium text-theme-primary font-body rounded-lg focus:border-pickletrack-lime focus:outline-none transition-colors';
  const labelClasses =
    'block font-body text-sm text-theme-muted uppercase tracking-wider mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Institution Name & Type */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="institutionName" className={labelClasses}>
            Nombre de la Institución *
          </label>
          <input
            type="text"
            id="institutionName"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Colegio, Club, Hotel..."
          />
        </div>
        <div>
          <label htmlFor="institutionType" className={labelClasses}>
            Tipo de Institución *
          </label>
          <select
            id="institutionType"
            name="institutionType"
            value={formData.institutionType}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Seleccionar...</option>
            <option value="colegio">Colegio</option>
            <option value="club">Club Deportivo</option>
            <option value="hotel">Hotel / Resort</option>
            <option value="asociacion">Asociación</option>
            <option value="ayuntamiento">Ayuntamiento</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      {/* Row 2: City & Space Type */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className={labelClasses}>
            Ciudad *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Madrid, Barcelona..."
          />
        </div>
        <div>
          <label htmlFor="spaceType" className={labelClasses}>
            Espacio Disponible
          </label>
          <select
            id="spaceType"
            name="spaceType"
            value={formData.spaceType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Seleccionar...</option>
            <option value="patio">Patio / Pista exterior</option>
            <option value="pista-tenis">Pista de tenis existente</option>
            <option value="polideportivo">Polideportivo</option>
            <option value="azotea">Azotea / Terraza</option>
            <option value="no-seguro">No estoy seguro</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      {/* Row 3: Contact Name & Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contactName" className={labelClasses}>
            Persona de Contacto *
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="contacto@institucion.es"
          />
        </div>
      </div>

      {/* Row 4: Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="+34 600 000 000"
          />
        </div>
        <div className="hidden sm:block" /> {/* Spacer */}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={inputClasses}
          placeholder="Cuéntanos más sobre tu proyecto o cualquier pregunta que tengas..."
        />
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg border ${
            submitStatus.type === 'success'
              ? 'bg-pickletrack-lime/10 border-pickletrack-lime/30 text-pickletrack-lime'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}
        >
          <p className="font-body text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-pickletrack-lime text-pickletrack-black font-display text-lg uppercase tracking-wider hover:glow-lime transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Información'}
      </button>

      <p className="font-body text-theme-subtle text-sm text-center">
        Nos pondremos en contacto en menos de 48 horas.
      </p>
    </form>
  );
}
