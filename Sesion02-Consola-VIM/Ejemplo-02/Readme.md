#### Ejemplo 02
## Comandos relacionados con el sistema de archivos

### OBJETIVO
Conocer los comandos relacionados con el sistema de archivos.

#### REQUISITOS

1. Terminal.
1. Docker.

#### DESARROLLO
1. Lista los elementos de tu contenedor.
```
$ ls
```

```
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```
2. Lista los elementos de tu contenedor con detalle.

```
$ ls -lF
```
Aqui podemos obervar varios elementos como permisos, dia y tamaño.
```
drwxr-xr-x   2 root root 4096 May 15 14:07 bin/
drwxr-xr-x   2 root root 4096 Apr 24  2018 boot/
drwxr-xr-x   5 root root  360 Jun 11 18:06 dev/
drwxr-xr-x   1 root root 4096 Jun 11 18:06 etc/
drwxr-xr-x   2 root root 4096 Apr 24  2018 home/
drwxr-xr-x   8 root root 4096 May 23  2017 lib/
drwxr-xr-x   2 root root 4096 May 15 14:06 lib64/
drwxr-xr-x   2 root root 4096 May 15 14:06 media/
drwxr-xr-x   2 root root 4096 May 15 14:06 mnt/
drwxr-xr-x   2 root root 4096 May 15 14:06 opt/
dr-xr-xr-x 278 root root    0 Jun 11 18:06 proc/
drwx------   2 root root 4096 May 15 14:07 root/
drwxr-xr-x   1 root root 4096 May 15 21:20 run/
drwxr-xr-x   1 root root 4096 May 15 21:20 sbin/
drwxr-xr-x   2 root root 4096 May 15 14:06 srv/
dr-xr-xr-x  13 root root    0 Jun 11 18:06 sys/
drwxrwxrwt   2 root root 4096 May 15 14:07 tmp/
drwxr-xr-x   1 root root 4096 May 15 14:06 usr/
drwxr-xr-x   1 root root 4096 May 15 14:07 var/
```
3. Viaja a caulquiera de tus carpetas al hacer el comando pwd se vea reflejado tu ruta actual.

```
$ cd sys
$ pwd
```
```
/sys
```
3. Regresa a tu root y imprime tu ruta actual.
```
$ cd
```
```
/root
```
En este paso hemos accedido a nuestra root, dentro del root trabajaremos toda esta sesión.

4. Crearemos dos carpeta dentro de nuestro contenedor que será llamada Proyectos y Proyectos2.

```
$ mkdir Proyectos
$ mkdir Proyectos2
```
Enlista todas tus carpetas para asegurar que fue creada tus nuevas carpeta
```
$ ls -lF
```
```
drwxr-xr-x 2 root root 4096 Jun 11 18:37 Proyectos/
drwxr-xr-x 2 root root 4096 Jun 11 18:37 Proyectos2/
```
5.  Borra la carpeta  de Proyectos2.
```
$ rm -rf Proyectos2
```
Enlista todas tus carpetas para asegurar que fue eliminada la carpeta
```
drwxr-xr-x 2 root root 4096 Jun 11 18:37 Proyectos/
```
