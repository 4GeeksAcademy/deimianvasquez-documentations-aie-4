# 06 — Formularios

## Piezas basicas

| Tag | Rol |
| --- | --- |
| `<form>` | Contenedor del formulario (action, method) |
| `<label>` | Nombre visible y accesible del control |
| `<input>` | Campo de una linea (texto, email, etc.) |
| `<textarea>` | Texto multilinea |
| `<select>` + `<option>` | Lista de opciones |
| `<button>` | Accion (enviar, cancelar, etc.) |
| `<fieldset>` / `<legend>` | Agrupar controles relacionados |

## Label asociado al control

Cada control visible debe tener un `label` ligado con `for` / `id`:

```html
<label for="email">Correo</label>
<input id="email" name="email" type="email" autocomplete="email" />
```

Sin esa asociacion, lectores de pantalla y clics en el texto del label fallan.

## Ejemplo completo

```html
<form action="/registro" method="post">
  <fieldset>
    <legend>Datos de cuenta</legend>

    <label for="nombre">Nombre</label>
    <input id="nombre" name="nombre" type="text" required />

    <label for="email">Correo</label>
    <input id="email" name="email" type="email" required />

    <label for="rol">Rol</label>
    <select id="rol" name="rol">
      <option value="estudiante">Estudiante</option>
      <option value="mentor">Mentor</option>
    </select>

    <label for="bio">Bio</label>
    <textarea id="bio" name="bio" rows="4"></textarea>
  </fieldset>

  <button type="submit">Crear cuenta</button>
</form>
```

## Tipos de input utiles

`text`, `email`, `password`, `number`, `url`, `search`, `checkbox`, `radio`, `file`, `date`

Elige el `type` correcto: da teclado movil adecuado y validacion basica del navegador.

## Botones

- Preferir `<button type="submit">` o `<button type="button">`
- Evitar `<div>` o `<span>` clickeables para acciones
- `input type="submit"` funciona, pero `button` es mas flexible para contenido interno

## Siguiente

[07 — Accesibilidad basica](07-accesibilidad-basica.md)
