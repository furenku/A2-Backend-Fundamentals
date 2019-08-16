[<-- Regresar](..)

## Ejecutar un __query__ para leer filtrando los campos y los documentos de una colección

### Objetivo

- Que el alumno aprenda a usar el parámetro de condiciones para filtrar al hacer lecturas de documentos 

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo


El comando `find` recibe como argumentos dos objetos (formato JSON), y ambos son opcionales:

- **el primero**, conocido como el __query__, definirá las condiciones bajo las cuales filtraremos todos los documentos de una colección, recibiendo únicamente un subconjunto.

- **el segundo**, conocido como la __projection__, define cuáles de los campos (__fields__) de nuestros documentos aparecerán en nuestro resultado (después del filtrado de documentos  ).

> Si  quieres recibir todos los documentos, pero , únicamente filtrar los campos de cada documento. Puedes mandar un objeto vació como el primer argumento __query__

Ejemplo **sólo obtener el campo name**
```
db.users.find({}, {name: 1})
```

> Por __default__ siempre aparece el _id
> Similar a los argumentos del SELECT en SQL

Ejemplo **sólo obtener los documentos que cumplen condición: nombre = 'Brayan'** 
```
db.users.find({name: 'Brayan'})
```

#### Agregadores

Al comando `find()` también es posible encadenarle agregadores para limitar, ordenar, paginar, etc.

Pro ejemplo, para limitar la búsqueda a 2 documentos:

```
db.users.find().limit(2)
```

o para omitir los primeros 2

```
db.users.find().skip(2)
```

Estos también pueden encadenarses



Tiempo estimado de explicación: **10 min**





