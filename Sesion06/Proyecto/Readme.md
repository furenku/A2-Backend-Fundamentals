[`Backend con Python`](../../Readme.md) > [`Sesión 06`](../Readme.md) > Proyecto
## Definiendo una consulta de datos en una relación muchos a muchos con SQL

### OBJETIVO
- Realizar una consulta de datos a dos o más tablas para el proyecto BeduTravels
- Hacer uso de la instrucción JOIN

### REQUISITOS
1. Modelo de entidad-relación:

   ![Diagrama entidad-relación](assets/bedutravels-modelo-er.jpg)

1. Carpeta de repo actualizada
1. Usar la carpeta de trabajo `Sesion06/Proyecto`


### DESARROLLO
1. Mostrar la lista de todas las reservas realizadas incluyendo el nombre del origen, destino, fecha de salida, fecha de regreso y nombre de usuario.

   __Conectándose a la base de datos:__

    ```console
    Sesion06/Proyecto $ docker exec -it -e LANG=C.UTF-8 servidorsql mysql -hlocalhost -uBeduTravels -pBeduTravels BeduTravels
    [...]
    MariaDB [BeduTravels]>
    ```

   __Realizando la consulta haciendo uso del mítico JOIN:__

   ```sql
   SELECT Lugar.nombre, Destino.nombre, fechaSalida, fechaRegreso, Usuario.nombre FROM Reserva JOIN Usuario ON Usuario.id=idUsuario JOIN Viaje ON idViaje=Viaje.id JOIN Lugar ON idOrigen=Lugar.id JOIN Lugar as Destino ON idDestino=Destino.id;
   +--------+-------------+-------------+--------------+--------+
   | nombre | nombre      | fechaSalida | fechaRegreso | nombre |
   +--------+-------------+-------------+--------------+--------+
   | CDMX   | Guadalajara | 2019-06-05  | 2019-06-12   | Daisy  |
   +--------+-------------+-------------+--------------+--------+
   1 row in set (0.000 sec)
   ```

   __Notas:__
   1. En apariencia es un proyecto muy corto, pero considerar que los alumnos tienen que realizar análisis y relacionar las tablas y construir las relaciones mediante JOIN's.
   1. Aunque aquí se espera la consulta final, en caso de ser necesario, una buena práctica es ir construyendo paso a paso la consulta partiendo de la tabla Reserva.

### POR SI ACASO
En la carpeta `sql/` existe los archivos que se pueden usar para restarurar la base de datos o las tablas, según sea el caso como se menciona a continuación.

  - `bedutravels.sql` Permite crear nuevamente la base de datos y el usuario de acceso en caso de ser necesario.
  - `tablas-inicial.sql` Permite colocar todas las tablas en el estado inicial del proyecto para poder ejecutar las consultas.
