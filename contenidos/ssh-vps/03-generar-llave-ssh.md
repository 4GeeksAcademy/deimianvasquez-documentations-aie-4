# 03 — Generar llave SSH

Haz esto **en tu computadora local**, no en el servidor.

## Recomendacion: Ed25519

```bash
ssh-keygen -t ed25519 -C "tu-email-o-etiqueta"
```

- `-t ed25519`: algoritmo moderno y recomendado
- `-C "..."`: etiqueta para identificar la llave (comentario)

Si te pregunta la ruta, Enter acepta el default (`~/.ssh/id_ed25519`).

## Passphrase

Te pide una frase secreta para cifrar la privada en disco.

- **Con passphrase**: si alguien copia el archivo, aun necesita la frase
- **Sin passphrase**: mas comodo, menos seguro si roban el disco

Para uso real, conviene passphrase.

## Que se crea

```bash
ls -l ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub
```

| Archivo | Uso |
| --- | --- |
| `id_ed25519` | Privada — no la copies a chats, repos ni tickets |
| `id_ed25519.pub` | Publica — esta va al servidor |

## Ver la publica

```bash
cat ~/.ssh/id_ed25519.pub
```

Empieza algo como:

```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... tu-email-o-etiqueta
```

## Ya tenias una llave?

Si `~/.ssh/id_ed25519` existe y quieres otra para esta VPS:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_vps -C "vps-principal"
```

Luego apuntaras `IdentityFile` a ese archivo en el config (ver [06](06-config-ssh-cliente.md)).

## Windows

- **PowerShell / Windows Terminal** con OpenSSH: mismos comandos
- **WSL**: igual que Linux
- Evita pegar la privada en sitios raros; usa la carpeta `.ssh` del usuario

## Siguiente

[04 — Subir la llave al servidor](04-subir-llave-al-servidor.md)
