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

Busquemos la imagen para mongo.
```
$ docker search mongo
```
```
NAME                                DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
mongo                               MongoDB document databases provide high avai…   5876                [OK]                
mongo-express                       Web-based MongoDB admin interface, written w…   446                 [OK]                
tutum/mongodb                       MongoDB Docker image – listens in port 27017…   226                                     [OK]
mvertes/alpine-mongo                light MongoDB container                         98                                      [OK]
bitnami/mongodb                     Bitnami MongoDB Docker Image                    84                                      [OK]
mongoclient/mongoclient             Official docker image for Mongoclient, featu…   67                                      [OK]
mongooseim/mongooseim               Small docker image for MongooseIM - robust a…   17                                      

```
3. Para obtener o descargar la imagen, ejecuta el siguiente comando que se ejecutará en una terminal o consola de comandos.

`Recuerda` que la imagen se descarga según su nombre

```
$ docker pull mongo
```
```
Using default tag: latest
latest: Pulling from library/mongo
9ff7e2e5f967: Pull complete 
59856638ac9f: Pull complete 
6f317d6d954b: Pull complete 
a9dde5e2a643: Pull complete 
815c6aedc001: Pull complete 
29aec2f2353d: Pull complete 
08bcfe00e506: Pull complete 
Digest: sha256:6b8cefbef0e6c4f3d35ffbf546e77e18c9737b393de6f96dbf75e6ba0185d876
Status: Downloaded newer image for mongo:latest

```
4. Ya que hemos descargado nuestra imagen de mongo, por lo tanto esta debe de aparecer cuando listamos nuestras imágenes

```
$ docker images
```
```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              fce289e99eb9        4 months ago        1.84kB
mongo               latest              5976dac61f4f        21 hours ago        411MB
```
5. Elimimenos nuestra imagen de hello-world a traves del siguiente comando.

```
$ docker rmi hello-world -f
```
__Nota:__ Este ejemplo se realiza en 15 mins o menos.

`Recuerda` si el comando nos da un error de access denied solo escribe sudo al principio del comando.

[Anterior](Ejemplo-01) - [Siguiente](Reto-01)  