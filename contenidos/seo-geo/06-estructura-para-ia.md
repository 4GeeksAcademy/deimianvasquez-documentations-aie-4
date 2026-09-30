# 06 — Estructura para IA

Como escribir y maquetar para que un sistema pueda **extraer** bien tu contenido.

## Patron: pregunta → respuesta corta → detalle

```markdown
## Que es GEO

GEO (Generative Engine Optimization) son practicas para que el contenido
sea util y citable por motores generativos.

### Por que importa
...
```

La primera frase despues del heading deberia poder citarse sola.

## FAQ util

Las FAQ ayudan si responden dudas reales:

```html
<section>
  <h2>Preguntas frecuentes</h2>

  <h3>¿SEO y GEO son lo mismo?</h3>
  <p>No. Comparten bases (contenido claro, estructura), pero el canal y la metrica de exito cambian.</p>
</section>
```

## Datos verificables

Prefiere afirmaciones comprobables:

- Mal: "Somos los mejores del mundo"
- Bien: "Esta guia cubre on-page, tecnico basico y GEO; actualizada en 2026"

Incluye unidades, fechas y nombres propios cuando aporten.

## Markup util (intro)

Sin obsesionarse: lo primero es texto claro. Luego:

- HTML semantico
- `title` / meta description coherentes
- Schema/JSON-LD solo si modela algo real (Article, FAQPage, HowTo) y es correcto

Schema incorrecto puede confundir mas que ayudar.

## Bloques faciles de citar

- Definiciones en 1–2 frases
- Pasos numerados
- Tablas comparativas
- Checklists
- Antes / despues

## Siguiente

[07 — Metricas y errores](07-metricas-y-errores.md)
