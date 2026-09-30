# SSH y VPS

De cero a conectarte a un servidor con una llave SSH.

## Ruta de lectura

1. [Fundamentos](01-fundamentos.md)
2. [Conceptos: VPS y SSH](02-conceptos-vps-y-ssh.md)
3. [Generar llave SSH](03-generar-llave-ssh.md)
4. [Subir la llave al servidor](04-subir-llave-al-servidor.md)
5. [Primera conexion](05-primera-conexion.md)
6. [Config del cliente SSH](06-config-ssh-cliente.md)
7. [Seguridad basica](07-seguridad-basica.md)
8. [Errores comunes](08-errores-comunes.md)
9. [Checklist](checklist.md)

## Ejemplos

- [config.ejemplo](ejemplos/config.ejemplo) — plantilla de `~/.ssh/config`
- [pasos-resumen](ejemplos/pasos-resumen.md) — flujo corto de punta a punta

## Criterio de "listo"

Al terminar este tema deberias poder:

- Explicar llave publica vs privada
- Crear un par ed25519
- Dejar la publica autorizada en el servidor
- Conectar con `ssh usuario@ip` y con un alias en `~/.ssh/config`
- Resolver errores tipicos de permisos y autenticacion
