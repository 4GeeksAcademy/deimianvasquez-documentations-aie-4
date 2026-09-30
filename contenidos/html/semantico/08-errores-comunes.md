# 08 — Errores comunes

Casos tipicos al escribir HTML, con antes / despues.

## 1. Divitis / spanitis

**Antes**

```html
<div class="header">
  <div class="nav">...</div>
</div>
<div class="content">...</div>
```

**Despues**

```html
<header>
  <nav>...</nav>
</header>
<main>...</main>
```

## 2. Div clickeable en vez de boton o enlace

**Antes**

```html
<div class="btn" onclick="enviar()">Enviar</div>
```

**Despues**

```html
<button type="submit">Enviar</button>
<!-- o, si navega a otra URL: -->
<a href="/enviar">Enviar</a>
```

## 3. Varios `h1` sin criterio

**Antes**

```html
<h1>Mi sitio</h1>
<h1>Blog</h1>
<h1>Contacto</h1>
```

**Despues**

```html
<h1>Mi sitio</h1>
<h2>Blog</h2>
<h2>Contacto</h2>
```

## 4. Tabla para layout

**Antes**

```html
<table>
  <tr>
    <td>Sidebar</td>
    <td>Contenido</td>
  </tr>
</table>
```

**Despues**

```html
<main>
  <aside>Sidebar</aside>
  <section>Contenido</section>
</main>
```

(El layout visual se resuelve con CSS.)

## 5. Iconos sin texto accesible

**Antes**

```html
<button><img src="buscar.svg" /></button>
```

**Despues**

```html
<button type="button">
  <img src="buscar.svg" alt="" />
  Buscar
</button>
```

O, si solo puede ir el icono:

```html
<button type="button" aria-label="Buscar">
  <img src="buscar.svg" alt="" />
</button>
```

## 6. Input sin label

**Antes**

```html
<input type="email" placeholder="Correo" />
```

**Despues**

```html
<label for="email">Correo</label>
<input id="email" type="email" name="email" />
```

(`placeholder` no reemplaza al `label`.)

## 7. Enlace vacio o generico

**Antes**

```html
<a href="/temario">Haz clic aqui</a>
```

**Despues**

```html
<a href="/temario">Ver temario completo</a>
```

## Practica

Abre [mala-practica.html](ejemplos/mala-practica.html) y reescribelo como [buena-practica.html](ejemplos/buena-practica.html). Luego pasa el [checklist](checklist.md).
