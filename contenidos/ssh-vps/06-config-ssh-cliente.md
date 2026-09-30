# 06 — Config del cliente SSH

En lugar de escribir IP, usuario y llave cada vez, usa `~/.ssh/config`.

## Crear o editar el archivo

```bash
nano ~/.ssh/config
```

Permisos recomendados:

```bash
chmod 600 ~/.ssh/config
```

## Ejemplo minimo

```sshconfig
Host mi-vps
  HostName 203.0.113.10
  User ubuntu
  IdentityFile ~/.ssh/id_ed25519
```

Conexion:

```bash
ssh mi-vps
```

## Campos utiles

| Campo | Significado |
| --- | --- |
| `Host` | Alias local (cualquier nombre comodo) |
| `HostName` | IP o DNS real |
| `User` | Usuario remoto |
| `IdentityFile` | Ruta a la llave **privada** |
| `Port` | Si no es 22 |

Ejemplo con puerto y llave dedicada:

```sshconfig
Host produccion
  HostName 203.0.113.10
  User deploy
  Port 2222
  IdentityFile ~/.ssh/id_ed25519_vps
```

## Varios servidores

```sshconfig
Host vps-web
  HostName 203.0.113.10
  User ubuntu
  IdentityFile ~/.ssh/id_ed25519

Host vps-db
  HostName 203.0.113.20
  User ubuntu
  IdentityFile ~/.ssh/id_ed25519
```

## Plantilla

Copia [ejemplos/config.ejemplo](ejemplos/config.ejemplo) y adapta IP, usuario y rutas.

## Siguiente

[07 — Seguridad basica](07-seguridad-basica.md)
