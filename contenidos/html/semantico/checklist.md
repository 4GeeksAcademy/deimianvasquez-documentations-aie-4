# Checklist — HTML semantico

Usa esta lista para revisar una pagina HTML.

## Documento

- [ ] Tiene `<!DOCTYPE html>`
- [ ] `<html>` tiene `lang` (ej. `lang="es"`)
- [ ] Hay `charset` UTF-8 y un `<title>` descriptivo

## Estructura

- [ ] Hay un solo `<main>`
- [ ] Existen `header` / `nav` / `footer` cuando corresponde
- [ ] No hay "divitis": los bloques importantes usan tags con significado

## Texto

- [ ] Un `h1` claro por pagina/vista
- [ ] Headings en orden (sin saltar niveles)
- [ ] Parrafos en `<p>`, no texto suelto sin estructura
- [ ] Enlaces con texto comprensible (no "haz clic aqui")

## Interaccion

- [ ] Acciones usan `<button>` (o `a` si navegan)
- [ ] No hay `div`/`span` clickeables como botones
- [ ] Formularios: cada control tiene `<label>` asociado

## Medios y datos

- [ ] Imagenes informativas tienen `alt` util
- [ ] Imagenes decorativas tienen `alt=""`
- [ ] Tablas solo para datos tabulares (no para layout)
- [ ] Listas reales usan `ul`/`ol`/`li`

## Extra rapido

- [ ] La pagina se puede recorrer con Tab de forma razonable
- [ ] Comparaste contra [errores comunes](08-errores-comunes.md) si algo se siente "raro"
