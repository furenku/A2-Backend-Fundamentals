[`Backend Fundamentals`](../../Readme.md) > [`Sesión 05`](../Readme.md) > Reto-03
## Definiendo una relación muchos a muchos

### OBJETIVO
Dados los requerimientos de un proyecto y sus tablas obtener un diagrama entidad-relación normalizado de la bases de datos para el proyecto BeduTravels.

#### REQUISITOS
1. Descripción del proyecto:

   Un cliente requiere de una aplicación web que permita a un usuario buscar un destino para agendar un viaje.

   El usuario deberá poder ver una lista de los lugares más populares, así como poder ordenar o filtrar los destinos por costo.

   El usuario deberá poder ver la información del viaje y contar con la opción de poder elegir el viaje, así como ajustar algunas otras opciones del mismo.

1. Modelo de entidad-relación actual:

   ![Diagrama entidad-relación actual](assets/modelo-entidad-relacion-inicial.jpg)


#### DESARROLLO
1. Encontrar la __cardinalidad__ entre la tabla __Usuario__ y la tabla __Viaje__ y definir el tipo de relación entre ambas tablas.

   __Pregunta__

   ¿Cuál es el tipo de relación entra la tabla __Usuario__ y la tabla __Viaje__?

   ![Pregunta](assets/relaciones-muchos-muchos-01.jpg)

   __Respuesta__

   Es una relación de ??? a ??? y en la notación __pata de gallo__ se representa de la siguiente forma:

   ![Diagrama relación con muchos a muchos](assets/relaciones-muchos-muchos-02.jpg)
   ***

1. Aplica el proceso de  __normalización__ a la relación muchos a muchos obtenido anteriormente eliminando la relación muchos a muchos y agregando una tercer tabla:

   ![Diagrama agregando tercer tabla](assets/relaciones-muchos-muchos-03.jpg)

   La tercer tabla se construye de la siguiente forma:
   1. El nombre de la tabla en este caso tiene un nombre peculiar que se conoce cono __Reserva__
   1. La llave primaria de esta tabla está formada por dos id, uno por cada tabla y es la cantidad mínima de atributos que deberá contener esta tabla.
   1. Tenemos cuando menos el atributo __fecha__, que es la fecha en que se realiza la reserva.
   ***

1. Definir las relaciones entre la tercer tabla y las tablas iniciales, además también se mueven los atributos de __fechaSalida__, __fechaRegreso__ y __costo__ desde la tabla de __Viaje__.

   ![Diagrama agregando relaciones](assets/relaciones-muchos-muchos-04.jpg)
   ***

1. El paso final es más de estrategia y consiste en re acomodar el diagrama, se recomienda colocar a la izquierda la tablas con cardinalidades fijas y a la derecha las tablas con cardinalidades muchos.

   ![Diagrama modelo entidad-relación final](modelo-entidad-relacion.jpg)
   ***
