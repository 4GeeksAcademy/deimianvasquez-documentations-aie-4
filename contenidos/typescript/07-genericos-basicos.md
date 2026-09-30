# 07 — Genericos basicos

## Idea

Un generico es un **parametro de tipo**: la funcion/tipo funciona con varios tipos sin caer en `any`.

```ts
function primero<T>(items: T[]): T | undefined {
  return items[0];
}

primero([1, 2, 3]); // number | undefined
primero(["a", "b"]); // string | undefined
```

`T` se infiere por el argumento.

## Restricciones (`extends`)

```ts
function labelOf<T extends { label: string }>(item: T): string {
  return item.label;
}

labelOf({ label: "OK", id: 1 });
```

## Genericos en types

```ts
type ApiResponse<T> = {
  data: T;
  status: number;
};

type User = { id: number; name: string };
type UserResponse = ApiResponse<User>;
```

## Ejemplo practico: Result

```ts
type Result<T, E = string> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function ok<T>(value: T): Result<T> {
  return { ok: true, value };
}
```

## Cuando usarlos

- Reutilizas la misma logica con tipos distintos
- Evitas copiar `UserList`, `ProductList`, etc.

Cuando NO: tipar un solo caso concreto. No hace falta generico para todo.

## Siguiente

[08 — tsconfig y flujo de trabajo](08-tsconfig-y-flujo.md)
