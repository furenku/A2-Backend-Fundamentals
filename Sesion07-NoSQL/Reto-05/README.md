[<-- Regresar](..)

## Modifica un documento de tu colección

### Objetivo

- Practicar la modificacion de documentos

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

1. Agrega un nuevo campo a un documento que cumpla cierta condición

```
db.tours.update({tags: 'naturaleza'}, {$set: {peligro: true}})
```

2. Modifica el campo de un documento que cumpla cierta condición

```
db.tours.update({name: 'Paseo por la ciudad'}, {$set: {name: 'Paseo por el centro'}})
```

tiempo aproximado **5 min**