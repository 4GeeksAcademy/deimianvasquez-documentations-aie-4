# 05 — Listas, tablas y medios

## Listas

| Tag | Cuando usarlo |
| --- | --- |
| `<ul>` | Lista sin orden (menu, features, tags) |
| `<ol>` | Lista con orden (pasos, ranking) |
| `<dl>` | Pares termino–descripcion (glosario) |

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>

<ol>
  <li>Leer fundamentos</li>
  <li>Practicar con el ejemplo</li>
  <li>Pasar el checklist</li>
</ol>

<dl>
  <dt>Landmark</dt>
  <dd>Region con significado estructural en la pagina.</dd>
</dl>
```

Cada item de `ul`/`ol` va en `<li>`. No uses `div` + `<br>` para fingir una lista.

## Tablas (solo datos tabulares)

Las tablas son para **datos en filas y columnas**, no para armar el layout de la pagina.

```html
<table>
  <caption>Horario semanal</caption>
  <thead>
    <tr>
      <th scope="col">Dia</th>
      <th scope="col">Tema</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lunes</th>
      <td>Fundamentos</td>
    </tr>
    <tr>
      <th scope="row">Miercoles</th>
      <td>Landmarks</td>
    </tr>
  </tbody>
</table>
```

- `caption`: titulo de la tabla
- `th` + `scope`: encabezados claros
- Layout de columnas → CSS (flex/grid), no `<table>`

## Imagenes y figuras

```html
<img src="diagrama.png" alt="Diagrama de landmarks: header, nav, main y footer" />

<figure>
  <img src="antes-despues.png" alt="Comparacion de markup con divs y con tags semanticos" />
  <figcaption>Misma pagina: mala practica vs buena practica.</figcaption>
</figure>
```

### `alt` util

- Describe el **contenido o funcion** de la imagen
- Si la imagen es decorativa, `alt=""`
- No pongas "imagen de..." ni dejes `alt` vacio en imagenes informativas

## Video y audio (intro)

```html
<video controls src="demo.mp4">
  Tu navegador no soporta video HTML5.
</video>

<audio controls src="podcast.mp3">
  Tu navegador no soporta audio HTML5.
</audio>
```

## Siguiente

[06 — Formularios](06-formularios.md)
