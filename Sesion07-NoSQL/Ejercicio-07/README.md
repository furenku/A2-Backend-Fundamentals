[<-- Regresar](..)

## Crear una nueva colección insertando un nuevo documento

### Objetivo

Que el alumno aprenda a crear una colección insertando un documento

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

Como mencionamos previamente, no es necesario definir cómo está estructurada una colección para empezar a insertar en ella. Ni siquiera es necesario crearla, **sólo con insertar un documento, se crea**

Se usa el comando `insert` para introducir un nuevo documento a una colección y recibe como parametros un documento. Recuerda que se usa la sintaxis de JSON para esto.

> Es el __standard__ nombrar las colecciones con su nombre en plural en inglés

**USERS**

```
db.users.insert({name: 'Juan', age: 25})
```

```
db.users.insert({name: 'Xochitl', age: 27})
```

```
db.users.insert({name: 'Brayan', age: 40})
```

```
db.users.insert({name: 'Gonzalo', age: 55})
```


> Como puedes ver, la sintaxis de MongoDB es idéntica a la de Javascript

> Accesamos a los subdocumentos con `.` y mandamos paramentros dentro de parentesis `(...)` como en las funciones de JS

> Puedes revisar las colecciones que tiene una base de datos corriendo este comando

```
db.getCollectionNames()
```

Tiempo estimado de explicación: **10 min**
