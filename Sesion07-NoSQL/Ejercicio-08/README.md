[<-- Regresar](..)

## Ejecutar un __query__ para leer todos documentos de una colección

### Objetivo

Que el alumno aprenda a leer los documentos de una colección 

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

Se utiliza el método `find` para lectura de documentos de una colección

```
db.users.find()
```
o
```
db.users.find({})
```

> Este debe de mostrar el documento que recién insertamos

> Si no se le manda parámentros, regresa todos los documentos


```
{name: 'John', age: 25}
```

Puedes concatenar el método `pretty()` para una vista más amable

```
db.users.find({}).pretty()
```

Tiempo estimado de explicación: **5 min**
