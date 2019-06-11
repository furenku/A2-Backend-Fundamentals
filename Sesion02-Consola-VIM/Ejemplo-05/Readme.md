#### Ejemplo 05
## Introducción a VIM.

### OBJETIVO
Aprender los conocimientos básicos de VIM.  

#### REQUISITOS

1. Terminal.
1. Docker.

#### DESARROLLO
1. Dentro de tu contenedor ejecuta los siguientes comandos:
```
$ apt update
$ apt install vim 
```
1. Crear el archivo Readme.md
```
$ vim Readme.md
```
2. Insertar la siguiente línea de texto y regresar al modo comando. -----> “Hola mundo desde VIM”  
Presiona `a` para agregar texto.
```
Hola mundo desde VIM
```
3. Adicionar la siguiente línea de texto.
```
Hola mundo desde VIM.
Esta es la segunda línea.
```
4. Copiar la primer línea de texto y agregarla como 3er línea.  
Presiona `yy` para copiar una línea de texto y presiona `p` para pegarla. 
```
Hola mundo desde VIM.
Esta es la segunda línea.
Hola mundo desde VIM.
```

5. Guardar el archivo.  
Presiona `:w` para guardar el archivo.
6. Salir.  
Presiona `:q` para salir del archivo.
