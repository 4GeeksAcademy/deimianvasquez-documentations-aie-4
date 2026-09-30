# 08 — Errores comunes

## 1. `Permission denied (publickey)`

**Causas frecuentes**

- La publica no esta en `authorized_keys` del usuario correcto
- Estas entrando con otro usuario (`root` vs `ubuntu`)
- `IdentityFile` apunta a otra llave
- Permisos mal en `~/.ssh` o `authorized_keys`

**Que revisar**

```bash
ssh -v usuario@ip
```

`-v` muestra que llaves ofrece el cliente. En el servidor, confirma usuario y contenido de `authorized_keys`.

## 2. Bad permissions / ignored key

Mensaje tipico: la llave se ignora por permisos.

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 600 ~/.ssh/authorized_keys   # en el servidor
```

## 3. `Host key verification failed`

La huella del servidor no coincide con `known_hosts` (reinstall, IP reasignada, o ataque MITM).

Si **tu** reinstalaste la VPS:

```bash
ssh-keygen -R 203.0.113.10
```

Luego conecta de nuevo y acepta la huella nueva. Si no reinstalaste nada, investiga antes de borrar.

## 4. Usuario incorrecto

`Permission denied` aunque la llave sea correcta: prueba el usuario de la imagen (`ubuntu`, `debian`, etc.).

## 5. Puerto incorrecto

Si el servidor escucha en otro puerto:

```bash
ssh -p 2222 usuario@ip
```

o `Port 2222` en `~/.ssh/config`.

## 6. `Connection timed out` / no route

- IP mal copiada
- VPS apagada
- Firewall del proveedor o de la red local bloqueando salida 22
- Seguridad del cloud sin regla para SSH

## 7. `ssh-copy-id` no existe (Windows)

Usa WSL, Git Bash con OpenSSH, o el metodo manual de pegar la `.pub` en `authorized_keys` / panel.

## 8. Pediste password del servidor y pensabas usar llave

Entonces la llave no se esta usando. Revisa `-v`, `IdentityFile` y `authorized_keys`.

## Practica

Sigue el flujo corto en [pasos-resumen](ejemplos/pasos-resumen.md) y cierra con el [checklist](checklist.md).
