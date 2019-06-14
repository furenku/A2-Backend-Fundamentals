[`Backend Fundamentals`](../../Readme.md) > [`Sesión 05`](../Readme.md) > Ejemplo-01
## Obteniendo el modelo para una base de datos relacional

### OBJETIVO
Dados los requerimientos de un proyecto obtener un diagrama inicial del modelo de la bases de datos.

#### REQUISITOS
1. Descripción o requerimientos del proyecto, para este ejemplo se desarrollará el __Proyecto Biblioteca__.

   __Proyecto__: Biblioteca

   __Descipción__: En una biblioteca requiere de un sistema informático que pueda administrar el préstamo de libros a usuarios, cada libro tiene un título, editorial, número de páginas y un autores asociados.

   Para que un usuario pueda solicitar un préstamo, tiene primero que estar registrarse con los datos de nombre, apellidos, edad, género y dirección.

   Cuando un usuario esta registrado, puede tener en préstamo de 1 a 5 libros por un periodo máximo de 15 días.
   ***

#### DESARROLLO
1. Identificar los sustantivos en la descripción ya que son los mejores candidatos para convertirse en una tabla.

   __Proyecto__: Biblioteca

   __Descipción__: En una __biblioteca__ requiere de un __sistema informático__ que pueda administrar el __préstamo__ de __libros__ a __usuarios__, cada __libro__ tiene un `título`, `editorial`, `número de páginas` y `autores` asociados.

   Para que un __usuario__ pueda solicitar un __préstamo__, tiene primero que registrarse con los datos de `nombre`, `apellidos`, `edad`, `género` y `dirección`.

   Cuando un __usuario__ esta registrado, puede tener en __préstamo__ de 1 a 5 __libros__ por un periodo máximo de 15 `días`.
   ***

1. Definir una tabla por cada sustantivo encontrado.

   __Resultado__

   ![Lista de tablas definidas](assets/modelo-01.jpg)
   ***

1. Descartar las tablas que no almacenarán una única colección de datos, sólo dejar nombre de tablas en singular y remplazar caracteres con acentuación, tildes o diéresis.

   __Resultado__

   ![Seleccionar tablas](assets/modelo-02.jpg)
   ***

1. Agregar atributos a cada una de las tablas, en base a los sustantivos restantes, en caso de tener tablas sin sustantivos que agregar, entonces deducir los atributos que mejor representen a esa tabla y complemente a las demás. Considerar que los nombres de los atributos van en minúsculas y tampoco se deben incluir caracteres del idioma español.

   __Modelo final con tablas y atributos__

   ![Modelo de tablas](biblioteca-modelo-final.jpg)
   ***
