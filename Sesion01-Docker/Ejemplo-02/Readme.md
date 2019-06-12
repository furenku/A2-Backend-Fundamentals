##### Ejemplo 02
## Imágenes

### OBJETIVO
1. Aprender a listar imagenes de docker.
1. Aprender a buscar imagenes de docker.
1. Aprender a descargar imagenes de docker.

#### REQUISITOS

1. Docker
1. Terminal.

### DESARROLLO
1. A continuación se muestra el comando para listar las imágenes de Docker actualmente disponibles en nuestro equipo local, recuerda que el comando se ejecuta en una terminal o consola de comandos:

```
$ docker images
```
Solo tendremos la imagen de hello-world por que es la que trae docker por default.
```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              fce289e99eb9        4 months ago        1.84kB

```

2. Las imágenes de Docker se pueden buscar en el sitio https://hub.docker.com o dentro de nuestra consola podemos buscarla con el siguiente comando.

```
$ docker search "Nombre de imagen"
```

Busquemos la imagen para mariadb.
```
$ docker search mariadb
```
```
NAME       DESCRIPTION        STARS         OFFICIAL        AUTOMATED
mariadb    MariaDB is a....   2817          [OK]            [OK]     

bitnami
/mariadb   Bitnami MariaDB    96            [OK]            [OK]
linuxserver
/mariadb   A Mariadb          72            [OK]            [OK]           
```
3. Para obtener o descargar la imagen, ejecuta el siguiente comando que se ejecutará en una terminal o consola de comandos.

`Recuerda` que la imagen se descarga según su nombre

```
$ docker pull mariadb
```
```
Using default tag: latest
latest: Pulling from library/mariadb
6abc03819f3e: Already exists
05731e63f211: Already exists
0bd67c50d6be: Already exists
ab62701212b1: Pull complete
b1f6f41348ef: Pull complete
3bdaf925d088: Pull complete
10ba8f10417b: Pull complete
3806bed5c691: Pull complete
ab3ed01426d2: Pull complete
335ab451bc27: Pull complete
e24ad9b92026: Pull complete
6f63a97f6b5c: Pull complete
0a5b8607a3ac: Pull complete
Digest: sha256:48f2bbe16e546469b92d2f9c70c684b514bf12f23aa4ad4f13b805ddcb21ca46
Status: Downloaded newer image for mariadb:latest
```
4. Ya que hemos descargado nuestra imagen de mongo, por lo tanto esta debe de aparecer cuando listamos nuestras imágenes

```
$ docker images
```
```
REPOSITORY    TAG         IMAGE ID       CREATED          SIZE
hello-world   latest      fce289e99eb9   4 months ago     1.84kB
mariadb       latest      56089178535f   7 days ago       349MB

```
5. Eliminemos nuestra imagen de hello-world a través del siguiente comando.

```
$ docker rmi hello-world -f
```
__Nota:__ Este ejemplo se realiza en 15 mins o menos.

**Recuerda** si el comando nos da un error de access denied solo escribe sudo al principio del comando.
