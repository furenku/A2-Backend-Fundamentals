[`Backend Fundamentals`](../Readme.md) > [`Sesión 06`](../Readme.md) > Ejemplo-02
## Creando tablas con SQL en MariaDB

### OBJETIVOS
- Conocer la instrucción para definir tablas en SQL con MariaDB
- Conocer los tipos de datos en SQL para definir los atributos de las tablas

#### REQUISITOS
1. Contar con la base de datos Biblioteca inicializada y con los datos de conexión:

   - __Host:__ localhost
   - __User:__ Biblioteca
   - __Password:__ Biblioteca
   - __Base de datos:__ Biblioteca

1. Carpeta de repo actualizada
1. Usar la carpeta de trabajo `Sesion06/Ejemplo-02`
1. Revisar los tipos de datos que se pueden manejar para los atributos en una tabla de MySQL / MariaDB

   Lista de los tipos de datos que es posible utilisar con MariaDB, sin embargo es bueno mirar en las páginas oficales de MariaDB o MySQL para consultar si un tipo de dato es soportado, así como las opciones y restricciones que tiene.

   ![Lista de tipos de datos](assets/tipos-de-datos.png)

   __Referencias:__
   1. https://mariadb.com/kb/en/library/data-types/
   1. https://dev.mysql.com/doc/refman/8.0/en/data-types.html
   1. https://disenowebakus.net/tipos-de-datos-mysql.php
   1. https://www.anerbarrena.com/tipos-dato-mysql-5024/

1. Contar con la definición de la tabla o tablas a crear, en este caso la tabla Libro:

   ![Tabla Libro](assets/tabla-libro.jpg)


### DESARROLLO
1. La creación de tablas en SQL se realiza por medio de la instrucción __CREATE TABLE__ y a continuación se muestra la forma de usarla para crear la tabla __Libro__ en la base de datos __Bibllioteca__:

   __Realizando conexión al servidor haciendo uso de los contenedores:__

   ```console
   Sesion06/Ejemplo-02 $ docker exec -it pythonsql mysql -hlocalhost -uBiblioteca -p Biblioteca
   Enter password:
   Welcome to the MariaDB monitor.  Commands end with ; or \g.
   Your MariaDB connection id is 13
   Server version: 10.3.15-MariaDB-1:10.3.15+maria~bionic mariadb.org binary distribution

   Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

   MariaDB [Biblioteca]>
   ```

   __Creando la tabla Libro e imprimiendo la descripción de la tabla:__
   ```sql
   MariaDB [Biblioteca]> CREATE TABLE Libro (id INTEGER PRIMARY KEY AUTO_INCREMENT, titulo VARCHAR(128), editorial VARCHAR(80), numPag INT, autores INT);
   Query OK, 0 rows affected (0.046 sec)

   MariaDB [Biblioteca]> DESCRIBE Libro;
   +-----------+--------------+------+-----+---------+----------------+
   | Field     | Type         | Null | Key | Default | Extra          |
   +-----------+--------------+------+-----+---------+----------------+
   | id        | int(11)      | NO   | PRI | NULL    | auto_increment |
   | titulo    | varchar(128) | YES  |     | NULL    |                |
   | editorial | varchar(80)  | YES  |     | NULL    |                |
   | numPag    | int(11)      | YES  |     | NULL    |                |
   | autores   | int(11)      | YES  |     | NULL    |                |
   +-----------+--------------+------+-----+---------+----------------+
   5 rows in set (0.001 sec)

   MariaDB [Biblioteca]>
   ```

   __Referencias:__
   1. https://mariadb.com/kb/en/library/create-table
   ***

### POR SI ACASO
1. La base de datos se borró o no se creó adecuadamente se puede iniciarlizar la base de datos trás ejecutar el siguiente comando:

   ```console
   Sesion06/Ejemplo-02 $ docker exec -i pythonsql mysql -hlocalhost -uroot -ppythonsql < sql/biblioteca.sql
   ```

1. Si la tabla __Libro__ no se creó por alguna razón o se ha creado de forma erronea, entonces se puede ejecutar el siguiente comando para restaurar la tabla __Libro__:

   ```console
   Sesion06/Ejemplo-02 $ docker exec -i pythonsql mysql -hlocalhost -uroot -ppythonsql < sql/tabla-libro.sql
   ```
