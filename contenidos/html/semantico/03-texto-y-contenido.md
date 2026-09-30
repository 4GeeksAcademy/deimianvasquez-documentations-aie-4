# 03 — Texto y contenido

## Encabezados (`h1`–`h6`)

Los headings definen la **jerarquia del contenido**, no el tamano visual (eso es CSS).

Reglas practicas:

- Un solo `h1` por pagina (o por vista principal)
- No saltes niveles: `h1` → `h2` → `h3` (no `h1` → `h4`)
- No uses un heading solo porque "se ve grande"

```html
<h1>Curso de HTML</h1>
  <h2>Tema 1</h2>
    <h3>Que es semantica</h3>
  <h2>Tema 2</h2>
```

## Parrafos y enlaces

- Texto corrido → `<p>`
- Enlace a otra pagina o recurso → `<a href="...">`
- El texto del enlace debe tener sentido fuera de contexto ("Ver temario", no "Haz clic aqui")

## Enfasis: `strong` y `em`

| Tag | Significado | No confundir con |
| --- | --- | --- |
| `<strong>` | Importancia / urgencia | Negrita solo visual (`font-weight`) |
| `<em>` | Enfasis / tono | Cursiva solo visual (`font-style`) |

```html
<p>Entrega <strong>antes del viernes</strong>.</p>
<p>No era una sugerencia, <em>era obligatorio</em>.</p>
```

## Codigo y citas (intro)

```html
<p>Usa el tag <code>&lt;main&gt;</code> para el contenido principal.</p>

<blockquote>
  <p>El HTML describe que es el contenido; el CSS como se ve.</p>
</blockquote>
```

## Que no hacer

- Usar `h2`–`h6` solo para estilar texto
- Saltar niveles de heading
- Meter bloques enteros en un solo `<p>` gigante
- Enlaces con texto vacio o solo "aqui"

## Siguiente

[04 — Secciones y landmarks](04-secciones-y-landmarks.md)
