[`Backend Fundamentals`](../../Readme.md) > [`Sesión 05`](../Readme.md) > Reto-01
## Obteniendo el modelo para una base de datos relacional

### OBJETIVO
Dados los requerimientos del proyecto __BeduTravels__ obtener un diagrama inicial del modelo de la bases de datos.

#### REQUISITOS
1. Descripción del proyecto __BeduTravels__ proporcionada por el cliente:

   __Proyecto__: BeduTravels

   __Descripción__: Un cliente requiere de una aplicación web que permita a un usuario buscar un destino para agendar un viaje.

   El usuario deberá poder ver una lista de los lugares más populares, así como poder ordenar o filtrar los destinos por costo.

   El usuario deberá poder ver la información del viaje y contar con la opción de poder elegir el viaje, así como ajustar algunas otras opciones del mismo.
   ***

#### DESARROLLO
1. Identifica y marca los sustantivos en la descripción ya que son los mejores candidatos para convertirse en una tabla.

   __Proyecto__: BeduTravels

   __Descipción__: Un cliente requiere de una aplicación web que permita a un usuario buscar un destino para agendar un viaje.

   El usuario deberá poder ver una lista de los lugares más populares, así como poder ordenar o filtrar los destinos por `costo`.

   El usuario deberá poder ver la `información` del viaje y contar con la opción de poder elegir el viaje, así como ajustar algunas otras `opciones` del mismo.

   __Nota:__ Para marcar cada sustantivo, se puede usar la notación Markdown para negrillas, lo que se realiza encerrando la palabra entre dobles guiones bajos, ej. __negrilla__.
   ***

1. Definir una tabla por cada sustantivo encontrado.

   __Resultado__

   ![Diagrama o lista de tablas obtenidas](assets/modelo-01.jpg)

   __Nota:__ Se puede hacer una diagrama a mano en papel o usando herramientas de diseño o diagramación como http://draw.io, también se puede hacer una lista de texto con notación Markdown, ej.
   - TablaA
   - TablaB
   - ...
   ***

1. Descartar las tablas que no almacenarán una única colección de datos, sólo dejar nombre de tablas en singular y remplazar caracteres con acentuación, tildes o diéresis.

   __Resultado__

   ![Diagrama o lista de tablas seleccionadas](assets/modelo-02.jpg)

   __Nota:__ De tu lista de tablas anterior, busca la manera de resaltar las tablas seleccionadas, si estás usando texto con Markdown puedes tachar un texto encerrandolo entre dobles tildes, ej.
   - TablaA
   - ~~TablaB~~
   - TablaC
   - ...
   ***

1. Agregar atributos a cada una de las tablas, en base a los sustantivos restantes, en caso de tener tablas sin sustantivos que agregar, entonces deducir los atributos que mejor representen a esa tabla y complemente a las demás. Considerar que los nombres de los atributos van en minúsculas y tampoco se deben incluir caracteres del idioma español.

   __Modelo final con tablas y atributos__

   ![Diagrama final con tablas y atributos](bedutravels-modelo-final.jpg)

   __Nota:__ Para este paso es muy recomendable ya crear un diagrama ya que por convención es la manera en que se representa el modelo de una base de datos y más adelante se utilizará para representar las relaciones entre tablas.
   ***
