# 06 — Union, optional y narrowing

## Union (`|`)

Un valor puede ser de varios tipos:

```ts
type Id = string | number;

function printId(id: Id) {
  console.log(String(id));
}
```

## Narrowing

Estrechar el tipo con comprobaciones:

```ts
function largo(value: string | string[]) {
  if (typeof value === "string") {
    return value.length;
  }
  return value.length; // aqui es string[]
}
```

Otras formas comunes:

- `typeof`
- `===` / discriminantes
- `in`
- `Array.isArray`
- type predicates (`value is Foo`) — mas adelante

## Discriminated unions

Patron muy util:

```ts
type Ok = { ok: true; data: string };
type Fail = { ok: false; error: string };
type Result = Ok | Fail;

function handle(result: Result) {
  if (result.ok) {
    console.log(result.data);
  } else {
    console.log(result.error);
  }
}
```

El campo `ok` discrimina la variante.

## Optional chaining y nullish

```ts
type User = { profile?: { bio?: string } };

function bio(user: User) {
  return user.profile?.bio ?? "Sin bio";
}
```

- `?.` evita crash si falta algo en la cadena
- `??` usa el fallback solo si es `null` o `undefined`

## Non-null assertion (`!`) — con cuidado

```ts
const el = document.getElementById("app")!;
```

Le dices a TypeScript "confia, no es null". Si te equivocas, el bug es tuyo. Prefiere `if` / narrowing.

## Siguiente

[07 — Genericos basicos](07-genericos-basicos.md)
