# 07 — Accesibilidad basica

La semantica HTML es la **base** de la accesibilidad. Antes de ARIA, usa el tag correcto.

## Regla de oro

> Primero el tag correcto. ARIA solo si el HTML nativo no alcanza.

ARIA mal usado empeora la experiencia. Un `<button>` real ya es focusable, activable con Enter/Espacio y anunciado como boton.

## Semantica que ayuda de inmediato

- Landmarks: `header`, `nav`, `main`, `footer`
- Headings en orden
- Enlaces (`a`) para navegacion, botones (`button`) para acciones
- `label` en formularios
- `alt` en imagenes informativas
- `lang` en `<html>`

## Contraste y foco (lo esencial)

- Texto legible sobre el fondo (contraste suficiente)
- No quites el outline del foco sin ofrecer un estilo de foco visible
- Todo lo interactivo debe poder usarse con teclado

## `alt`: vacio vs descriptivo

| Caso | `alt` |
| --- | --- |
| Imagen informa o explica | Descripcion concreta del contenido |
| Icono con texto al lado | Suele bastar `alt=""` si el texto ya lo dice |
| Decorativa | `alt=""` |
| Boton solo icono | Texto accesible en el control (`aria-label` o texto visually hidden) |

## Navegacion por teclado (alto nivel)

- Tab mueve el foco entre controles
- Enter activa enlaces y botones de envio
- Espacio activa botones
- Si algo solo funciona con click de mouse, hay un problema de accesibilidad

## Que queda fuera de este tema

ARIA avanzada, lectores de pantalla en detalle, WCAG completo. Eso puede ir a un tema de accesibilidad aparte.

## Siguiente

[08 — Errores comunes](08-errores-comunes.md)
