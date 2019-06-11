#### Ejemplo 01
## Comandos de ayuda

### OBJETIVO
Conocer los comandos que nos proporcionaran ayuda de otros comandos.

#### REQUISITOS

1. Terminal.
1. Docker.

#### DESARROLLO
1. Levanta tu contenedor de ubuntu.
```
$ docker run -it ubuntu 
```
Esto nos ha inicializado una terminal dentro de nuestro contenedor, el shell que estamos ocupando es bash por default.
```
> "Empecemos la clase"
```

2. Ejecuta el comando man para conseguir ayuda sobre los comandos.
```
$ man man
```
El resultado del comando sera el siguiente, donde nos especifica cual es su nombre, sinposis, descipción. 
```
MAN(1)                    Útiles de Páginas de Manual                   MAN(1)

NOMBRE
       man - una interfaz de los manuales de referencia electrónicos

SINOPSIS
       man  [-c|-w|-tZT  dispositivo] [-adhu7V] [-m sistema[,...]] [-L locale]
       [-p cadena] [-M  ruta]  [-P  paginador]  [-r  prompt]  [-S  lista]  [-e
       extension] [[sección] pagina ...] ...
       man  -l  [-7] [-tZT dispositivo] [-p cadena] [-P paginador] [-r prompt]
       fichero ...
       man -k [-M ruta] palabra_clave ...
       man -f [-M ruta] pagina ...

DESCRIPCIÓN
       man es el paginador del manual del sistema.  Las  páginas  usadas  como
       argumentos al ejecutar man suelen ser normalmente nombres de programas,
       útiles o funciones.  La página de manual associada con cada uno de esos
       argumentos  es  buscada  y  presentada.   Si  la  llamada da también la
       sección, man buscará sólo en dicha sección del manual.  Normalmente, la
       búsqueda  se  lleva a cabo en todas las secciones de manual disponibles
 Manual page man(1) line 1 (press h for help or q to quit)

```


