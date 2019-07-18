[<-- Regresar](..)

## Levanta el servicio o __deamon__ de MongoDB

Un __deamon__ es un servicio que corre sin obstrucciones en bambalinas (__background__)

Para poder accesar al cliente de Terminal de MongoDB (__CLI__), es necesario levandar el servicio o __deamon__

### Instrucciones

#### Windows

1. Abrir el explorador de carpetas
2. Entrar a la ruta `C:\Program Files\MongoDB\Server\4.0\bin\`
3. Dar doble click en el archivo `mongod.exe`

o 

1. Abrir Terminal de Comandos
2. Correr este comando:

```
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
```

> si quisieras especificar otra carpeta diferente puedes cambiar `data/db` por otra carpeta existente

#### MacOS & GNU/Linux (Ubuntu)

1. Abrir terminal de comandos
2. Correr __deamon__ de MongoDB

```
sudo mongod
```

> Puedes especificar otro archivo de configuración agregando, por ejemplo, este parámentro: `--config /usr/local/etc/mongod.conf`


Para para GNU/Linux (Ubuntu) puedes utilizar también el manejador de servicios de Linux

```
sudo service mongod start
```

Igual MacOS , pero con un camando similar

```
brew services start mongodb-community@4.0
```


<hr>

Cuando el servicio levantó correctamente, debe de estar este mensaje en la Terminal de Comandos

```
[initandlisten] waiting for connections on port 27017
```

> 27017 es el puerto donde levanta por __default__ el servicio de MongoDB. Puedes usar el parámentro `--port <un puerto>` para levantarlo en un puerto diferente

> **Debes de dejar abierta esta Terminal para que el servicio se mantenga corriendo**

Tiempo estimado de explicación: **10 min**
