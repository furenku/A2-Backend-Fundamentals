# NoSQL y MongoDB

## OBJETIVOS

Que el alumno comprenda los beneficios y desventajas de una base de datos no estructurada

Que el alumno instale y ejecute comandos de MongoDB

## Requerimientos

Terminal de Linux

## DESARROLLO

En sus inicios el prefijo "No" significó negación, pero pronto evolucionó a "Not Only". Por lo tanto, con las bases de datos NoSQL podemos definir una base de datos con una estructura fija o hacerla relacional... o no.

### SQL vs NoSQL

- **Simplicidad de diseño**

Al no requerir un esquema que limite el contenido de nuestras tablas o colecciones, es posible empezar simple e ir evolicionando  (sin tener que copir, borrar, volver a crear) poco a poco nuestra arquitectura de datos. Ideal para un MVP y metodología ágiles 

- **Esquemas dinámicos**

Las bases de datos relacionales requieren que se defina un esquema con tipos de datos para cada tabla antes de empezar a ingresar registros, las bases de datos NoSQL **no**.

La manera en que se desarrolla software ha cambiado mucho desde que se desarrollaron las bases de datos SQL. Ahora, no se tienen requerimientos perfectamente delimitados y etapas largas de desarrollo (años), más bien se tienen requerimientos básicos y ciclos cortos, por lo tanto agilidad para cambiarlos dependiento de cómo vayan evolucionando.

La flexibilidad es arma de doble filo: por un lado puede permitir que nuestra arquitectura de datos evolucione o no sea necesaria, pero por otro lado puede llegar a ser dificil de mantener (Hay maneras de poner estructura via esquemas, pero es opcional). Se podría decir que se sacrifica la **consistencia** en pro de la velocidad de desarrollo y la flexibilidad de evolución, pero en realidad esa consistencia se obtiene eventualmente en otras capas de la arquitectura (Ej. utilizando Mongoose) 

- **Capacidad de guardar no sólo tipos de datos simples (string, int, date, etc), sino también datos complejos (arreglos, objetos, funciones, grafos)**

Para guardar una relación `uno-muchos` ya no es necesario crear una tabla relación, como en SQL. Las bases de datos NoSQL permiten guardar arreglos, simplificando así los queries y evitando los "JOIN hells". También es posible guardar objetos JSON y/o funciones de Javascript.

- **Escalamiento horizontal (clusters)**

A diferencia de las principales bases de datos SQL, que requieren escalamiento vertical (más procesamiento, más almacenamiento en un mismo servidor o configuraciónes complejas de Sistemas Distrubuidos), algunas bases de datos NoSQL están diseñadas para automáticamente multiplicarse en distintos servidores e interconectarse, a esto se le llama __Auto-shardiing__. Esto permite que el poder de procesamiento pueda fácilmente expandirse sin necesidad de un nuevo diseño.

- **La mayoría son Open Source**

Permite así que una comunidad afín tenga la capacidad de colaborar y verificar el desarrollo de estas tecnologías.

- **Ideales para la Programación Orientada a Objetos**

### Tipos de bases de datos SQL

- **Document databases** Pares de llaves (__key__) con estructuras de datos complejos: **Documentos**. Pueden ser datos simples, arreglos o incluso documentos anidados. Ej. **MongoDB**, CouchDB, ElasticSearch

- **Graph stores** Se usan para guardar datos de redes interconectadas, por ejemplo: conexiones de redes sociales, mapas, información organizada. Ej. AllegroGraph, Giraph, Neo4j

- **Key-value** Son las más simples de las bases de datos NoSQL. Similiarmente a un diccionario, guardan datos en pares de llaves (__keys__) y sus valores primitivos (__values__). Ej. Redis, Ignite, OrientDB

- **Wide-column stores** tienen la capacidad de hacer consultas (__queries__) sobre grandes cantidades de datos. Se utilizan para ciencias de datos. Ej. Cassandra, DynamoDB, Druid

### MongoDB

La más popular de las bases de datos NoSQL es MongoDB y es la que usaremos en el curso. Escogimos esta base de datos por su amplia documentación, por su activa comunidad y porque ocupa la misma sintaxis que Javascript para realizar consultas.

[Ejemplo 1: Instalación de MongoDB](./Ejemplo-01/)

[Ejemplo 2: Crea carpeta para almacenar bases de datos](./Ejemplo-02/)

#### Comparación de terminos entre MariaSQL y MongoDB

```
TABLE = COLLECTION

ROW = DOCUMENT

COLUMN = FIELD

JOIN = $lookup o embedded docuemnts
```

> [Aquí](https://docs.mongodb.com/manual/reference/sql-comparison/) puedes leer más sobre esto

#### Levandar ambiente de desarrollo

[Ejemplo 3: Levanta el servicio o __deamon__ de MongoDB](./Ejemplo-03/)

[Ejemplo 4: Abrir el cliente de MongoDB (CLI)](./Ejemplo-04/)

#### Comandos básicos

> Los siguientes ejemplos se correrán en el Cliente (CLI) de MongoDB 

[Ejemplo 5: Mostrar bases de datos existentes](./Ejemplo-05/)

[Ejemplo 6: Cambiar/Crear base de datos](./Ejemplo-06/)

[Ejemplo 7: Crear una nueva colección insertando un nuevo documento](./Ejemplo-07/)

[Ejemplo 8: Ejecutar un __query__ para leer todos documentos de una colección](./Ejemplo-8/)

[Ejemplo 9: Insertar un nuevo documento con un arreglo](./Ejemplo-09/)

[Ejemplo 10: Insertar un nuevo documento con un anidación de objetos](./Ejemplo-10/)


[Ejemplo 11: Ejecutar un __query__ para leer filtrando documentos de una colección](./Ejemplo-11/)

[Ejemplo 12: Modificar, según cierta condición, uno o varios documentos de una colección](./Ejemplo-12/)

[Ejemplo 13: Borrar, según cierta condición, uno o varios documentos de una colección](./Ejemplo-13/)

#### Retos

[Reto 1: Crea una nueva base de datos con una nueva colección e inserta un documento](./Reto-01)

[Reto 2: Agrega otra colección e inserta un documento que tenga una campo que haga referencia al ObjectId de la primera colección](./Reto-02)

[Reto 3: Averigua en la documentación de MongoDB cómo hacer un __query__ para introducir el documento que hace referencia, en el resultado (similar a un JOIN en SQL)](./Reto-03)
