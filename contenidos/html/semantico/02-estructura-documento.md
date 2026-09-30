# 02 — Estructura del documento

## Esqueleto minimo

Toda pagina HTML necesita una estructura base clara:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Titulo de la pagina</title>
  </head>
  <body>
    <!-- contenido visible -->
  </body>
</html>
```

## Piezas clave

| Pieza | Para que sirve |
| --- | --- |
| `<!DOCTYPE html>` | Indica HTML5 al navegador |
| `lang` en `<html>` | Idioma del documento (ayuda a accesibilidad y SEO) |
| `charset` | Codificacion de caracteres (UTF-8) |
| `viewport` | Comportamiento en movil |
| `<title>` | Titulo en la pestana y resultados de busqueda |
| `<head>` | Metadatos; no se ve en la pagina |
| `<body>` | Todo lo visible |

## Jerarquia clara

Dentro de `body`, organiza el contenido de arriba hacia abajo con landmarks (ver [04](04-secciones-y-landmarks.md)):

1. Cabecera del sitio (`header`)
2. Navegacion (`nav`)
3. Contenido principal (`main`)
4. Pie (`footer`)

No dejes todo suelto en `body` sin estructura.

## Ejemplo minimo bien armado

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primera pagina</title>
  </head>
  <body>
    <header>
      <h1>Mi sitio</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/cursos">Cursos</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <h2>Bienvenida</h2>
      <p>Contenido principal de la pagina.</p>
    </main>

    <footer>
      <p>&copy; 2026 Mi sitio</p>
    </footer>
  </body>
</html>
```

## Siguiente

[03 — Texto y contenido](03-texto-y-contenido.md)
