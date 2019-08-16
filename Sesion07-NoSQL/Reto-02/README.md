[<-- Regresar](..)

##  Agrega 3 documentos con campos con arreglos y objetos

### Objetivo

- Practicar la inserción de documentos con arreglos y subdocumentos

### Requerimientos

- Terminal de Comandos
- Estar dentro del CLI de MongoDB [véase Ejercicio 4](../Ejercicio-04/)

### Desarrollo

2. Ejecuta el comando insert para 3 nuevos documentos agregando campos que contengan arrelgos, subdocumentos(objetos) o su combinación

```js
db.tours.insert({
  title: 'Paseo por la ciudad',
  // Objeto en formato JSON
  tags: ['paseo', 'ciudad'],
  puntos: {
    salida: 'Afuera del hotel',
    comida: 'Fondita Mary',
    llegada 'Bar Rilito'
  }
})

db.tours.insert({
  title: 'Visita al Estadio Azteca',
  // Objeto en formato JSON
  tags: ['futbol', 'partido'],
  puntos: {
    salida: 'Metro Taxqueña',
    comida: 'Pizza Hoot',
    llegada: 'Estacion Tren Ligero'
  }
})

db.tours.insert({
  title: 'Grutas de Cacahuamilpa',
  // Objeto en formato JSON
  tags: ['gruta', 'naturaleza'],
  puntos: {
    salida: 'Caseta',
    comida: 'Puesto de tlacoyos',
    llegada: 'Central de Autobuses'
  }
})
```

tiempo aproximado **10 min**