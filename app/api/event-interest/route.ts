import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EventInterestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventName: string;
}

function createAdminEmailTemplate(data: EventInterestFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Interesado en Evento - PickleTrack</title>
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
                🎉 Nuevo Interesado en Evento
              </h1>
              <p style="margin: 10px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); text-transform: uppercase; letter-spacing: 1px;">
                Escuela Saint Chaumond
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Event Info -->
              <div style="margin-bottom: 30px; padding: 20px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #fbbf24; border-radius: 8px;">
                <h2 style="margin: 0 0 15px; font-size: 18px; color: #fbbf24; text-transform: uppercase; letter-spacing: 1px;">
                  Evento de Interés
                </h2>
                <p style="margin: 0; font-size: 20px; color: #ffffff; font-weight: 600;">
                  ${data.eventName}
                </p>
              </div>

              <!-- Person Info -->
              <div style="margin-bottom: 30px; padding: 20px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #10b981; border-radius: 8px;">
                <h2 style="margin: 0 0 15px; font-size: 18px; color: #10b981; text-transform: uppercase; letter-spacing: 1px;">
                  Información del Interesado
                </h2>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: rgba(255, 255, 255, 0.7); width: 120px;">
                      Nombre:
                    </td>
                    <td style="padding: 8px 0; font-size: 16px; color: #ffffff; font-weight: 600;">
                      ${data.firstName} ${data.lastName}
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
                </table>
              </div>

              <!-- Action CTA -->
              <div style="margin-top: 30px; padding: 20px; background-color: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 8px; text-align: center;">
                <p style="margin: 0; font-size: 14px; color: rgba(255, 255, 255, 0.9);">
                  <strong style="color: #fbbf24;">Acción requerida:</strong> Contactar al interesado para confirmar asistencia al evento.
                </p>
              </div>

              <!-- Footer -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
                <p style="margin: 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                  Este email fue generado automáticamente desde el formulario de interés en eventos de PickleTrack
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

function createThankYouEmailTemplate(data: EventInterestFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por tu interés - PickleTrack</title>
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
                🎉 ¡Gracias por tu Interés!
              </h1>
              <p style="margin: 10px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); text-transform: uppercase; letter-spacing: 1px;">
                PickleTrack - Eventos Promocionales
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <p style="margin: 0 0 20px; font-size: 18px; color: #ffffff; line-height: 1.6;">
                Hola <strong>${data.firstName}</strong>,
              </p>

              <p style="margin: 0 0 20px; font-size: 16px; color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
                ¡Gracias por tu interés en nuestro evento <strong style="color: #fbbf24;">${data.eventName}</strong>!
              </p>

              <p style="margin: 0 0 20px; font-size: 16px; color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
                Hemos recibido tu solicitud y nuestro equipo se pondrá en contacto contigo pronto para confirmar tu asistencia y darte todos los detalles del evento.
              </p>

              <div style="margin: 30px 0; padding: 20px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #10b981; border-radius: 8px;">
                <h3 style="margin: 0 0 15px; font-size: 18px; color: #10b981; text-transform: uppercase; letter-spacing: 1px;">
                  ¿Qué sigue?
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: rgba(255, 255, 255, 0.9); line-height: 1.8;">
                  <li>Te contactaremos en breve para confirmar tu asistencia</li>
                  <li>Recibirás información detallada sobre el evento</li>
                  <li>Te enviaremos recordatorios antes de la fecha</li>
                </ul>
              </div>

              <!-- Event Details -->
              <div style="margin: 30px 0; padding: 20px; background-color: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 8px;">
                <h3 style="margin: 0 0 10px; font-size: 18px; color: #fbbf24; text-transform: uppercase; letter-spacing: 1px;">
                  📅 Evento de Interés
                </h3>
                <p style="margin: 0; font-size: 20px; color: #ffffff; font-weight: 600;">
                  ${data.eventName}
                </p>
              </div>

              <!-- Contact Info -->
              <div style="margin: 30px 0; padding: 20px; background-color: rgba(255, 255, 255, 0.05); border-left: 4px solid #06b6d4; border-radius: 8px;">
                <h3 style="margin: 0 0 15px; font-size: 18px; color: #06b6d4; text-transform: uppercase; letter-spacing: 1px;">
                  ¿Tienes preguntas?
                </h3>
                <p style="margin: 0 0 10px; font-size: 15px; color: rgba(255, 255, 255, 0.9);">
                  Estamos aquí para ayudarte. Contáctanos:
                </p>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 5px 0; font-size: 14px; color: rgba(255, 255, 255, 0.7);">
                      📧 Email:
                    </td>
                    <td style="padding: 5px 0;">
                      <a href="mailto:admin@pickletrack.es" style="color: #06b6d4; text-decoration: none; font-weight: 600;">
                        admin@pickletrack.es
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; font-size: 14px; color: rgba(255, 255, 255, 0.7);">
                      📱 Teléfono:
                    </td>
                    <td style="padding: 5px 0;">
                      <a href="tel:+34647432206" style="color: #06b6d4; text-decoration: none; font-weight: 600;">
                        +34 647 432 206
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin: 30px 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.9); line-height: 1.6; text-align: center;">
                <strong style="color: #10b981;">¡Nos vemos en el evento!</strong>
              </p>

              <p style="margin: 20px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.7); line-height: 1.6; text-align: center;">
                El equipo de <strong style="color: #fbbf24;">PickleTrack</strong>
              </p>

              <!-- Footer -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
                <p style="margin: 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                  Colegio Union-Chrétienne de Saint Chaumond<br />
                  C. de Rodríguez Marín, 30-32, Chamartín, 28002 Madrid
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
    const body: EventInterestFormData = await request.json();

    // Validate required fields
    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.phone ||
      !body.eventName
    ) {
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

    const adminEmailHtml = createAdminEmailTemplate(body);
    const thankYouEmailHtml = createThankYouEmailTemplate(body);

    // Send email to admins
    const recipients = ['admin@pickletrack.es', 'greg@badgie.com'];

    const adminEmailPromises = recipients.map((to) =>
      resend.emails.send({
        from: 'PickleTrack <noreply@pickletrack.es>',
        to,
        subject: `🎉 Interesado en Evento: ${body.eventName} - ${body.firstName} ${body.lastName}`,
        html: adminEmailHtml,
      })
    );

    // Send thank you email to client
    const thankYouEmailPromise = resend.emails.send({
      from: 'PickleTrack <noreply@pickletrack.es>',
      to: body.email,
      subject: `¡Gracias por tu interés en ${body.eventName}!`,
      html: thankYouEmailHtml,
    });

    // Send all emails in parallel
    await Promise.all([...adminEmailPromises, thankYouEmailPromise]);

    return NextResponse.json(
      { message: 'Solicitud enviada correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending event interest email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
