# 04 — Interfaces y type aliases

## `interface`

Describe la forma de un objeto:

```ts
interface User {
  id: number;
  name: string;
  email?: string; // opcional
}

const u: User = { id: 1, name: "Ana" };
```

## `type`

Alias para cualquier tipo (no solo objetos):

```ts
type UserId = number;
type Status = "pending" | "done" | "error";

type User = {
  id: UserId;
  name: string;
  status: Status;
};
```

## ¿Interface o type?

Regla practica para empezar:

| Usa | Cuando |
| --- | --- |
| `interface` | Forma de objetos/clases que puede extenderse |
| `type` | Uniones, tuplas, aliases, combinaciones |

Ambos sirven para objetos. Seamos consistentes en un proyecto.

## Extender / intersectar

```ts
interface Timestamps {
  createdAt: Date;
}

interface Post extends Timestamps {
  title: string;
}

type WithId = { id: number };
type Entity = WithId & { name: string };
```

## Props opcionales vs `undefined`

```ts
interface Config {
  debug?: boolean; // puede no venir
}
```

`debug?: boolean` permite omitir la propiedad. No es lo mismo que forzar `debug: boolean | undefined` en todos los casos (detalles finos; para empezar, `?` alcanza).

## Siguiente

[05 — Funciones](05-funciones.md)
