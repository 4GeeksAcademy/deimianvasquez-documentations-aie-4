# 01 — Fundamentos

## Que problema resuelve esto

Necesitas entrar a un servidor remoto (una VPS) desde tu computadora de forma segura, sin exponer la contraseña en cada conexion.

## Que es SSH

**SSH** (Secure Shell) es un protocolo para abrir una terminal remota cifrada. El comando tipico es:

```bash
ssh usuario@direccion-del-servidor
```

## Que es una VPS

Una **VPS** (Virtual Private Server) es un servidor virtual en la nube: tiene IP publica, sistema operativo (casi siempre Linux) y puedes administrarlo como si fuera una maquina propia.

Proveedores comunes: DigitalOcean, Linode, Hetzner, AWS Lightsail, etc. Este tema es independiente del proveedor.

## Password vs llave SSH

| Metodo | Idea | Riesgo tipico |
| --- | --- | --- |
| Contraseña | Escribes el password cada vez | Fuerza bruta, password debil, phishing |
| Llave SSH | Pruebas posesion de una clave privada | Si filtras la privada, comprometes el acceso |

La llave es el camino recomendado para uso diario.

## Meta de este tema

Pasar de:

> "Tengo una VPS nueva y no se como entrar"

a:

> "Genero una llave, la autorizo en el servidor y entro con `ssh mi-vps`"

## Siguiente

[02 — Conceptos: VPS y SSH](02-conceptos-vps-y-ssh.md)
