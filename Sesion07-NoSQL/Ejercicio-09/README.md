[<-- Regresar](..)

## Insertar un nuevo documento con un arreglo

Habíamos mencionado que MongoDB como una base de datos NoSQL de tipo Document Database tenía la capacidad de guardar arreglos en los campos. Veámoslo

> Se puede presionar `Enter` para dar un salto de línea y mejorar la visibilidad del comando que correremos. Solo se correrá cuando todos los paréntesis y llaves estén completos (abran y cierren)

```
db.users.insert({
  name: 'Andrea',
  age: 27,
  interests: ['hiking', 'art', 'party']
})
```

Vuelve a correr el comando de lectura para revisar cómo se guardo

> Como ves, los documentos dentro de una colección no tienen que tener los mismos datos. Esta flexibilidad es la que mencionamos antes