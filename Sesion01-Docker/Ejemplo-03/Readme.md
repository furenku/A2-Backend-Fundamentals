##### Ejemplo 03
## Contenedores

### OBJETIVO
Aprender la administración general de los contenedores.

#### REQUISITOS
1. Docker.
1. Terminal.

### DESARROLLO
1. Ejecuta el siguiente comando para enlistar todos nuestros contenedores.
```
$ docker ps -a 
```
```
CONTAINER ID   IMAGE    COMMAND   CREATED     STATUS      PORTS      NAMES 

```
Como no tenemos ningun contenedor nos mandara resultados vacios. 

2. Ejecuta el siguiente comando para levantar un contenedor sobre la imagen de mongo.
```
$ docker run --name imagenMongo -d Mongo  
```
```
ddbb773f38c886bb2b4e6df863ffb72e342867661c1882867b701cead07a2e00
```
Nos mandara una confirmación que ha sido creado el contenedor.

3. Enlistamos todos nuestros contenedores.
```
$ docker ps -a
```
```
CONTAINER ID    IMAGE     COMMAND                 CREATED             STATUS
ddbb773f38c8    mongo    "docker-entrypoint.s…"   25 seconds ago      Exited 20 seconds       
```
Como podemos observar nuestro contenedor esta en un estado de `exited`. Por lo tanto debemos volver a encenderlo.

4. Prenderemos nuestro contenedor. 
```
$ docker start ddbb773f38c8
```
```
ddbb773f38c8
```
En este paso ya hemos encendido nuevamente nuestro contenedor.

5. Acceder al contenedor.
```
$ docker exect -it ddbb773f38c8 mongo
```
En este paso lo que hacemos es ejecutar un comando a traves del contenedor.


__Nota:__ Este ejemplo se realiza en 5 mins o menos.