firebase.initializeApp({
  apiKey: 'AIzaSyBRGN59vjaQmoyDZWq93oTQbVQlCgVRUsQ',
  projectId: 'bedu-baas'
});

var db = firebase.firestore();

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data())
  });
});

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
