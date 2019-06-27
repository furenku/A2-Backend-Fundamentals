#### Ejemplo 03
## Comandos relacionados con el sistema de archivos

### OBJETIVO
Conocer los comandos relacionados con el sistema de archivos.

#### REQUISITOS

1. Terminal.
1. Docker.

#### DESARROLLO
1. Dentro de tu carpeta Proyectos crearás dos documentos un que será un index.html y otro un index.js
``` 
$ cd Proyectos
$ touch index.html index.js
$ ls -lF
``` 
``` 
-rw-r--r-- 1 root root 0 Jun 11 18:57 index.html
-rw-r--r-- 1 root root 0 Jun 11 18:57 index.js
``` 

2. Dentro de nuestro archivo js que hicimos vamos a insertar una línea de código con el comando echo 
```
$ echo “console.log(‘Hola mundo’)” > index.js
```
Esta línea de comando lo que hará será sobrescribir nuestro archivo completamente e insertará el valor que le indicamos, si queremos evitar que nos sobreescriba el archivo podemos realizar el siguiente comando y esto nos insertará nuestra línea hasta el final del archivo
```
$ echo “console.log(‘Hola mundo 2’)” >> index.js
```
3. Crea una carpeta donde alojaremos nuestro javascript.
```
$ mkdir src
```
Comprueba que se haya realizado la carpeta.
```
$ ls -lF
```
```
-rw-r--r-- 1 root root    0 Jun 11 18:57 index.html
-rw-r--r-- 1 root root    0 Jun 11 18:57 index.js
drwxr-xr-x 2 root root 4096 Jun 11 19:08 src/
```
4. Mueve tu archivo js por medio del comando mv
```
$ mv index.js src/
```
``` 
$ ls -lF src/
```
```
-rw-r--r-- 1 root root    0 Jun 11 18:57 index.js
```
5. Muestra lo que contiene este archivo
```
$ more index.js
```
```
console.log(‘Hola mundo’)
console.log(‘Hola mundo 2’)
```
