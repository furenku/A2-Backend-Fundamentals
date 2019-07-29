##### Reto 3
## Instala y prueba el packete chalk de NodeJS usando npm

### OBJETIVO
Que el alumno aprenda a instalar paquetes de NodeJS utilizando npm

#### REQUISITOS

Contar con una terminal.

#### DESARROLLO

1. Abre una Terminal de Comandos
2. Crea una carpeta nueva en una locación de tu elección

```
mkdir <carpeta>
```

3. Ingresa a la carpeta


```
cd <carpeta>
```

2. Corre este comando

```
npm install chalk
```

> [Aquí](https://www.npmjs.com/package/chalk) puedes leer más sobre cómo utilizar el paquete

3. Crea un archivo nuevo dentro de la misma carpeta con el nombre `chalk-test.js`

4. Edita el contenido del archivo y pon este código:

```
const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));
```

5. Corre el archivo utilizando el comando `node`

```
node chalk-test.js
```

6. Agrega 5 `console.log()` con otros estilos

7. Pruebalos corriendo el archivo 

Tiempo estimado: **15 min**