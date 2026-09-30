# 02 — Conceptos: VPS y SSH

## Cliente vs servidor

| Rol | Donde | Que hace |
| --- | --- | --- |
| Cliente | Tu PC / laptop | Ejecuta `ssh`, guarda la llave privada |
| Servidor | La VPS | Corre `sshd`, guarda tu llave publica en `authorized_keys` |

## Datos que necesitas del servidor

Antes de conectar, consigue:

1. **IP publica** (ej. `203.0.113.10`) o hostname
2. **Usuario** (ej. `root`, `ubuntu`, `debian`)
3. **Puerto SSH** (casi siempre `22`)
4. Forma temporal de entrar la primera vez (password del panel, consola web del proveedor, o llave ya cargada al crear la VPS)

## Carpeta `~/.ssh`

En tu maquina local:

```text
~/.ssh/
  id_ed25519        ← privada (NUNCA se comparte ni se sube a un repo)
  id_ed25519.pub    ← publica (esta si se copia al servidor)
  config            ← atajos de conexion (opcional pero muy util)
  known_hosts       ← huellas de servidores a los que ya te conectaste
```

En el servidor, por usuario:

```text
~/.ssh/
  authorized_keys   ← lista de llaves publicas permitidas
```

## Par de llaves

- **Privada**: secreto. Queda en tu PC (idealmente con passphrase).
- **Publica**: se puede compartir. Va al servidor.

Analogia simple: la publica es el candado; la privada es la llave fisica.

## Usuario tipico segun imagen

| Imagen / distro | Usuario frecuente |
| --- | --- |
| Ubuntu | `ubuntu` |
| Debian | `debian` o el que definiste |
| Muchos paneles al crear | `root` (luego conviene un usuario normal) |

## Siguiente

[03 — Generar llave SSH](03-generar-llave-ssh.md)
