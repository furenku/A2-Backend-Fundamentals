[<-- Regresar](..)

## Agrega otra colección e inserta un documento que tenga una campo que haga referencia al ObjectId de la primera colección

### Objetivo

- Aprender a buscar en la documentación de MongoDB
- Aprender a hacer queries tipo JOIN de SQL con MongoDB

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)
- Tener dos colecciones con documentos


### Desarrollo

1. Agrega un nuevo documento que haga referencia al documento de otra colección 

(haz primero un find de tours para obtener una _id)

```
db.user.insert({
  name: 'Octavio',
  favTours: ObjectId(<_id>)
})
```

tiempo aproximado **5 min**