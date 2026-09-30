# 03 — Objetos, arrays y tuplas

## Objetos tipados

```ts
const user: { id: number; name: string } = {
  id: 1,
  name: "Ana",
};
```

Para reutilizar la forma, usa `interface` o `type` (ver [04](04-interfaces-y-types.md)).

## Arrays

```ts
const tags: string[] = ["html", "css"];
const scores: Array<number> = [10, 9, 8];
```

Ambas formas son equivalentes; `string[]` es la mas comun.

## Arrays de objetos

```ts
type Product = { id: number; title: string };

const products: Product[] = [
  { id: 1, title: "Teclado" },
  { id: 2, title: "Mouse" },
];
```

## Tuplas

Array con **longitud y tipos fijos por posicion**:

```ts
const punto: [number, number] = [10, 20];
const entrada: [string, number] = ["edad", 28];
```

Utiles para pares fijos; para listas abiertas usa arrays normales.

## Readonly (intro)

```ts
const ids: readonly number[] = [1, 2, 3];
// ids.push(4); // error
```

## Index signatures (intro)

Cuando las claves no estan fijas de antemano:

```ts
const contadores: { [key: string]: number } = {
  clicks: 3,
  views: 10,
};
```

Prefiere formas explicitas cuando puedas.

## Siguiente

[04 — Interfaces y type aliases](04-interfaces-y-types.md)
