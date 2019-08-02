[`Backend Fundamentals`](../Readme.md) > [`Sesión 06`](../Readme.md) > Reto-01
## Inicializando la base de datos en MariaDB

### OBJETIVO
- Inicializar un servidor de base de datos MariaDB haciendo uso de contenedores.

### REQUISITOS
1. Actualizar la carpeta del repositorio del módulo
1. Contar con Docker instalado
1. Abrir una terminal o consola de comandos y cambiarse a la carpeta de trabajo `Sesion06/Reto-01` y observar que exista el archivo `bedutravels.sql`
   ***

### DESARROLLO
1. (Opcional) Descargar la imagen de MariaDB versión 10.3 sólo si no se descargo en el Ejemplo-01, ya que una vez que se ha descargado una imagen de Docker no es necesario volver a hacerlo.

   __En una terminal ejecutar:__

   ```console
   Sesion06/Reto-01 $ docker pull mariadb:10.3
   10.3: Pulling from library/mariadb
   6abc03819f3e: Pull complete
   05731e63f211: Pull complete
   0bd67c50d6be: Pull complete
   ab62701212b1: Pull complete
   b1f6f41348ef: Pull complete
   3bdaf925d088: Pull complete
   10ba8f10417b: Pull complete
   3806bed5c691: Pull complete
   24aae6d0fc18: Pull complete
   9104943e23ec: Pull complete
   ae510462589d: Downloading  71.32MB/74.34MB
   ec23646ae61e: Download complete
   3c301b916a4e: Download complete
   Digest: sha256:db6e7bda67ea88efb00ba4ad82cb72dfee8938935914ae0948f6af523d398ca2
   Status: Downloaded newer image for mariadb:10.3

   Sesion06/Reto-01 $  
   ```
   ***

1. (Opcional) Debido a que un sólo servidor de base de datos MariaDB es capáz de manejar dos o más bases de datos no es necesario crear otro servidor sólo para la BD de Bedutravels, pero si deseas ejercitar el procedimiento puede iniciar un nuevo servidor de MariaDB 10.3 creando un contenedor Docker llamado __bedutravels__ (--name) y asignando una clave __pythonsql__ (MYSQL_ROOT_PASSWORD) al usuario __root__

   __Ejecutar comandos en terminal:__

   ```console
   Sesion06/Reto-01 $ docker run --name bedutravels -e MYSQL_ROOT_PASSWORD=pythonsql -d mariadb:10.3
   Unable to find image 'mariadb:10.3' locally
   10.3: Pulling from library/mariadb
   Digest: sha256:182b47379bf7...
   Status: Downloaded newer image for mariadb:10.3
   2744f516cda94c5b60...

   Sesion06/Reto-01 $
   ```

   Sería sugerible eliminar el contenedor para no ocupar recursos inecesarios con el siguiente comando:

   ```console
   Sesion06/Reto-01 $ docker rm bedutravels

   Sesion06/Reto-01 $
   ```
   ***

1. Para inicializar la base de datos se ejecuta el comando `mysql` pero desde el contenedor de Docker haciendo uso de los siguientes datos:

   - __Host:__ localhost
   - __User:__ root
   - __Pass:__ pythonsql

   ```console
   Sesion06/Reto-01 $ docker exec -i pythonsql mysql -hlocalhost -uroot -ppythonsql < bedutravels.sql

   Sesion06/Reto-01 $
   ```

   Como en apariencia no ha sucedido nada, en el siguiente paso se valida la correcta ejecución.
   ***

1. Para validar que la base de datos se haya inicializado de forma correcta se realiza una conexión a la base de datos BeduTravels usando los datos:

   - __Host:__ localhost
   - __User:__ BeduTravels
   - __Pass:__ BeduTravels
   - __Base de datos:__ BeduTravels

  ```console
  Sesion06/Reto-01 $ docker exec -it pythonsql mysql -hlocalhost -uBeduTravels -p BeduTravels
  Enter password:
  Welcome to the MariaDB monitor.  Commands end with ; or \g.
  Your MariaDB connection id is 9
  Server version: 10.3.15-MariaDB-1:10.3.15+maria~bionic mariadb.org binary distribution

  Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

  Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

  MariaDB [BeduTravels]> SHOW TABLES;
  Empty set (0.000 sec)

  MariaDB [BeduTravels]> EXIT;

  Sesion06/Reto-01 $
  ```
  ***

Si has llegado hasta este punto __FELICIDADES__, toma un respiro o ayuda a algún compañero que no lo haya logrado aún o tomate una selfi con tu primer contenedor de Docker ejecutando un servidor de base de datos MariaDB.
<span style="display:block;text-align:center;">![Felicidades](assets/felicidades.png)</span>
