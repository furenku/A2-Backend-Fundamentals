[<-- Regresar](..)

## Instalación de MongoDB

### Objetivo

Que el alumno Aprenda a instalar MongoDB

### Requerimientos

Explorador de internet

### Desarrollo

1. Entra a la [página oficial de descarga de MongoDB](https://www.mongodb.com/download-center/community)

2. Selecciona la versión 4.0

3. Selecciona tu sistema operativo

4. Selecciona `server` en la opción de paquetes

5. Presiona el botón de `Descargar`
 
(Para Linux y MacOS puedes también agregar las librerías de MongoDB con su menajador de paquetes)

#### GNU/Linux (Ubuntu)

6. Verifica que descargaste el instalador con terminación `.deb`
7. Corre el instalador dando doble click en el archivo `.deb`
8. Se abrirá el asistente de instalación de software. Da click en el botón `Install`
12. Terminar instalación

#### Windows

6. Verifica que descargaste el instalador con terminación `.msi`
7. Corre el instalador dando doble click en el archivo `.msi`
8. Selecciona la opción `Complete`
9. Selecciona la opción `MongoDB Service`
10. Selecciona la opción `Run the service as Network Service user`
11. Deja los campos: `Service Name`, `Data Directory` y `Log Directory` como vengan predeterminados.
12. Terminar instalación

#### MacOS

Si **no** tienes el manejador de paquetes Homebrew:

6. Verifica que descargaste los binarios comprimidos en un `.tgz`
7. Descomprime los binarios con este comando desde la terminal

```
tar -zxvf mongodb-osx-ssl-x86_64-4.0.10.tgz
```

8. Copia la carpeta que se descomprimió a esta ruta

```
 /usr/local/bin
```

> Si no lo tienes y lo quieres puedes seguir [estas instrucciones](https://brew.sh/#install)

Si tienes Brew, :

6. Abre la Terminal de comandos
7. __Tap__ MongoDB con este comando

```
brew tap mongodb/brew
``` 

8. Instala MongoDB 

```
brew install mongodb-community@4.0
```




Tiempo estimado de explicación: **10 min**
