[<-- Regresar](..)

## Borrar, según cierta condición, uno o varios documentos de una colección

### Objetivo

- Que el alumno aprenda a usar el comando update para modificar documentos en una colección

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

El comando `update` recibe como argumentos **dos** objetos (formato JSON), y ambos son opcionales:

- **el primero**, conocido como el __query__, definirá las condiciones bajo las cuales se modificará(n) el(los) documento(s) de una colección

- **el segundo**, conocido como la __options__, define las diferentes opciones de la modificación. Por ejemplo, `multi` para modificar sólo el primero o el último, `upsert` en caso de no encontrar documento que cumpla las condiciones del __query__, insertará.


> funciona muy parecido a `update()`


```
db.user.remove({name: 'Bruno'})
```


Tiempo estimado de explicación: **5 min**





