[<-- Regresar](..)

## Modificar, según cierta condición, uno o varios documentos de una colección

### Objetivo

- Que el alumno aprenda a usar el comando update para modificar documentos en una colección

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

El comando `update` recibe como argumentos **tres** objetos (formato JSON), y ambos son opcionales:

- **el primero**, conocido como el __query__, definirá las condiciones bajo las cuales se modificará(n) el(los) documento(s) de una colección

- **el segundo**, conocido como la __update__, define la operación de modificación

- **el tercero**, conocido como la __options__, define las diferentes opciones de la modificación. Por ejemplo, `multi` para modificar sólo el primero o el último, `upsert` en caso de no encontrar documento que cumpla las condiciones del __query__, insertará.


> Por default sólo modificará el **primer** elemento que encuentre. `multi` = true


#### Sin modificador substituye el documento completo

Este comando substituirá el documento donde `name` = Gonzalo y lo remplazará por completo

```
db.users.update({name: 'Gonzalo'}, {name: 'Sara', lastname: 'Connor'} )
```

> Olvidar poner el modificador puede causar graves pérdidas de datos

#### Modificador `$set`

Este comando modificará el campo `name` del documento donde `name` = Brayan y lo cambiará a Bruno

```
db.users.update({name: 'Brayan'}, {$set: {name: 'Bruno'}} )
```

#### Modificador `$push`

Sirve para agregar al final de un arreglo un nuevo campo

Este comando agregará al campo tipo arreglo `hobbies` un nuevo elemento

```
db.users.update({name: 'Xochitl'}, {$push: {hobbies: 'bailar'}} )
```

```
db.users.update({name: 'Xochitl'}, {$push: {hobbies: 'programar'}} )
```


Tiempo estimado de explicación: **5 min**





