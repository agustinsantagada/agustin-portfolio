# Agustin Santagada — Portfolio

Next.js 14 portfolio, deployable on Vercel (free plan).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS puro** (sin librerías externas)
- **Vercel** (hosting gratuito)

## Setup local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel (gratis)

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/agustin-portfolio.git
git push -u origin main
```

### 2. Conectar Vercel
1. Entrar a [vercel.com](https://vercel.com) → crear cuenta gratuita
2. "New Project" → importar el repo de GitHub
3. Vercel detecta Next.js automáticamente → click "Deploy"
4. En ~2 min tu sitio está en línea en `agustin-portfolio.vercel.app`

### 3. Conectar dominio propio (agustinsantagada.com)
1. En Vercel: Settings → Domains → agregar `agustinsantagada.com`
2. En tu registrador de dominio (donde compraste el dominio), actualizar los DNS:
   - Agregar registro `A` apuntando a `76.76.21.21`
   - O agregar `CNAME www` → `cname.vercel-dns.com`
3. Listo — en ~24hs propaga.

## Formulario de contacto

El formulario usa [Formspree](https://formspree.io) (gratuito hasta 50 emails/mes).

1. Crear cuenta en formspree.io
2. "New Form" → copiar el ID (ej: `xkgjpqwe`)
3. En `app/contact/page.tsx` reemplazar `YOUR_FORM_ID` con tu ID:
   ```
   https://formspree.io/f/xkgjpqwe
   ```

## Agregar proyectos nuevos

Editar `app/data/projects.ts`:
```ts
{
  slug: 'nombre-del-proyecto',        // URL: /work/nombre-del-proyecto
  title: 'Cliente | Nombre',
  category: 'Motion',                  // Motion / Branding / UX/UI / Development
  image: 'https://...',               // URL de la imagen
}
```

## Estructura

```
app/
  page.tsx          → Home (grilla de trabajo)
  about/page.tsx    → About
  contact/page.tsx  → Contacto
  work/[slug]/      → Detalle de cada proyecto
  data/projects.ts  → Todos los proyectos (editar aquí)
  globals.css       → Estilos globales + design system
components/
  Nav.tsx
  Footer.tsx
```
