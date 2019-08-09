[<-- Regresar](../)

## Consulta con un query en Javascript los datos de tu Database

Para poder consultar los datos que recién agregamos a la base de datos, debemos realizar un programa en Javascript. No te preocupes si no haz aprendido este lenguaje, proporcionaremos paso a paso el código que necesitas para realizarlo.

### Objetivos 

Comprobar el acceso de lectura a los documentos de una colleccion de una base de datos de un proyecto Firebase

### Requisitos 

- Editor de texto (recomendado VisualCode) 
- Explorador
- Proyecto firebase con base de datos configurada
- Varias colecciones dentro de la base de datos
- Documentos agregados a esas colecciones

### Desarrollo

1. Crea una carpeta con nombre `firebase-db-test` utilizando la terminal o el explorador de archivos
2. Dentro de esa carpeta agrega un archivo `index.html` y un archivo `index.js`
3. Inserta este código dentro el archivo `index.html` con algún editor de texto

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Firebase DB Test</title>
</head>
<body>
  Probando acceso a base de datos  de Firebase 
  <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-firestore.js"></script>
  <script src="./index.js"></script>
</body>
</html>
```

4. Entra la consola de tu proyecto de Firebase

5. Averigua el AppKey y el AppId de tu proyecto de Firebase dando click en el símbolo de engrane al lado de `Proyect Overview` hasta arriba del menú lateral del lado derecho. Selecciona de las opciones que aparecen: `Project Settings`

6. De esta pantalla obten `ProjectID` y `Web Api Key`

7. Inserta este código en el archovo `index.js`

```
const apiKey = <pega aquí el Web Api Key de Project Settings>
const projectId = <pega aquí el ProjectIDy de Project Settings>
const collection = <Nombre de coleccion a leer>

// Tiene que ser strings por lo que rodealos de comillas

// Ej.
// const apiKey = 'AIzaSyBRGN59vjaQmoyDZWq93oTQbVQlCgVRUsQ'
// const projectId = 'bedu-baas'
// const collection = 'users'

firebase.initializeApp({
  apiKey,
  projectId
});

var db = firebase.firestore();


db.collection(collection).get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data())
  });
});

```

6. Abre el archivo index.html dándo doble click o con el comando en terminal: `google-chrome index.html`

7. Deberás ver en el explorador una página web con el texto: `Probando acceso a base de datos  de Firebase`

8. Comprobar la lectura de los documentos de la colección especificada abriendo la consola dentro de las DevTools: haciendo `click derecho -> inspeccionar` o `ctrl + shift + `

9. En la pestaña `Console` deberás ver el id y un objeto con los campos y valores para cada documento que habías insertado desde la consola de Firebase


Tiempo aproximado **15 min**