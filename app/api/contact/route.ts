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

    // Send email to both recipients
    const recipients = ['admin@pickletrack.es', 'greg@badgie.com'];

    // Note: The domain pickletrack.es must be verified in Resend dashboard
    // If not verified, you can temporarily use: 'onboarding@resend.dev'
    const emailPromises = recipients.map((to) =>
      resend.emails.send({
        from: 'PickleTrack <noreply@pickletrack.es>',
        to,
        subject: `🏓 Nuevo Lead: ${body.institutionName}`,
        html: emailHtml,
      })
    );

    await Promise.all(emailPromises);

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
