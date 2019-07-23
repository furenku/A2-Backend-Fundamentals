##### Ejercicio 6
## Crear un repositorio y hacer push usando la configuración SSH

### OBJETIVO
Verificar que se ha agregado correctamente nuestra llave pública a nuestra cuenta de Github

#### REQUISITOS

- Contar con una par de llaves SSH.
- Tener una cuenta de Github
- Haber agregado la llave pública a nuestra cuenta de Github.


### DESARROLLO


1. Entrar a [github.com](https://github.com)

2. Verificar que nuestra cuenta esté activa viendo en la esquina superior derecha o en la barra lateral izquierda

3. En la barra lateral izquierda dar click al botón verde de `new` (También puede hacerse en la barra superior en el ícono `+` y en el menú que despliega, escoger la opción `new repository`)

4. Escribir debajo de `Repository name` un nombre cualquiera

5. Dejar seleccionada la opción `public`

6. Dar click en el botón verde hasta abajo `Create Repository`

7. Aparecerá una pantalla con el texto `Quick Setup hasta arriba`. Seleccionar la opción `SSH` y verificar que el link al lado empiece con `.git`

8. Copiar las 6 líneas debajo de `... or create a new repository from the command line`

9. Abrir Terminal de Comandos

10. Ir usando el comando `cd` a la carpeta donde estará nuestro repositorio

11. Crear con el comando `mkdir` una carpeta con el mismo nombre del repositorio que recién creamos

12. Entrar a la carpeta con el comando `cd` y pegar las 6 líneas que copiamos de github. (Recuerda que para pegar texto en la terminal debes de usar `Ctrl + Shift + v` o dar click derecho + `Pegar`)

13. Si nuestra llave fue agregada correctamente no saldrá ningún error. si aparece un error intenta de nuevo el [Ejercicio 5](../Ejercicio-5/)

Tiempo aproximado: **10 min**

