##### Ejercicio 5
## Agregar nuestra llave SHH pública a nuestra cuenta de Github

### OBJETIVO
Agregar nuestra llave pública a Github para poder realizar acciones autorizadas sin necesidad de utilizar nuestra cuenta y password de github

#### REQUISITOS

- Contar con una terminal
- Contar con una llave SHH pública
- Contar con una cuenta de Github

### DESARROLLO

1. En tu terminal, instala `xclip` usando `apt` para pasar contenido a nuestro portapapeles

```
$ sudo apt-get install xclip
```

2. Copia el contendio de tu llave SSH al portapapeles

```
$ xclip -sel clip < ~/.ssh/id_rsa.pub
```

3. Alternativamente puedes imprimir el contenido de tu llave pública usando el comando `cat` y copiarlo seleccionando el texto y dando click derecho "Copiar" o `ctrl + shift + c` (así es como copias texto seleccionado en la terminal)

```
$ cat ~/.ssh/id_rsa.pub
<aparecerá un párrafo con números, símbolos y letras. Este es tu llave pública>
```

4. En tu Browserm, entrar a <a href="https://github.com" target="_blank">github.com</a>

5. Hacer login o registrar una nueva cuenta de Github

6. Una vez autenticado, da click a la foto de perfil para deplegar el menú y selecciona la opción "Settings"

![](https://help.github.com/assets/images/help/settings/userbar-account-settings.png)

7. En la barra de menú lateral de Settings, da click en "SSH and GPG keys"

![](https://help.github.com/assets/images/help/settings/settings-sidebar-ssh-keys.png)

8. Da click en "New SSH Key"

![](https://help.github.com/assets/images/help/settings/ssh-add-ssh-key.png)

9. En el campo "Title" pon algo que describa dónde se encuentra la llave privada correspondiente a esta llave pública. Ej. Laptop Dell Juanito

10. En el campo "Key" pega el contenido del portapapeles (Click derecho pegar o `ctrl + v`)

11. Da click en el botón verde "Add SHH key"

![](https://help.github.com/assets/images/help/settings/ssh-add-key.png)

12. Es posible que Github pida de nuevo tu password. Escríbelo y presiona `Enter`