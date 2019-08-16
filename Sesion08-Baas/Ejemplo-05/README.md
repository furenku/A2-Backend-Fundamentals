[<-- Regresar](../)


## Agrega usando Javascript un documento a Collection

### Objetivos 

Aprender a usar los comandos de inserción de datos de la librería de JS de Firebase

### Requisitos 

- Editor de texto (recomendado VisualCode) 
- Explorador
- Proyecto firebase con base de datos configurada
- Varias colecciones dentro de la base de datos
- Documentos agregados a esas colecciones

### Desarrollo

1. Modifica el archivo `index.html` para que contenga un formulario y un botón

```
<div>
  <div><input type="text" id="nameInput" placeholder="Escribe tu nombre"/>  </div>
  <div><input type="text" id="lastnameInput" placeholder="Escribe tu apellido"/>  </div>
  <div><input type="number" id="ageInput" placeholder="Selecciona tu edad"/>  </div>
  <button onclick="addUser()">Agrega usuario</button>
</div>
```

2. Modifica el archivo `index.js` para que ejecute la función `addUser` cuando el botón `Agregar usuario` sea presionado

```
function addUser() {
  let nameValue = document.getElementById('nameInput').value
  let lastnameValue = document.getElementById('lastnameInput').value
  let ageValue = document.getElementById('ageInput').value

  db.collection("users").add({
    name: nameValue,
    lastname: lastnameValue,
    age: ageValue
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}
```

3. Abre `index.html` en el explorador y comprueba que agregue documentos a la colección `users`

4. Mantén abierta la Consola del DevTools para ver los logs

5. Refresca una vez que viste el mensaje `Document written with ID:`

6. Deberá aparecer ese nuevo usuario en la Consola


Tiempo aproximado **15 min**