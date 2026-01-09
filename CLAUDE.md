# CLAUDE.md - PickleTrack

## Descripcion del Proyecto

**PickleTrack** es una plataforma web para la gestion de instalaciones de Pickleball en colegios, clubes y otros espacios. El modelo de negocio: PickleTrack invierte en la instalacion de pistas y gestiona escuelas/alquileres.

### Cliente
- **Contacto**: Gonzalo Junco
- **Email**: admin@pickletrack.es
- **Telefono**: 647432206
- **Dominio**: pickletrack.es

### Partners
- Wilson (equipamiento)
- Tennis Point (retail)
- Badgie (gestion escuelas deportivas)
- RPPk (Registro Profesional de Pickleball)
- PLAYINCOLORS - Victor Garcia (diseno pistas)

---

## Stack Tecnico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + Shadcn/UI
- **Base de datos**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Iconos**: Lucide React

---

## Comandos de Desarrollo

```bash
npm install           # Instalar dependencias
npm run dev           # Servidor desarrollo (localhost:3000)
npm run build         # Build produccion
npm run start         # Ejecutar build produccion
npm run lint          # ESLint
npx tsc --noEmit      # Type checking
```

---

## Estructura del Proyecto

```
pickletrack/
├── app/
│   ├── page.tsx                    # Homepage B2B
│   ├── layout.tsx                  # Layout raiz
│   ├── globals.css                 # Estilos globales + Tailwind
│   ├── api/
│   │   ├── bookings/               # API publica reservas
│   │   ├── courts/                 # API pistas
│   │   └── contacts/               # Formulario contacto B2B
│   ├── reservas/                   # UI sistema reservas
│   ├── admin/                      # Panel administracion
│   └── [venue]/                    # Landing por venue dinamico
│       └── page.tsx                # ej: /stchaumond
├── components/
│   ├── ui/                         # Componentes Shadcn
│   ├── layout/                     # Header, Footer, Navigation
│   ├── landing/                    # Componentes homepage
│   └── booking/                    # Componentes reservas
├── lib/
│   ├── supabase/
│   │   ├── client.ts               # Cliente browser
│   │   └── server.ts               # Cliente server
│   ├── data-layer.ts               # Abstraccion acceso datos
│   └── utils.ts                    # Utilidades (cn, formatters)
├── public/
│   └── brand/                      # Assets PickleTrack
│       ├── logo-black.png
│       ├── logo-white.png
│       ├── logo-gold.png
│       └── icon.png
├── supabase/
│   └── migrations/                 # SQL migrations
├── types/
│   └── database.ts                 # Tipos generados Supabase
└── docs/                           # Documentacion briefings
    └── PICKLETRACK_MARCA/          # Assets originales marca
```

---

## Paleta de Colores

```css
/* Colores principales PickleTrack */
--pickletrack-black: #000000;
--pickletrack-white: #FFFFFF;
--pickletrack-gold: #E5A835;
--pickletrack-lime: #CCFF00;
--pickletrack-magenta: #FF00FF;
--pickletrack-cyan: #00FFFF;
--pickletrack-purple: #9333EA;

/* Uso en Tailwind (tailwind.config.ts) */
colors: {
  pickletrack: {
    black: '#000000',
    white: '#FFFFFF',
    gold: '#E5A835',
    lime: '#CCFF00',
    magenta: '#FF00FF',
    cyan: '#00FFFF',
    purple: '#9333EA',
  }
}
```

---

## Modelo de Datos

### Tablas Supabase

```sql
-- Venues (colegios, clubes, etc.)
CREATE TABLE venues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  address TEXT,
  city TEXT,
  logo_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pistas
CREATE TABLE courts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('pickleball', 'minitenis', 'multideporte')),
  status TEXT CHECK (status IN ('active', 'maintenance', 'inactive')) DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Horarios disponibles
CREATE TABLE schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  court_id UUID REFERENCES courts(id) ON DELETE CASCADE,
  day_of_week INTEGER CHECK (day_of_week BETWEEN 0 AND 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  price_cents INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true
);

-- Reservas
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  court_id UUID REFERENCES courts(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_phone TEXT,
  booking_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contactos B2B (instituciones interesadas)
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_name TEXT NOT NULL,
  institution_type TEXT CHECK (institution_type IN ('colegio', 'club', 'hotel', 'asociacion', 'otro')),
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  message TEXT,
  status TEXT CHECK (status IN ('new', 'contacted', 'meeting', 'proposal', 'closed')) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Patrones de Codigo

### Data Layer
Siempre usar `lib/data-layer.ts` para acceso a datos, nunca Supabase directo en componentes:

```typescript
// lib/data-layer.ts
import { createClient } from '@/lib/supabase/server'

export async function getVenues() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('venues')
    .select('*')
    .eq('is_active', true)

  if (error) throw error
  return data
}

export async function getVenueBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('venues')
    .select('*, courts(*)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data
}
```

### API Routes
Patron estandar para API routes:

```typescript
// app/api/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createContact } from '@/lib/data-layer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = await createContact(body)
    return NextResponse.json(result)
  } catch (error: unknown) {
    const err = error as Error
    console.error('Error creating contact:', err)
    return NextResponse.json(
      { error: err?.message || 'Error al procesar solicitud' },
      { status: 500 }
    )
  }
}
```

### Server Components (por defecto)
Usar Server Components siempre que sea posible:

```typescript
// app/[venue]/page.tsx
import { getVenueBySlug } from '@/lib/data-layer'
import { notFound } from 'next/navigation'

export default async function VenuePage({
  params
}: {
  params: { venue: string }
}) {
  const venue = await getVenueBySlug(params.venue)

  if (!venue) {
    notFound()
  }

  return (
    <div>
      <h1>{venue.name}</h1>
      {/* ... */}
    </div>
  )
}
```

---

## Variables de Entorno

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Opcional
NEXT_PUBLIC_SITE_URL=https://pickletrack.es
```

---

## Primer Venue: St. Chaumond

- **Slug**: `stchaumond`
- **Nombre**: Colegio Union-Chretienne de Saint Chaumond
- **Direccion**: Calle Comandante Franco, Madrid
- **Pistas**: 3 (pickleball)
- **Lanzamiento**: Marzo 2026

### Eventos promocionales 2026:
- 19-26 Abril: Puertas abiertas
- 24 Mayo: Torneo Padres/Madres/hijas
- 6-7 Junio: Torneo escolar

---

## API Publica (para integracion Badgie)

La API de reservas esta disenada para ser consumida externamente:

```
GET  /api/venues                    # Listar venues
GET  /api/venues/[slug]             # Detalle venue
GET  /api/courts?venue=[slug]       # Pistas de un venue
GET  /api/availability?court=[id]&date=[YYYY-MM-DD]  # Disponibilidad
POST /api/bookings                  # Crear reserva
GET  /api/bookings/[id]             # Detalle reserva
```

---

## Assets de Marca

Los assets originales estan en `/docs/PICKLETRACK_MARCA/`:
- `PICKLETRACK_MARCA_AAFF.pdf` - Manual de marca
- `PICKLETRACK_PNG/` - Logos en PNG (19 variantes)
- `PICKLETRACK_JPEG/` - Logos en JPEG
- `ICONOS/` - Iconos (14 variantes)

Para uso en la web, copiar a `/public/brand/` las versiones necesarias.

---

## Notas Importantes

1. **Prioridad**: Web principal B2B primero, luego sistema de reservas
2. **Estetica**: Usar los colores vibrantes de la marca, especialmente en las galerias de pistas
3. **SEO**: Optimizar para busquedas "pickleball colegios", "pistas pickleball madrid"
4. **Mobile-first**: Diseno responsive, muchos usuarios accederan desde movil
5. **Formulario B2B**: Clave para captar instituciones interesadas
