# 04 — Subir la llave al servidor

Objetivo: que el servidor acepte tu llave publica en `~/.ssh/authorized_keys`.

## Opcion A — `ssh-copy-id` (la mas comoda)

Si aun puedes entrar con contraseña:

```bash
ssh-copy-id usuario@203.0.113.10
```

Con llave especifica:

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@203.0.113.10
```

Esto crea `~/.ssh` si hace falta, agrega la linea de la `.pub` y ajusta permisos basicos.

## Opcion B — Panel del proveedor

Muchos proveedores permiten pegar la llave publica al **crear** la VPS o en "SSH Keys" del panel. En ese caso, al nacer la maquina ya te autentica con esa llave.

Copia solo el contenido de `id_ed25519.pub`.

## Opcion C — Manual (consola web o sesion temporal)

1. Entra al servidor (consola del panel o password temporal)
2. En el usuario con el que vas a conectar:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
```

3. Pega **una linea** con el contenido de tu `.pub`
4. Guarda y aplica permisos:

```bash
chmod 600 ~/.ssh/authorized_keys
```

## Que NO hacer

- No pegues la **privada** (`id_ed25519` sin `.pub`)
- No subas la privada a GitHub, Discord, Notion, etc.
- No dejes `authorized_keys` con permisos abiertos (ej. `777`)

## Verificar que quedo

En el servidor:

```bash
wc -l ~/.ssh/authorized_keys
cat ~/.ssh/authorized_keys
```

Deberias ver tu linea `ssh-ed25519 ...`.

## Siguiente

[05 — Primera conexion](05-primera-conexion.md)
