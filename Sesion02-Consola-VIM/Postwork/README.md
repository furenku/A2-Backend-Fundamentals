## Customiza VIM y tu consola a tu gusto.

### OBJETIVOS
- Modificar CLI y el ambiente de VIM

### REQUISITOS
1. Contar con una terminal.

1. Contar con VIM instalado.

### DESARROLLO

Bienvenido al postwork de la sesión, en este postwork vamos a realizar customizaciones de nuestra terminal y de VIM dentro de ella.

1. Sigue el siguiente tutorial y modifica tu terminal según tus preferencias. 
    * [Customiza tu terminal](https://ubunlog.com/customiza-tu-terminal-en-ubuntu/)

1. Para personalizar la configuración de Vim, debemos editar el fichero vimrc situado en la ruta
```
/etc/vim/vimrc
```
En este fichero podemos añadir nuestra propia configuración al final del mismo. Algunas de las configuraciones más utilizadas las explicamos a continuación pero, podéis ver todas las opciones disponibles desde su página oficial.

|||
|----|----|
|set number|Provee a nuestro editor de una numeración a todas las líneas del fichero
syn on|Agrega colores dependiendo del tipo de fichero
set ts=n|Establece una indentación de n caracteres
set nobackup|Evita que se guarden copias en bufer

Una vez añadidos los cambios al fichero vimrc, guardaríamos y ya tendríamos lista nuestra configuración en vim.
	
* [Customiza VIM](https://intervia.com/doc/instalar-y-configurar-vim/)
 