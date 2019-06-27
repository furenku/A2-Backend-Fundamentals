##### Ejemplo 04
## Sincronización contenedor carpetas.

### OBJETIVO
1. Aprender a montar carpetas dentro de tu contenedor.

#### REQUISITOS

1. Docker
1. Terminal.

### DESARROLLO
1. Crea una carpeta llamada recursos y dentro de ella un archivo para ello ejecuta los siguientes comandos.
```
$ cd
$ mkdir Recursos
$ cd Recursos
$ touch sometext.txt
```
Con el primer comando `cd` lo que hacemos es irnos a nuestra carpeta root, posteriormente con el comando `mkdir` estamos creando una carpeta y por el último el comando `cd Recursos` nos está moviendo a la carpeta que hemos creado.

2. Dentro de nuestra carpeta creada vamos a ejecutar el siguiente comando. 
```
$ docker run --name beduPrueba -it -v "$(pwd)":/root/recursos ubuntu
```
Aquí lo que hacemos con la bandera de `-v` montar un volumen en este caso una carpeta. 

3. Dentro de tu contenedor ingresa a tu root.
```
# cd
```
1. Enlista todas tus carpetas dentro de root.
```
# ls
```
```
recursos
```
1. Accede a la carpeta y enlista la carpeta creada.
```
# cd recursos
# ls
```
```
sometext.txt
```
Todo estos resultados deberán de ser reflejados dentro de tu contenedor.

__Nota:__ Este ejemplo se realiza en 15 mins o menos.

**Recuerda** si el comando nos da un error de access denied solo escribe sudo al principio del comando.


