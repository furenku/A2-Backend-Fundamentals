
## Administración de servidores

### OBJETIVO

Que el alummno entienda el concepto, el valor y los comandos para utilizar el manejador de paquetes APT y pueda crear y utilizar una llave SSH.

### Requerimientos

- Tener instalado un sistema operativo base Debian (Ubuntu, Linuxmint), o una imagen de docker
- Comandos básicos de terminal o línea de comandos UNIX

### DESARROLLO

#### SSH

**SSH** (Secure Shell): Es una herramienta que nos permite abrir una conexión segura y encriptada con otra computadora (o servidor) por medio de una llave pública y una llave privada, permitiendo así autenticar un ingreso (login), correr comandos, recibir respuestas o copiar archivos. 

[Ejemplo 1: Verificar que tenemos ssh instalado](./Ejemplo-01)

[Ejemplo 2: Buscar si tenemos llaves dentro de la carpeta `~/.ssh`](./Ejemplo-02)

[Reto 1: Crea una nueva llave shh](./Reto-01)

[Reto 2: Agregar al agent-shh nuestra nueva llave](./Reto-02)

[Reto 3: Agregar nuestra llave pública a nuestra cuenta de Github](./Reto-03)

[Reto 4: Crear un repositorio y hacer push usando la configuración SSH](./Reto-04)

Para configurar un servidor a que nos permita hacer autenticación utilizando nuestras llaves SSH es necesario copiar y pegar nuestra llave pública dentro del archivo `~/.ssh/authorized_keys` dentro del servidor. Primero hay que ingresar utilizando usuario y password.

#### Manejadores de paquetes

##### APT (Advance Package Tool)

Repositorio de herramientas de Debian y Ubuntu. Es mediante manejadores de paquetes que los Sistemas Operativos Open Source se mantienen actualizados y verficados. También permiten automatizar el proceso de  instalación, actualización, configuración o desinstalación de los programas de manera consistente, y así poder fácilmente replicar ambientes de desarrollo y producción.

Interactuamos con este repositorio (APT) mediante la terminal y el comando `apt` (alternativo a: `apt-get` o `aptitude` pero con las opciones más comunes) [leer sobre las diferencias](https://itsfoss.com/apt-vs-apt-get-difference/)

**Principales comandos**:

  - `sudo apt update ` Actualiza / Refresca el índice de repositorios
  - `sudo apt install <nombre-paquete>` Instala el paquete `<nombre-paquete>`
  - `sudo apt remove <nombre-paquete>`	Remueve el paquete `<nombre-paquete>`
  - `sudo apt purge <nombre-paquete>`	Remueve el paquete `<nombre-paquete>` con todo y configuración
  - `sudo apt update`	Refresca el índice de paquetes (actualizaciones)
  - `sudo apt upgrade`	Actualiza todos los paquetes actualizables
  - `sudo apt autoremove`	Remueve paquetes no deseados
  - `sudo apt full-upgrade`	Actualiza los paquetes y todas sus dependencias
  - `sudo apt search <nombre-paquete>`	Busca por el paquete `<nombre-paquete>` 
  - `sudo apt show <nombre-paquete>`	Muestra los detalles del paquete `<nombre-paquete>`

[Ejemplo 3: Actualización de índice de paquetes](./Ejemplo-03)

[Reto 5: Investiga un paquete interesante e instalalo](./Ejemplo-03)

##### Manejadores de paquetes en Mac OS y Windows

Siguiendo el ejemplo de la propuesta de los sistemas GNU/Linux, Mac y Windows ahora ofrecen alternativas para administrar la instalación y actualización de programas de manera automática.

**Mac**

<a href="https://brew.sh/" target="_blank">Homebrew</a> es un sistema de gestión de paquetes que simplifica la instalación, actualización y eliminación de programas en los sistemas operativos Mac OS de Apple y GNU/Linux. Ha sido destacado por su fácil uso e integración con la línea de comandos.

Hace uso extensivo de GitHub para dar soporte a más paquetes. En 2010 fue el tercer repositorio con más forks en la plataforma​ y tiene el mayor número de contribuciones.​ 

Ej.

```
$ brew install wget
```


**Windows**

<a href="https://chocolatey.org/" target="_blank">Chocolatey</a> Chocolatey es un gestor de paquetes para Windows (como apt-get o yum pero para Windows). Fue diseñado para ser un marco de trabajo descentralizado para instalar rápidamente las aplicaciones y herramientas que usted necesita. Está construido sobre la infraestructura NuGet que actualmente utiliza PowerShell como su foco para entregar paquetes desde las distribuciones a su puerta, computadora

Ej.

```
C:\> choco install docker-desktop
```
