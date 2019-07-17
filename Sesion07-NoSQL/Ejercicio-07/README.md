[<-- Regresar](..)

## Crear una nueva colección insertando un nuevo documento

Como mencionamos previamente, no es necesario definir cómo está estructurada una colección para empezar a insertar en ella. Ni siquiera es necesario crearla, **sólo con insertar un documento la crea**

Se usa el comando `insert` para introducir un nuevo documento a una colección y recibe como parametros un documento. Recuerda que se usa la sintaxis de JSON para esto.

> Es el __standard__ nombrar las colecciones con su nombre en plural

```
db.users.insert({name: 'John', age: 25})
```

> Como puedes ver, la sintaxis de MongoDB es idéntica a la de Javascript

> Accesamos a los subdocumentos con `.` y mandamos paramentros dentro de `(...)` como en las funciones de JS