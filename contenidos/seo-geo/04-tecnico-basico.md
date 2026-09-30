# 04 — Tecnico basico

Lo minimo para que el contenido **pueda** rankear: si no se indexa o no carga, el resto no importa.

## Indexacion

Para que un buscador muestre una URL suele necesitar:

1. Descubrirla (enlaces, sitemap)
2. Rastrearla (crawler)
3. Indexarla (guardarla)
4. Rankearla (ordenarla frente a otras)

## robots.txt (idea)

Archivo en la raiz que indica que se puede rastrear:

```text
User-agent: *
Allow: /

Sitemap: https://ejemplo.com/sitemap.xml
```

No uses `robots.txt` como seguridad: solo es una pista para crawlers.

## Sitemap

Lista de URLs importantes (XML). Ayuda al descubrimiento, no garantiza ranking.

## Canonical (intro)

Si hay URLs duplicadas (con/sin `www`, parametros, etc.), indica la preferida:

```html
<link rel="canonical" href="https://ejemplo.com/html/semantico" />
```

## Mobile y rendimiento

- Diseno usable en movil (`viewport`, layout adaptable)
- Contenido principal visible sin gestos raros
- Imagenes pesadas = peor experiencia (y peor senal practica)

No hace falta ser experto en Core Web Vitals aqui: evita paginas lentas y rotas.

## HTTPS

Sirve el sitio por HTTPS. Es expectativa basica de confianza.

## JavaScript y contenido

Si el contenido critico solo aparece despues de JS pesado, algunos crawlers lo ven peor. Preferible que el HTML inicial ya traiga el texto importante.

## Siguiente

[05 — GEO: motores generativos](05-geo-motores-generativos.md)
