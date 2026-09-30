# Checklist — TypeScript

## Conceptos

- [ ] Se explicar que TS compila a JS y chequea tipos
- [ ] Diferencio `any` (evitar) de `unknown` (acotar)
- [ ] Se cuando anotar y cuando dejar inferir

## Tipado diario

- [ ] Tipos primitivos y arrays tipados
- [ ] Objetos con `interface` o `type`
- [ ] Funciones con parametros y retorno claros
- [ ] Props opcionales con `?`
- [ ] Uniones (`|`) y narrowing basico (`typeof`, `Array.isArray`, discriminantes)

## Genericos y config

- [ ] Entiendo un `<T>` simple en una funcion o `type`
- [ ] Tengo un `tsconfig` con `strict` (o se por que no)
- [ ] Se correr typecheck (`tsc` / `tsc --noEmit`)

## Habitos

- [ ] No uso `any` como escape habitual
- [ ] No abuso de `!`
- [ ] No asumo que `JSON.parse` ya es un tipo seguro
- [ ] Revisé [errores comunes](09-errores-comunes.md)
