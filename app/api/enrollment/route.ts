import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = process.env.N8N_ENROLLMENT_WEBHOOK_URL;

interface EnrollmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!N8N_WEBHOOK_URL) {
      return NextResponse.json(
        { error: 'Envío no configurado' },
        { status: 503 }
      );
    }

    const body: EnrollmentFormData = await request.json();

    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
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
      console.error('n8n enrollment webhook error', webhookResponse.status, await webhookResponse.text());
      return NextResponse.json(
        { error: 'Error al procesar la solicitud' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Inscripción enviada correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enrollment API error:', error);
    return NextResponse.json(
      { error: 'Error al enviar el formulario' },
      { status: 500 }
    );
  }
}
