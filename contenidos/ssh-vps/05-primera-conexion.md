# 05 — Primera conexion

Desde tu maquina local:

```bash
ssh usuario@203.0.113.10
```

Ejemplos:

```bash
ssh ubuntu@203.0.113.10
ssh root@203.0.113.10
```

## Fingerprint / known_hosts

La primera vez veras algo como:

```text
The authenticity of host '203.0.113.10' can't be established.
ED25519 key fingerprint is SHA256:....
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- Escribe `yes` si la IP es la de tu VPS
- SSH guarda esa huella en `~/.ssh/known_hosts`

Si mas adelante la huella cambia (reinstalaste el SO, otra maquina en la misma IP), SSH avisara. No ignores el aviso sin entender por que cambio.

## Si pide passphrase

Es la passphrase de **tu llave local**, no la del servidor.

## Puerto distinto de 22

```bash
ssh -p 2222 usuario@203.0.113.10
```

## Probar sin quedarte dentro

```bash
ssh usuario@203.0.113.10 'echo ok && hostname'
```

## Salir

```bash
exit
```

o `Ctrl+D`.

## Senal de exito

Entras sin password del servidor (solo passphrase de la llave, si la tienes) y ves el prompt remoto, por ejemplo:

```text
ubuntu@mi-vps:~$
```

## Siguiente

[06 — Config del cliente SSH](06-config-ssh-cliente.md)
