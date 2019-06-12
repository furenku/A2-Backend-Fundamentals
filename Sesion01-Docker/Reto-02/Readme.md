##### Reto 01
## Imágenes

### OBJETIVO
Bajar la imagen de ubuntu a tu computadora local.

#### REQUISITOS
1. Docker.
1. Terminal.

### DESARROLLO
1. Inicia un contenedor con la imagen de ubuntu y accede al bash del contenedor.

Recuerda que la imagen de ubuntu necesita una entrada y salida.

**TIP**  
Investiga más a fondo los atributos que tiene run

```
$ docker run --help
$ docker run ¿¿??
```

Si necesitas ayuda lee el [Ejemplo 3](Ejemplo-03)

## Solución

```
$ docker run -it --name imagenUbuntu ubuntu 
```

__Nota:__ Este ejemplo se realiza en 15 mins o menos.