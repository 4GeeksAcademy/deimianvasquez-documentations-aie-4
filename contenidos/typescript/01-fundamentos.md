# 01 — Fundamentos

## Que es TypeScript

**TypeScript** es JavaScript con un sistema de tipos estatico. Escribes `.ts` / `.tsx`, el compilador (`tsc`) revisa tipos y genera JavaScript que corre en el navegador o en Node.

```text
TypeScript  →  tsc  →  JavaScript
```

## Que problema resuelve

En JS muchos errores aparecen **en runtime**:

```js
function precioFinal(precio, descuento) {
  return precio - descuento;
}

precioFinal("100", 10); // "10010" o NaN segun el caso — sorpresa tarde
```

Con tipos, el error aparece **antes**, en el editor o al compilar.

## Que NO es

- No es un runtime distinto: al final ejecutas JS
- No reemplaza tests
- No obliga a tipar absolutamente todo desde el dia uno (aunque conviene tipar lo importante)

## Beneficios practicos

| Beneficio | Ejemplo |
| --- | --- |
| Autocompletado | El editor sabe las props de un objeto |
| Refactors mas seguros | Renombrar un campo y ver donde se rompe |
| Contratos claros | Funciones y APIs documentadas por tipos |
| Menos bugs tontos | `undefined` inesperado, argumentos al reves |

## Requisitos mentales

Si ya lees JavaScript (variables, funciones, objetos, arrays), puedes aprender TypeScript. El salto es: **declarar la forma de los datos**.

## Siguiente

[02 — Tipos basicos](02-tipos-basicos.md)
