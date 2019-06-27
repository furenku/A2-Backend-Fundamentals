##### Ejemplo 03
## Contenedores

### OBJETIVO
Aprender la administración general de los contenedores.

#### REQUISITOS
1. Docker.
1. Terminal.

### DESARROLLO
1. Ejecuta el siguiente comando para listar todos nuestros contenedores.
```
$ docker ps -a
```
```
CONTAINER ID   IMAGE    COMMAND   CREATED     STATUS      PORTS      NAMES

```
Como no tenemos ningún contenedor nos mandara resultados vacíos.

2. Ejecuta el siguiente comando para levantar un contenedor sobre la imagen de mariadb.
```
$ docker run --name bedu -e MYSQL_ROOT_PASSWORD=bedu -p 3306 -d mariadb 
```
Dentro de este comando estamos especificando el nombre a través de nuestra bandera `--name`, con la bandera `-e` estamos definiendo variables para nuestro contenedor, en este caso estamos definiendo como variable `MYSQL_ROOT_PASSWORD=bedu`, con nuestra bandera `-p` definimos un puerto y con el `-d` definimos que nuestro contenedor corra tras bambalinas.
```
5686a089fe02add18ac0be5156a2e4f8d1d9368d4b71b22bfd6c9d86e56a96e9
```
Nos ç una confirmación que ha sido creado el contenedor.

3. Enlistamos todos nuestros contenedores.
```
$ docker ps -a
```
```
CONTAINER ID    IMAGE     COMMAND      CREATED             STATUS
5686a089fe02    mariadb  "docker..."   22 seconds ago      Up 18 seconds  0.0.0.0:32770->3306/tcp   bedu
98cb206cfae4    ubuntu   "/bin/bash"   24 hours ago        Up 24 hours                                             
```
Como podemos observar nuestro contenedor está en un estado de `up` (Prendido).

5. Acceder al contenedor.
```
$ sudo docker exec -it 5686a089fe02 mysql -p
```
En este paso lo que hacemos es ejecutar un comando a través del contenedor. 
Igualmente a través de la bandera `-it` lo que hacemos realmente es agregar 2 banderas `-i` (mantener abierto el proceso incluso si no está conectado), `-t` (darle un salida) y para la bandera de `-p` es decirle que nuestro contenedor contiene una contraseña la cual la definimos en el momento de levantar el contenedor.

6. Detén el contenedor. 
Para detener los procesos de un contenedor ejecuta el siguiente comando.
```
$ docker stop "Nombre del contenedor o id"
```
7. Enciende tu contendor.  
Para encender nuevamente tu contenedor ejecuta el siguiente comando.
```
$ docker start "Nombre del contenedor o id"
```
## Recuerda

Si tienes cualquier duda al ejecutar una bandera investiga para que sirve a través de `--help`. 
**Ejemplo**:
```
$ docker run --help
```
```
Options:
     --add-host list                  Add a custom host-to-IP mapping (host:ip)
 -a, --attach list                    Attach to STDIN, STDOUT or STDERR
     --blkio-weight uint16            Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)
     --blkio-weight-device list       Block IO weight (relative device weight) (default [])
     --cap-add list                   Add Linux capabilities
     --cap-drop list                  Drop Linux capabilities
     --cgroup-parent string           Optional parent group for the container
     --cidfile string                 Write the container ID to the file
```
__Nota:__ Este ejemplo se realiza en 15 mins o menos.

