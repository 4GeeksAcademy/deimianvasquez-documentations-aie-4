# 02 — Tipos basicos

## Anotacion de tipo

```ts
let nombre: string = "Ana";
let edad: number = 28;
let activo: boolean = true;
```

En muchos casos TypeScript **infiere** el tipo:

```ts
let nombre = "Ana"; // string inferido
```

Anota cuando aporta claridad (parametros, retornos, objetos publicos).

## Primitivos frecuentes

| Tipo | Valores |
| --- | --- |
| `string` | Texto |
| `number` | Numeros (enteros y decimales) |
| `boolean` | `true` / `false` |
| `null` | Ausencia intencional |
| `undefined` | No definido |
| `bigint` | Enteros grandes |
| `symbol` | Identificador unico |

## `any` vs `unknown`

```ts
let a: any = "hola";
a.toFixed(); // TypeScript no se queja — peligroso

let b: unknown = "hola";
// b.toFixed(); // error
if (typeof b === "string") {
  console.log(b.toUpperCase()); // ok tras narrowing
}
```

- `any`: apaga el tipado (evitalo)
- `unknown`: "no se que es" hasta que lo compruebes

## Literales

```ts
let direccion: "norte" | "sur" = "norte";
```

## `void` y `never` (intro)

```ts
function log(msg: string): void {
  console.log(msg);
}

function fail(message: string): never {
  throw new Error(message);
}
```

- `void`: no retorna valor util
- `never`: no termina con un valor (throw / loop infinito)

## Siguiente

[03 — Objetos, arrays y tuplas](03-objetos-arrays-tuplas.md)
