[<-- Regresar](..)

## Insertar un nuevo documento con arreglos y objetos

### Objetivo

Que el alumno aprenda que es posible insertar objetos complejos (arreglos y JSON) dentro de los campos de un documento de una colección

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

Habíamos mencionado que MongoDB como una base de datos NoSQL de tipo Document Database tenía la capacidad de guardar elementos complejos (no primitivos), como Objetos y Arreglos arreglos en los campos. Veámoslo

> Se puede presionar `Enter` para dar un salto de línea y mejorar la visibilidad del comando que correremos. Solo se ejecutará cuando todos los paréntesis y llaves estén balanceados (cado uno abre y cierra)

**TOURS**

```js
db.tours.insert({
  title: 'Escalada en Peña de Bernal',
  // Objeto en formato JSON
  startLocation: {
    latitude: 19.22,
    longitude: -99.06 
  }
  duration: 10,
  // Arreglo de Objetos
  itinerary: [
    {
      title: 'Desayuno',
      time: '2019-03-23T09:00:00'
    },
    {
      title: 'Preparación de equipo',
      time: '2019-03-23T10:00:00'
    },
    {
      title: 'Inicio de ascenso',
      time: '2019-03-23T11:00:00'
    }
  ]
})
```

Vuelve a correr el comando de lectura y luego prueba encadenándole el método `pretty()` para verificar.

Tiempo estimado de explicación: **10 min**
