# 02 — SEO on-page

On-page = lo que controlas **dentro** de la pagina.

## Title

El `<title>` es una de las senales mas fuertes.

```html
<title>HTML semantico: guia practica con ejemplos</title>
```

Buenas practicas:

- Unico por pagina
- Describe el tema (no genérico: "Inicio", "Documento")
- Longitud razonable (aprox. 50–60 caracteres visibles)
- Incluye el termino principal si encaja de forma natural

## Meta description

No es factor de ranking directo en todos los buscadores, pero influye en el CTR:

```html
<meta
  name="description"
  content="Aprende HTML semantico: landmarks, headings, formularios y checklist para revisar tus paginas."
/>
```

## Headings

- Un `h1` claro que resuma la pagina
- `h2`/`h3` que organicen secciones
- Orden logico (sin saltar niveles)

Relacion directa con [HTML semantico — texto y contenido](../html/semantico/03-texto-y-contenido.md).

## URLs

Preferible:

```text
/html/semantico
/seo-geo/fundamentos
```

Evitar:

```text
/page?id=3382
/nueva-carpeta-final-v2
```

Cortas, legibles, con palabras del tema.

## Enlaces internos

Conecta paginas relacionadas con texto descriptivo:

```html
<a href="/html/semantico">Guia de HTML semantico</a>
```

No: "haz clic aqui".

## Imagenes

- `alt` util en imagenes informativas
- Nombres de archivo descriptivos cuando puedas (`diagrama-landmarks.png`)

## Open Graph (intro)

Util para compartidos en redes; no reemplaza title/description del documento:

```html
<meta property="og:title" content="HTML semantico: guia practica" />
<meta property="og:description" content="Landmarks, headings y checklist." />
```

## Siguiente

[03 — Contenido e intencion](03-contenido-y-intencion.md)
