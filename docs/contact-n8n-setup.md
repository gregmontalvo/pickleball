# Contacto: Google Sheet + n8n

El formulario de contacto ya no usa Resend. Los leads se envían a un webhook de n8n que:
1. Añade la fila a un Google Sheet
2. Envía un email de aviso desde hello@badgie.com a admin@pickletrack.es con los detalles y el enlace al Sheet

---

## 1. Google Sheet

1. Crea una hoja nueva en Google Drive (o en la cuenta que vaya a usar n8n).
2. En la **primera fila** pon estos encabezados (una columna cada uno):

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|--|---|
   | receivedAt | institutionName | institutionType | contactName | email | phone | message |

3. Guarda y anota:
   - **ID de la hoja**: en la URL aparece algo como  
     `https://docs.google.com/spreadsheets/d/ **ESTE_ES_EL_ID** /edit`  
     Copia solo la parte `ESTE_ES_EL_ID`.
   - **Nombre de la hoja** (pestaña abajo): normalmente `Hoja 1` o el nombre que le hayas puesto.

4. Comparte la hoja con la cuenta de servicio que use n8n para Google Sheets (o con la cuenta que configures en el nodo de Google Sheets en n8n), con permiso de **Editor**.

---

## 2. n8n – Workflow

Crear un workflow con estos nodos en este orden.

### Nodo 1: Webhook (trigger)

- Tipo: **Webhook**
- Método: **POST**
- Path: el que quieras, ej. `contact-pickletrack` (al activar el workflow n8n te dará la URL completa).
- Respuesta: **Respond Immediately** (para que la web reciba 200 rápido).
- Opcional: en **Options** activa “Respond With All Entries” si quieres devolver algo concreto; para este caso no hace falta.

Al **activar** el workflow, n8n mostrará la URL del webhook, por ejemplo:

```text
https://tu-instancia-n8n.com/webhook/contact-pickletrack
```

o con un ID:

```text
https://tu-instancia-n8n.com/webhook/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

Esa URL es la que usarás en el paso 4 (variable de entorno).

El body que envía la web es JSON, por ejemplo:

```json
{
  "institutionName": "Colegio Ejemplo",
  "institutionType": "colegio",
  "contactName": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+34 600 000 000",
  "message": "Queremos información sobre pistas.",
  "receivedAt": "2025-01-23T12:00:00.000Z"
}
```

### Nodo 2: Google Sheets – Append Row

- Tipo: **Google Sheets**
- Operación: **Append or Update Row** (o solo “Append Row” si tu versión lo tiene).
- Documento: el ID de la hoja del paso 1.
- Hoja: nombre de la pestaña (ej. `Hoja 1`).
- Columnas: mapea cada campo del JSON al encabezado de la columna:

  - `receivedAt` → columna A  
  - `institutionName` → B  
  - `institutionType` → C  
  - `contactName` → D  
  - `email` → E  
  - `phone` → F  
  - `message` → G  

En n8n sueles hacerlo con expresiones tipo `{{ $json.receivedAt }}`, `{{ $json.institutionName }}`, etc., según cómo se llame el nodo anterior (normalmente el Webhook).

Conecta la salida del **Webhook** a la entrada de este nodo.

### Nodo 3: Email (aviso a admin@pickletrack.es)

- Tipo: **Email** (o **Gmail / SMTP**, según tengas configurado hello@badgie.com).
- De: **hello@badgie.com**
- Para: **admin@pickletrack.es**
- Asunto: por ejemplo  
  `Nuevo lead PickleTrack: {{ $json.institutionName }}`
- Cuerpo del mensaje (ejemplo en texto/HTML):

  - Resumen del lead: institución, tipo, nombre de contacto, email, teléfono, mensaje.
  - Enlace directo al Google Sheet para abrirlo:
    - Formato típico:  
      `https://docs.google.com/spreadsheets/d/TU_SHEET_ID/edit`  
      Sustituye `TU_SHEET_ID` por el ID real del paso 1.
  - Puedes usar las mismas expresiones que en el nodo de Sheets para rellenar los datos (ej. `{{ $json.contactName }}`).

Conecta la salida del **Webhook** (o la del nodo de Google Sheets si prefieres que el email se envíe después de escribir en el Sheet) a la entrada de este nodo.

Recomendación: conectar **Webhook → Google Sheets** y **Webhook → Email** en paralelo, o **Webhook → Google Sheets → Email** para que primero se guarde y luego se envíe el aviso.

---

## 3. Variable de entorno en el proyecto (Next.js / Vercel)

En tu `.env.local` (y en Vercel como variable de entorno) añade:

```env
N8N_CONTACT_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook/contact-pickletrack
```

Sustituye por la URL real que te dio n8n al activar el workflow (paso 2, nodo Webhook).

- No hace falta `RESEND_API_KEY` para el formulario de contacto (solo para otros flujos que sigan usando Resend).
- Tras cambiar variables en Vercel, haz un nuevo deploy para que tome `N8N_CONTACT_WEBHOOK_URL`.

---

## 4. Resumen de pasos

| Paso | Dónde | Qué hacer |
|------|--------|-----------|
| 1 | Google Sheet | Crear hoja, encabezados (receivedAt, institutionName, institutionType, contactName, email, phone, message), anotar ID y nombre de pestaña. Compartir con la cuenta de n8n. |
| 2 | n8n | Crear workflow: Webhook (POST) → Google Sheets (append row) y → Email (hello@badgie.com → admin@pickletrack.es, con detalles + link al Sheet). Activar workflow y copiar URL del webhook. |
| 3 | Proyecto | Añadir `N8N_CONTACT_WEBHOOK_URL` en `.env.local` y en Vercel. |
| 4 | Probar | Enviar un formulario de contacto de prueba y comprobar fila nueva en el Sheet y email en admin@pickletrack.es. |

---

## Payload que envía la API al webhook

La ruta `POST /api/contact` valida el cuerpo y reenvía a n8n este JSON:

- `institutionName` (string)
- `institutionType` (string): `colegio` | `club` | `hotel` | `asociacion` | `otro`
- `contactName` (string)
- `email` (string)
- `phone` (string, opcional)
- `message` (string, opcional)
- `receivedAt` (string, ISO 8601) – añadido por la API

Usa estos nombres de campo en el nodo de Google Sheets y en el cuerpo del email en n8n.
