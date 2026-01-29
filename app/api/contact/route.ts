import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = process.env.N8N_CONTACT_WEBHOOK_URL;

interface ContactFormData {
  institutionName: string;
  institutionType: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!N8N_WEBHOOK_URL) {
      console.error('N8N_CONTACT_WEBHOOK_URL is not set');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    const body: ContactFormData = await request.json();

    // Only email and phone are required
    if (!body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Email y teléfono son obligatorios' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const payload = {
      ...body,
      receivedAt: new Date().toISOString(),
    };

    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      console.error('n8n webhook error', webhookResponse.status, await webhookResponse.text());
      return NextResponse.json(
        { error: 'Error al procesar la solicitud' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Solicitud enviada correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Error al enviar el formulario' },
      { status: 500 }
    );
  }
}
