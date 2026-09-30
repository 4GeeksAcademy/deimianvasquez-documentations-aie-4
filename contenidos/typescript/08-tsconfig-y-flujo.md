# 08 — tsconfig y flujo de trabajo

## Instalar (proyecto Node)

```bash
npm init -y
npm install -D typescript
npx tsc --init
```

## Compilar

```bash
npx tsc
npx tsc --watch
```

## Opciones utiles (inicio)

En `tsconfig.json` (ver [ejemplo](ejemplos/tsconfig.ejemplo.json)):

| Opcion | Idea |
| --- | --- |
| `target` | Version de JS de salida (`ES2020`, etc.) |
| `module` | Sistema de modulos (`ESNext`, `CommonJS`, …) |
| `rootDir` / `outDir` | Origen y carpeta de salida |
| `strict` | Activa chequeos estrictos (recomendado) |
| `noEmit` | Solo typecheck (comun con bundlers) |
| `jsx` | Si usas React (`react-jsx`) |

## `strict`

Con `strict: true` ganas:

- `strictNullChecks`
- `noImplicitAny`
- y otros chequeos

Es la configuracion recomendada para proyectos nuevos.

## Flujo tipico hoy

1. Escribes `.ts` / `.tsx`
2. El editor (TS language service) marca errores al instante
3. Vite / Next / otro bundler transpila
4. A veces CI corre `tsc --noEmit` para validar tipos

No siempre necesitas publicar los `.js` a mano.

## Declaracion de librerias

Si un paquete no trae tipos:

```bash
npm install -D @types/nombre-paquete
```

Muchos paquetes modernos ya incluyen tipos.

## Siguiente

[09 — Errores comunes](09-errores-comunes.md)
