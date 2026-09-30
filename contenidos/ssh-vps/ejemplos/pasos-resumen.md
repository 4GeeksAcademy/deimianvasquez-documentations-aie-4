# Pasos resumen — de cero a `ssh mi-vps`

Flujo corto. El detalle esta en los docs `01`–`08`.

## 1. Datos del servidor

Anota IP, usuario y puerto.

## 2. Genera la llave (local)

```bash
ssh-keygen -t ed25519 -C "mi-vps"
```

## 3. Autoriza la publica

Con password temporal:

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@IP
```

O pega `~/.ssh/id_ed25519.pub` en el panel / en `~/.ssh/authorized_keys`.

## 4. Conecta

```bash
ssh usuario@IP
```

## 5. Alias (opcional)

En `~/.ssh/config`:

```sshconfig
Host mi-vps
  HostName IP
  User usuario
  IdentityFile ~/.ssh/id_ed25519
```

```bash
chmod 600 ~/.ssh/config
ssh mi-vps
```

## 6. Verifica

- [ ] Entras sin password del servidor
- [ ] La privada no esta compartida
- [ ] Permisos de `~/.ssh` correctos
