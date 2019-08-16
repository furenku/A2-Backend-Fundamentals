[<-- Regresar](..)

## Insertar un nuevo documento con un campo con un subdocumento

### Objetivo

Que el alumno aprenda que es posible insertar objetos como subdocumentos dentro de los campos de un documento de una colección

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

Así como se pueden guardar arreglos, también se pueden guardar subdocumentos en forma de objetos JS

> Se puede presionar `Enter` para dar un salto de línea y mejorar la visibilidad del comando que correremos. Solo se ejecutará cuando todos las llaves estén balanceados (cado una abre y cierra)

**TOURS**

```js
db.tours.insert({
  title: 'Visita a sitio Arqueológico',
  startLocation: {
    latitude: -12.123123,
    longitude: 50.123123;
  }
})

db.tours.insert({
  title: 'Paseo por los canales de Xochimilco',
  startLocation: {
    latitude: 24.123123,
    longitude: 90.12903;
  }
})
```

Tiempo estimado de explicación: **10 min**
