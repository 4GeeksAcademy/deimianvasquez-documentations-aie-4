# 05 — Funciones

## Parametros y retorno

```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

Si omites el retorno, TypeScript suele inferirlo. Conviene anotarlo en APIs publicas.

## Parametros opcionales y default

```ts
function saludo(nombre: string, formal?: boolean): string {
  return formal ? `Buenas, ${nombre}` : `Hola, ${nombre}`;
}

function crearId(prefix = "id"): string {
  return `${prefix}-${Date.now()}`;
}
```

Los opcionales van **despues** de los requeridos.

## Funciones como valores

```ts
type Matcher = (value: string) => boolean;

const empiezaConA: Matcher = (value) => value.startsWith("A");
```

## Callbacks

```ts
function mapNumbers(values: number[], fn: (n: number) => number): number[] {
  return values.map(fn);
}

mapNumbers([1, 2, 3], (n) => n * 2);
```

## `void` en callbacks

```ts
function onReady(cb: () => void) {
  cb();
}
```

Significa: "no uses el valor de retorno".

## Overloads (intro)

Varias firmas visibles, una implementacion:

```ts
function parse(input: string): string[];
function parse(input: string, limit: number): string[];
function parse(input: string, limit?: number): string[] {
  const parts = input.split(",");
  return limit === undefined ? parts : parts.slice(0, limit);
}
```

Usa overloads solo cuando una union simple no alcanza.

## Siguiente

[06 — Union, optional y narrowing](06-union-optional-narrowing.md)
