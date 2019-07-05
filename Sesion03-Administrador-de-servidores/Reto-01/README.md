##### Reto 01
## Creación de nueva llave SHH

### OBJETIVO
Crear una nueva llave ssh.

#### REQUISITOS

Contar con una terminal.

### DESARROLLO
1. Crear llave ssh
```
ssh-keygen -t rsa -b 4096 -C "escribe_tu_email@ejemplo.com"
```

2. Aceptar la carpeta predeterminada para guardar el par (publica/privada) de llaves generadas
```
> Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

3. Escribir una contraseña para nuestra llave privada (no la vayas a olvidar)
```
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

4. Verificar la creación de nuestro nuevo par de llaves [Ejemplo-02](../Ejemplo-02)

_Nota_ Es posible tener varias llaves privadas para una misma computadora