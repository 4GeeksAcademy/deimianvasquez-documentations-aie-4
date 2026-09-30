# 04 — Secciones y landmarks

Los landmarks son regiones con nombre que ayudan a navegar la pagina (sobre todo con teclado y lectores de pantalla).

## Tags principales

| Tag | Uso tipico |
| --- | --- |
| `<header>` | Cabecera del sitio o de una seccion (logo, titulo, nav) |
| `<nav>` | Bloque de navegacion principal o secundaria |
| `<main>` | Contenido unico y principal de la pagina (uno solo) |
| `<footer>` | Pie del sitio o de una seccion (creditos, links legales) |
| `<section>` | Seccion tematica con sentido propio (suele tener heading) |
| `<article>` | Contenido independiente (post, card, item reutilizable) |
| `<aside>` | Contenido relacionado pero lateral (tips, widgets) |

## Reglas simples

1. **Un solo `<main>`** por pagina.
2. El `<nav>` va donde hay **enlaces de navegacion**, no en cualquier lista de links.
3. Usa `<section>` cuando agrupas contenido con un tema y un heading.
4. Usa `<article>` cuando el bloque podria entenderse solo (noticia, producto, post).
5. No anides `main` dentro de `main`.
6. `header` / `footer` pueden aparecer en el sitio y tambien dentro de un `article` o `section`.

## Landmarks y lectores de pantalla

Muchos lectores permiten saltar entre regiones: "ir al main", "ir a la navegacion". Si todo es `div`, esa navegacion se pierde.

## Ejemplo: layout simple

```html
<body>
  <header>
    <p>Mi sitio</p>
    <nav aria-label="Principal">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/modulos">Modulos</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h1>HTML semantico</h1>
      <p>Aprende a estructurar paginas con significado.</p>
    </section>

    <section>
      <h2>Proximos temas</h2>
      <article>
        <h3>Formularios</h3>
        <p>Labels, inputs y validacion basica.</p>
      </article>
    </section>

    <aside>
      <h2>Tip</h2>
      <p>Primero el tag correcto; ARIA solo si hace falta.</p>
    </aside>
  </main>

  <footer>
    <p>Pie de pagina</p>
  </footer>
</body>
```

Compara con los archivos en [ejemplos/](ejemplos/).

## Siguiente

[05 — Listas, tablas y medios](05-listas-tablas-medios.md)
