[<-- Regresar](..)

## Averigua en la documentación de MongoDB cómo hacer un __query__ para introducir el documento que hace referencia, en el resultado (similar a un JOIN en SQL)

### Objetivo

- Aprender a buscar en la documentación de MongoDB
- Aprender a hacer queries tipo JOIN de SQL con MongoDB

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)
- Tener dos colecciones con documentos
- Tener un documento que haga referencia a otro documento de otra colección


### Desarrollo

1. Averigua en la documentación de MongoDB cómo hacer un __query__ para introducir el documento que hace referencia, en el resultado (similar a un JOIN en SQL)

```
db.users.aggregate([
   { $lookup: { 
      from: "tours",
      localField: "favTours",
      foreignField: "_id",
      as: "favToursDetail"
    } }
])
```


tiempo aproximado **15 min**