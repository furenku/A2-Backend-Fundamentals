[<-- Rergresar](../)

## Ejemplo de Programación Orientada a Objetos utilizando Javascript

```js
let Tour = new Object()
Tour.name = "Escalada en Peña de Bernal"
Tour.price = "$1000"
Tour.startDate = "02-03-2019"
Tour. = "02-03-2019"
 
Tour.reserve = function() {
    this.numberOfReservations +=1
}
```

```js
class User {
  constructor (name, email, age) {
    this.name = name
    this.email = email
    this.age = age
    this.tours = []
  }

  saveTour (tourId) {
    this.tours.push(tourId)
  }

}

let user1 = new User('Juan', 'juan@email.com', 25)
let user2 = new User('Pedro', 'pedro@email.com', 28)
let user3 = new User('Laura', 'laura@email.com', 33)

user1.saveTour(11)
```

Tiempo aproximado de explicación: **5 min**