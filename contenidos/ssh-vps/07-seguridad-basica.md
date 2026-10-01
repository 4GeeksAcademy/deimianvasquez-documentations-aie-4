# 07 — Seguridad basica

Lo minimo despues de poder entrar con llave. Sin endurecer de mas.

## Permisos correctos (cliente)

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
chmod 600 ~/.ssh/config
```

SSH es estricto: si la privada es legible por otros, puede rechazarla.

## Permisos correctos (servidor)

Para el usuario con el que conectas:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

El home del usuario no deberia ser escribible por todo el mundo de forma laxa (SSH tambien puede quejarse).

## Nunca compartas la privada

- No la subas a un repositorio
- No la pegues en tickets o chats
- Si se filtro: genera un par nuevo, quita la publica vieja de `authorized_keys`, autoriza la nueva

## Desactivar login por password (cuando la llave ya funciona)

Solo cuando **ya entras con llave** y tienes otra via de emergencia (consola web del proveedor).

En el servidor, archivo tipico: `/etc/ssh/sshd_config` (o drop-in en `sshd_config.d/`):

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

Luego reinicia SSH segun la distro, por ejemplo:

```bash
sudo systemctl restart ssh
# o
sudo systemctl restart sshd
```

**Importante:** no cierres la sesion actual hasta probar otra conexion nueva en otra terminal. Si te bloqueas, usa la consola del proveedor.

## Buenas practicas simples

- Usa usuario normal + `sudo` en lugar de vivir siempre como `root` (cuando puedas)
- Passphrase en la llave local
- Una llave por maquina/persona; revoca la que ya no uses
- No abras SSH a internet en puertos raros "por ocultismo" sin saber por que; el hardening real es llaves + sin password + (mas adelante) firewall


## Siguiente

[08 — Errores comunes](08-errores-comunes.md)
