[`Backend con Python`](../../Readme.md) > [`Sesión 06`](../Readme.md) > Reto-04
## Definiendo y agregando datos a una relación muchos a muchos con SQL

### OBJETIVO
 - Dado un modelo entidad-relación crear las tablas y sus relaciones con SQL para el proyecto BeduTravels.
 - Dado un formulario web agregar los datos a las tablas con SQL para el proyecto BeduTravels.

#### REQUISITOS
1. Contar con la base de datos BeduTravels inicializada y con los datos de conexión:

   - __Host:__ localhost
   - __User:__ BeduTravels
   - __Password:__ BeduTravels
   - __Base de datos:__ BeduTravels

1. Modelo de entidad-relación:

   ![Diagrama entidad-relación](assets/bedutravels-modelo-er.jpg)

1. Carpeta de repo actualizada
1. Usar la carpeta de trabajo `Sesion06/Reto-04`


#### DESARROLLO
1. Crea la tabla __Lugar__ usando el archivo `sql/tabla-lugar.sql`:

   ```console
   Sesion06/Reto-04 $ docker exec -i servidorsql mysql -hlocalhost -uBeduTravels -pBeduTravels BeduTravels < sql/tabla-lugar.sql

   Sesion06/Reto-04 $
   ```
   Si no hay mensajes de error, entonces el comando se ha ejecutado con éxito.

1. Crear las tablas __Viaje__ y __Reserva__:

   __Conectándose a la base de datos:__

    ```console
    Sesion06/Reto-04 $ docker exec -it -e LANG=C.UTF-8 servidorsql mysql -hlocalhost -uBeduTravels -pBeduTravels BeduTravels
    [...]
    MariaDB [BeduTravels]>
    ```

   __Creando la tabla Viaje:__

   ```sql
   CREATE TABLE Viaje (id INT PRIMARY KEY AUTO_INCREMENT, idOrigen INT NOT NULL, idDestino INT NOT NULL);
   Query OK, 0 rows affected (0.041 sec)
   ```

   __Creando la tabla Reserva:__

   ```sql
   CREATE TABLE Reserva (idUsuario INT NOT NULL, idViaje INT NOT NULL, fecha DATE, fechaSalida Date, fechaRegreso DATE, PRIMARY KEY (idUsuario, idViaje));
   Query OK, 0 rows affected (0.036 sec)
   ```

   __Validando la creación de las tablas:__

   ```sql
   DESCRIBE Viaje;
   +-----------+---------+------+-----+---------+----------------+
   | Field     | Type    | Null | Key | Default | Extra          |
   +-----------+---------+------+-----+---------+----------------+
   | id        | int(11) | NO   | PRI | NULL    | auto_increment |
   | idOrigen  | int(11) | NO   |     | NULL    |                |
   | idDestino | int(11) | NO   |     | NULL    |                |
   +-----------+---------+------+-----+---------+----------------+
   3 rows in set (0.001 sec)

   DESCRIBE Reserva;
   +--------------+---------+------+-----+---------+-------+
   | Field        | Type    | Null | Key | Default | Extra |
   +--------------+---------+------+-----+---------+-------+
   | idUsuario    | int(11) | NO   | PRI | NULL    |       |
   | idViaje      | int(11) | NO   | PRI | NULL    |       |
   | fecha        | date    | YES  |     | NULL    |       |
   | fechaSalida  | date    | YES  |     | NULL    |       |
   | fechaRegreso | date    | YES  |     | NULL    |       |
   +--------------+---------+------+-----+---------+-------+
   5 rows in set (0.001 sec)
   ```
   ***

1. Agregar los datos del siguiente formulario a las tablas __Viaje__ y __Reserva__:

   __Fomulario:__

   ![Fomulario](assets/nuevo-viaje.jpg)

   __Agregando datos a la tabla Viaje:__

   ```sql
   INSERT INTO Viaje VALUES (null, 1, 3);
   Query OK, 1 row affected (0.001 sec)
   ```

   __Agregando datos a la tabla Reserva:__

   ```sql
   INSERT INTO Reserva VALUES (3, 1, "2019-06-05", "2019-06-05", "2019-06-12");
   Query OK, 1 row affected (0.001 sec)
   ```

   __Validando resultados:__

   ```sql
   SELECT * FROM Viaje;
   +----+----------+-----------+
   | id | idOrigen | idDestino |
   +----+----------+-----------+
   |  1 |        1 |         3 |
   +----+----------+-----------+
   1 row in set (0.000 sec)

   SELECT * FROM Reserva;
   +-----------+---------+------------+-------------+--------------+
   | idUsuario | idViaje | fecha      | fechaSalida | fechaRegreso |
   +-----------+---------+------------+-------------+--------------+
   |         3 |       1 | 2019-06-05 | 2019-06-05  | 2019-06-12   |
   +-----------+---------+------------+-------------+--------------+
   1 row in set (0.000 sec)
   ```

### POR SI ACASO
En la carpeta `sql/` existe los archivos que se pueden usar para restarurar la base de datos o las tablas, según sea el caso como se menciona a continuación.

  - `bedutravels.sql` Permite crear nuevamente la base de datos y el usuario de acceso en caso de ser necesario.
  - `tabla-lugar.sql` Permite colocar la tabla Lugar a su estado inicial
  - `tabla-usuario.sql` Permite colocar la tabla Usuario a su estado inicial
  - `tablas-final.sql` Permite colocar todas las tablas en el estado final del reto para poder continuar.
