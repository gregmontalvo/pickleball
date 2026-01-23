import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  institutionName: string;
  institutionType: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}

function createEmailTemplate(data: ContactFormData): string {
  const institutionTypeLabels: Record<string, string> = {
    colegio: 'Colegio',
    club: 'Club Deportivo',
    hotel: 'Hotel',
    asociacion: 'Asociación',
    otro: 'Otro',
  };

  const typeLabel = institutionTypeLabels[data.institutionType] || data.institutionType;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Lead - PickleTrack</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px; background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #ec4899 100%); text-align: center;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 2px;">
                🏓 Nuevo Lead
              </h1>
              <p style="margin: 10px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); text-transform: uppercase; letter-spacing: 1px;">
                PickleTrack
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Institution Info -->
              <div style="margin-bottom: 30px; padding: 20px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #10b981; border-radius: 8px;">
                <h2 style="margin: 0 0 15px; font-size: 18px; color: #10b981; text-transform: uppercase; letter-spacing: 1px;">
                  Institución
                </h2>
                <p style="margin: 5px 0; font-size: 16px; color: #ffffff; font-weight: 600;">
                  ${data.institutionName}
                </p>
                <p style="margin: 5px 0; font-size: 14px; color: rgba(255, 255, 255, 0.7);">
                  Tipo: <strong style="color: #10b981;">${typeLabel}</strong>
                </p>
              </div>

              <!-- Contact Info -->
              <div style="margin-bottom: 30px; padding: 20px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #06b6d4; border-radius: 8px;">
                <h2 style="margin: 0 0 15px; font-size: 18px; color: #06b6d4; text-transform: uppercase; letter-spacing: 1px;">
                  Información de Contacto
                </h2>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: rgba(255, 255, 255, 0.7); width: 120px;">
                      Nombre:
                    </td>
                    <td style="padding: 8px 0; font-size: 16px; color: #ffffff; font-weight: 600;">
                      ${data.contactName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: rgba(255, 255, 255, 0.7);">
                      Email:
                    </td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${data.email}" style="color: #06b6d4; text-decoration: none; font-weight: 600;">
                        ${data.email}
                      </a>
                    </td>
                  </tr>
                  ${data.phone ? `
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: rgba(255, 255, 255, 0.7);">
                      Teléfono:
                    </td>
                    <td style="padding: 8px 0;">
                      <a href="tel:${data.phone}" style="color: #06b6d4; text-decoration: none; font-weight: 600;">
                        ${data.phone}
                      </a>
                    </td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- Message -->
              ${data.message ? `
              <div style="margin-bottom: 30px; padding: 20px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #ec4899; border-radius: 8px;">
                <h2 style="margin: 0 0 15px; font-size: 18px; color: #ec4899; text-transform: uppercase; letter-spacing: 1px;">
                  Mensaje
                </h2>
                <p style="margin: 0; font-size: 15px; color: #ffffff; line-height: 1.6; white-space: pre-wrap;">
                  ${data.message}
                </p>
              </div>
              ` : ''}

              <!-- Footer -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
                <p style="margin: 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                  Este email fue generado automáticamente desde el formulario de contacto de PickleTrack
                </p>
                <p style="margin: 10px 0 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                  Fecha: ${new Date().toLocaleString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function createThankYouEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por contactar - PickleTrack</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 50px 30px; background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #ec4899 100%); text-align: center;">
              <h1 style="margin: 0; font-size: 36px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 2px;">
                🏓 ¡Gracias!
              </h1>
              <p style="margin: 15px 0 0; font-size: 18px; color: rgba(255, 255, 255, 0.95); line-height: 1.5;">
                Hemos recibido tu solicitud
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 15px; font-size: 18px; color: #ffffff; line-height: 1.6;">
                  Hola <strong style="color: #10b981;">${data.contactName}</strong>,
                </p>
                <p style="margin: 0; font-size: 16px; color: rgba(255, 255, 255, 0.9); line-height: 1.7;">
                  Gracias por contactar con <strong style="color: #10b981;">PickleTrack</strong>. Hemos recibido tu solicitud para <strong>${data.institutionName}</strong> y nos pondremos en contacto contigo muy pronto.
                </p>
              </div>

              <!-- Next Steps -->
              <div style="margin-bottom: 30px; padding: 25px; background-color: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; border-radius: 8px;">
                <h2 style="margin: 0 0 15px; font-size: 20px; color: #10b981; text-transform: uppercase; letter-spacing: 1px;">
                  ¿Qué sigue?
                </h2>
                <p style="margin: 0 0 12px; font-size: 15px; color: #ffffff; line-height: 1.6;">
                  Nuestro equipo revisará tu solicitud y te contactará en las próximas 24-48 horas para:
                </p>
                <ul style="margin: 12px 0 0; padding-left: 20px; font-size: 15px; color: rgba(255, 255, 255, 0.9); line-height: 1.8;">
                  <li>Conocer mejor tus necesidades</li>
                  <li>Evaluar tu espacio para la instalación</li>
                  <li>Proporcionarte una propuesta personalizada</li>
                </ul>
              </div>

              <!-- Contact Info -->
              <div style="margin-bottom: 30px; padding: 25px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #06b6d4; border-radius: 8px;">
                <h2 style="margin: 0 0 20px; font-size: 20px; color: #06b6d4; text-transform: uppercase; letter-spacing: 1px;">
                  Nuestros Datos de Contacto
                </h2>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; font-size: 15px; color: rgba(255, 255, 255, 0.8);">
                      <strong style="color: #ffffff;">Gonzalo Junco</strong><br>
                      <span style="color: rgba(255, 255, 255, 0.6); font-size: 14px;">Director</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-size: 15px;">
                      <a href="mailto:admin@pickletrack.es" style="color: #06b6d4; text-decoration: none; font-weight: 600;">
                        📧 admin@pickletrack.es
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-size: 15px;">
                      <a href="tel:+34647432206" style="color: #06b6d4; text-decoration: none; font-weight: 600;">
                        📞 +34 647 432 206
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-size: 15px;">
                      <a href="https://pickletrack.es" style="color: #06b6d4; text-decoration: none; font-weight: 600;">
                        🌐 pickletrack.es
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA -->
              <div style="margin-bottom: 30px; text-align: center;">
                <p style="margin: 0 0 20px; font-size: 15px; color: rgba(255, 255, 255, 0.8);">
                  Mientras tanto, puedes visitar nuestra web para conocer más sobre nuestros servicios:
                </p>
                <a href="https://pickletrack.es" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #ec4899 100%); color: #ffffff; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border-radius: 8px; font-size: 14px;">
                  Visitar PickleTrack
                </a>
              </div>

              <!-- Footer -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
                <p style="margin: 0; font-size: 14px; color: rgba(255, 255, 255, 0.7); line-height: 1.6;">
                  <strong style="color: #ffffff;">PickleTrack</strong><br>
                  Diseño - Construcción - Gestión
                </p>
                <p style="margin: 15px 0 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                  Este es un email automático. Por favor, no respondas directamente a este mensaje.
                </p>
                <p style="margin: 10px 0 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                  Si tienes alguna pregunta, contáctanos en <a href="mailto:admin@pickletrack.es" style="color: #06b6d4; text-decoration: none;">admin@pickletrack.es</a>
                </p>
              </div>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.institutionName || !body.contactName || !body.email) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const emailHtml = createEmailTemplate(body);
    const thankYouEmailHtml = createThankYouEmailTemplate(body);

    // Send email to both internal recipients
    const recipients = ['admin@pickletrack.es', 'greg@badgie.com'];

    // Note: The domain pickletrack.es must be verified in Resend dashboard
    // If not verified, you can temporarily use: 'onboarding@resend.dev'
    const internalEmailPromises = recipients.map((to) =>
      resend.emails.send({
        from: 'PickleTrack <noreply@pickletrack.es>',
        to,
        subject: `🏓 Nuevo Lead: ${body.institutionName}`,
        html: emailHtml,
      })
    );

    // Send thank you email to the user
    const thankYouEmailPromise = resend.emails.send({
      from: 'PickleTrack <noreply@pickletrack.es>',
      to: body.email,
      subject: '🏓 Gracias por contactar con PickleTrack',
      html: thankYouEmailHtml,
    });

    // Send all emails in parallel
    await Promise.all([...internalEmailPromises, thankYouEmailPromise]);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
