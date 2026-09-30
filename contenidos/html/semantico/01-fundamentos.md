# 01 — Fundamentos

## Que es HTML semantico

HTML semantico es usar tags que **describen que es el contenido**, no solo como se ve.

- Semantico: `<nav>`, `<article>`, `<button>` — tienen significado
- Generico: `<div>`, `<span>` — solo agrupan o marcan sin decir que son

La presentacion (colores, tipografia, layout) va en CSS. El HTML responde: *que es esto?*

## Por que importa

| Motivo | Beneficio |
| --- | --- |
| Accesibilidad | Lectores de pantalla y teclado entienden la pagina |
| SEO | Buscadores interpretan mejor el contenido |
| Mantenimiento | Otro dev (o tu yo del futuro) entiende la estructura |
| Trabajo con IA | Un agente genera o revisa markup con reglas claras |

## Div y span vs tags con significado

Usa `div` / `span` cuando **no hay** un tag semantico adecuado.

```html
<!-- Debil: no dice que es -->
<div class="nav">...</div>
<div class="article">...</div>

<!-- Claro: el tag ya lo dice -->
<nav>...</nav>
<article>...</article>
```

## Criterio rapido

Antes de escribir un `div`, preguntate:

> ¿Este tag describe **que es** el contenido?

Si la respuesta es "navegacion", "articulo", "boton", "encabezado principal", etc., usa el tag semantico correspondiente.

## Siguiente

[02 — Estructura del documento](02-estructura-documento.md)
