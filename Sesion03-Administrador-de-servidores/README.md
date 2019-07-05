## Administración de servidores

### OBJETIVO

Que el alummno entienda el concepto, el valor y los comandos para utilizar el manejador de paquetes APT y pueda crear y utilizar una llave SSH.

### Requerimientos

- Tener instalado un sistema operativo base Debian (Ubuntu, Linuxmint), o una imagen de docker
- Comandos básicos de terminal

### DESARROLLO

#### SSH

**SSH** (Secure Shell): Es una herramienta que nos permite abrir una conexión segura y encriptada con otra computadora (o servidor) por medio de una llave pública y una llave privada, permitiendo así autenticar un ingreso (login), correr comandos, recibir respuestas o copiar archivos. 

[Ejemplo 1: Verificar que tenemos ssh instalado](./Ejemplo-01)

[Ejemplo 2: Buscar si tenemos llaves dentro de la carpeta `~/.ssh`](./Ejemplo-02)

[Reto 1: Crea una nueva llave shh](./Reto-01)

[Reto 2: Agregar al agent-shh nuestra nueva llave](./Reto-02)

[Reto 3: Agregar nuestra llave pública a nuestra cuenta de Github](./Reto-03)

[Reto 4: Clonar un repositorio utilizando la opción SSH](./Reto-04)

#### Manejadores de paquetes

##### APT (Advance Package Tool)

Repositorio de herramientas de Debian y Ubuntu. Es mediante manejadores de paquetes que los sistemas Open Source se mantienen actualizados y verficados.

Interactuamos con este repositorio mediante la terminal y el comando `apt` (alternativo a: `apt-get` o `aptitude` pero con las opciones más comunes) [leer sobre las diferencias](https://itsfoss.com/apt-vs-apt-get-difference/)

**Principales comandos**:

  - `sudo apt update ` Actualiza / Refresca el índice de repositorios
  - `sudo apt install <nombre-packete>` Instala el paquete <nombre-packete>
  - `sudo apt remove <nombre-packete>`	Remueve el paquete <nombre-packete>
  - `sudo apt purge <nombre-packete>`	Remueve el paquete <nombre-packete> con todo y configuración
  - `sudo apt update`	Refresca el índice de paquetes (actualizaciones)
  - `sudo apt upgrade`	Actualiza todos los paquetes actualizables
  - `sudo apt autoremove`	Remueve paquetes no deseados
  - `sudo apt full-upgrade`	Actualiza los paquetes y todas sus dependencias
  - `sudo apt search <nombre-packete>`	Busca por el paquete <nombre-packete> 
  - `sudo apt show <nombre-packete>`	Muestra los detalles del paquete <nombre-packete>

[Ejemplo 3: Actualización de índice de paquetes](./Ejemplo-03)

[Reto 5: Investiga un paquete interesante e instalalo](./Ejemplo-03)
