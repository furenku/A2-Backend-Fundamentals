[<-- Rergresar](../)

##  Ejercicio de Programación Funcional ultilizando Javascript

No funcional

```js

const getSalutation = function(hour) {
 var salutation; // temp value
 if (hour < 12) {
 	salutation = "Good Morning";
 }
 else {
 	salutation = "Good Afternoon"
 }
 	return salutation; // mutated value
 }
```

Funcional
```js
const getSalutation = (hour) => hour < 12 ? "Good Morning" : "Good Afternoon";
```


### Funciones de arreglos

```
[].every(fn)
```

Verifica si todos los elementos cumplan una condición

```
[].some(fn) | [].includes(fn)
```

Verifica si almenos un elemento cumple una condición

```
[].find(fn)
```

Regresa **el primer** elemento que cumpla una condición

```
[].filter(fn)
```

Crea un nuevo arreglo con los elementos que cumples cierta condición

```
[].map(fn)
```

Crea un nuevo arreglo aplicándole la transformación definida a cada elemento

```
[].reduce(fn(accumulator, currentValue))
```

Modifica el acumulador según el resultado de una función para cada elemento

```
[].sort(fn(a,b)) 
```

Modifica el arreglo que manda llamar la funcion `sort` según una función comparadora 

```
[].reverse() warning, mutates state!
```

Invierte el orden de los elementos del arreglo

Pueden ser encadenados

```js
let cart = [
  {name: "Drink", price: 3.12},
  {name: "Steak", price: 45.15},
  {name: "Drink", price: 11.01}
];

let drinkTotal = cart.filter(x=> x.name === "Drink")
 .map(x=> x.price)
 .reduce((t,v) => t +=v)
 .toFixed(2);

console.log(Total Drink Cost $${drinkTotal}); // Total Drink Cost $14.13
```

Tiempo aproximado de explicación: **15 min**
