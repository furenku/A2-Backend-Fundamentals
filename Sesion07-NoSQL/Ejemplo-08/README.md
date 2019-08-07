[<-- Regresar](..)

## Insertar un nuevo documento con un compo con arreglo

### Objetivo

Que el alumno aprenda que es posible insertar arreglos dentro de los campos de un documento de una colección

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

Habíamos mencionado que MongoDB como una base de datos NoSQL de tipo Document Database tenía la capacidad de guardar elementos complejos (no primitivos), como Objetos y Arreglos arreglos en los campos. Veámoslo

> Se puede presionar `Enter` para dar un salto de línea y mejorar la visibilidad del comando que correremos. Solo se ejecutará cuando todos los paréntesis estén balanceados (cado uno abre y cierra)

**TOURS**

```js
db.tours.insert({
  title: 'Escalada en Peña de Bernal',
  // Objeto en formato JSON
  tags: ['escalada', 'hiking', 'naturaleza']
})

db.tours.insert({
  title: 'Playa Paraíso',
  // Objeto en formato JSON
  tags: ['playa', 'naturaleza']
})
```

Tiempo estimado de explicación: **10 min**
