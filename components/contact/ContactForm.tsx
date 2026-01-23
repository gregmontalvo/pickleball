'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  institutionName: string;
  institutionType: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    institutionName: '',
    institutionType: '',
    contactName: '',
    email: '',
    phone: '',
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus({
        type: 'success',
        message: '¡Solicitud enviada correctamente! Nos pondremos en contacto contigo pronto.',
      });

      // Reset form
      setFormData({
        institutionName: '',
        institutionType: '',
        contactName: '',
        email: '',
        phone: '',
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

  return (
    <div className="bg-pickletrack-black/50 border border-white/10 p-8 lg:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="institutionName"
              className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2"
            >
              Nombre Institución
            </label>
            <input
              type="text"
              id="institutionName"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
              placeholder="Colegio, Club, Hotel..."
            />
          </div>
          <div>
            <label
              htmlFor="institutionType"
              className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2"
            >
              Tipo
            </label>
            <select
              id="institutionType"
              name="institutionType"
              value={formData.institutionType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
            >
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
            <label
              htmlFor="contactName"
              className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2"
            >
              Nombre Contacto
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2"
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
              className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
              placeholder="email@ejemplo.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors"
            placeholder="+34 600 000 000"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-body text-sm text-white/50 uppercase tracking-wider mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-pickletrack-dark border border-white/10 text-white font-body focus:border-pickletrack-lime focus:outline-none transition-colors resize-none"
            placeholder="Cuéntanos sobre tu espacio y qué necesitas..."
          />
        </div>

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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  );
}
