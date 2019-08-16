[<-- Regresar](..)

## Agregar un documento con un campo que haga referencia a otro documento

### Objetivo

- Aprender a hacer referencias a otras colecciones

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)
- Tener dos colecciones con documentos

### Desarrollo

1. Haz un query de lectura en una colección

```
db.users.find()
```

2. Obtener el valor de _id de uno de los documentos

3. Agregar un nuevo documento a otra base de datos donde haga referencia a este documento seleccionado

> Hay que usar la función ObjectId

```
db.tours.insert({
  title: 'Carnaval de Veracruz',
  particiapants: [ObjectId('ckjh231kjjh123')]
})
```

tiempo estimado **5 min**