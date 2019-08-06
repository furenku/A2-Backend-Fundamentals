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
    Sesion06/Proyecto $ ???
    [...]
    MariaDB [BeduTravels]>
    ```

   __Realizando la consulta haciendo uso del mítico JOIN:__

   ```sql
   SELECT ???

   +--------+-------------+-------------+--------------+--------+
   | nombre | nombre      | fechaSalida | fechaRegreso | nombre |
   +--------+-------------+-------------+--------------+--------+
   | CDMX   | Guadalajara | 2019-06-05  | 2019-06-12   | Daisy  |
   +--------+-------------+-------------+--------------+--------+
   1 row in set (0.000 sec)
   ```

   __Notas:__
   1. Aunque aquí se espera la consulta final, en caso de ser necesario, una buena práctica es ir construyendo paso a paso la consulta partiendo de la tabla Reserva.
