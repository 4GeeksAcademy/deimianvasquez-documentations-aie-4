# 09 — Errores comunes

## 1. Escapar con `any`

**Mal**

```ts
function parse(data: any) {
  return data.items.map((x: any) => x.name);
}
```

**Mejor**

```ts
type Payload = { items: { name: string }[] };

function parse(data: Payload) {
  return data.items.map((x) => x.name);
}
```

Si llega de afuera sin forma, valida y luego tipa (o usa `unknown` + narrowing).

## 2. Ignorar `null` / `undefined`

```ts
function len(text?: string) {
  // return text.length; // puede romper
  return text?.length ?? 0;
}
```

## 3. Confundir `interface` con valor en runtime

Los tipos se borran al compilar. No existen en runtime:

```ts
interface User { id: number }
// typeof User // no funciona como en Java
```

Para comprobar en runtime usa validacion (`zod`, checks manuales, etc.).

## 4. Tipar de mas demasiado pronto

Empieza por lo publico: props, respuestas de API, dominios. No tipes cada variable local trivial si la inferencia ya alcanza.

## 5. `!` en todos lados

```ts
el!.value!.trim()!;
```

Prefiere `if`, early return o `?.`.

## 6. Arrays heterogenous sin union

```ts
const mix = [1, "a"]; // (string | number)[]
```

Si querias solo números, tipa `number[]` y corrige los datos.

## 7. Olvidar que JSON es `unknown` en la practica

`JSON.parse` devuelve algo inseguro. Tipar el resultado a ciegas miente:

```ts
const data = JSON.parse(raw) as User; // afirmacion riesgosa
```

Mejor validar la forma.

## Practica

Compara [antes.ts](ejemplos/antes.ts) y [despues.ts](ejemplos/despues.ts), luego pasa el [checklist](checklist.md).
