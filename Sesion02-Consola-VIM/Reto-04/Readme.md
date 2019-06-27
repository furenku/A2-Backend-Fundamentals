#### Reto 04
## Comandos relacionados con permisos de archivos y carpetas.

### OBJETIVO
Conocer los comandos relacionados con permisos de archivos y carpetas.

#### REQUISITOS

1. Terminal.
1. Docker.

#### DESARROLLO
1. Nuestro project manager nos Acaba de llegar el gerente de sistemas y nos acaba de decir que la carpeta de bedu travels no se modificar solo se puede modificar por el propietario y el grupo solo podrá consultar, los demas no podran ver la carpeta

```
drwx----w- 4 root root 4096 Jun 11 20:33 beduTravels/
drwxr-xr-x 2 root root 4096 Jun 11 20:32 ejemplos/
drwxr-xr-x 2 root root 4096 Jun 11 20:32 retos/
```

<hr>

Permisos:   
--- -> 0  
--x -> 1  
-w- -> 2  
-wx -> 3  
r-- -> 4  
r-x -> 5  
rw- -> 6  
rwx -> 7  

r: permiso de lectura  
w: permiso de escritura  
x: permiso de ejecución  

