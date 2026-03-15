# AeroPattern Terminal

Demo academica en Next.js para explicar Programacion Orientada a Objetos y los patrones creacionales **Factory Method** y **Abstract Factory** usando aviones como dominio.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (iconografia)

## Estructura del proyecto

```text
app/
  documentacion/page.tsx
  simulacion/page.tsx
  layout.tsx
  page.tsx
components/
  docs/
  layout/
  simulation/
domain/
  interfaces/
  models/
  factories/
lib/
  simulation/
  utils/
```

## Ejecutar en local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar entorno de desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

`http://localhost:3000`

## Build para produccion

```bash
npm run build
npm start
```

## Despliegue en Vercel

1. Sube este repositorio a GitHub/GitLab/Bitbucket.
2. Importa el proyecto en Vercel.
3. Vercel detecta Next.js automaticamente y despliega sin configuracion adicional.
