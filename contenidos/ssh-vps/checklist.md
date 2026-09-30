# Checklist — SSH a VPS

Usa esta lista para validar el flujo completo.

## Datos del servidor

- [ ] Tienes IP o hostname
- [ ] Sabes el usuario correcto
- [ ] Sabes el puerto (22 u otro)

## Llaves en el cliente

- [ ] Generaste un par (ed25519 recomendado)
- [ ] Existe `*.pub` y la privada correspondiente
- [ ] La privada NO esta en ningun repo ni chat
- [ ] Permisos: `~/.ssh` en 700, privada en 600

## Autorizacion en el servidor

- [ ] La publica esta en `~/.ssh/authorized_keys` del usuario correcto
  - o cargada en el panel del proveedor
- [ ] `authorized_keys` en permisos 600
- [ ] `~/.ssh` del servidor en 700

## Conexion

- [ ] `ssh usuario@ip` funciona
- [ ] (Opcional) `~/.ssh/config` con `Host`, `HostName`, `User`, `IdentityFile`
- [ ] Puedes entrar con el alias (`ssh mi-vps`)

## Seguridad minima

- [ ] Entiendes publica vs privada
- [ ] (Opcional, solo si la llave ya funciona) password auth desactivada con via de emergencia
- [ ] Sabes que hacer si ves `Host key verification failed`

## Troubleshooting

- [ ] Sabes usar `ssh -v` para ver que llave se ofrece
- [ ] Revisaste [errores comunes](08-errores-comunes.md) si algo falla
