##### Reto 1
## Accesar al servidor de Github usando ssh 

### OBJETIVO

Que el alumno aprenda a usar el comando ssh para accesar a un servidor remoto.

#### REQUISITOS

Contar con una terminal

#### DESARROLLO

1. Abre la Terminal de Comandos
2. Teclea este comando 

```
ssh -T git@github.com
```

Al usar el comando ssh intentará usar las llaves (__keys__) que hemos agregado usando el agente-ssh

deberás ver este mensaje:

```
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
  > RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
  > Are you sure you want to continue connecting (yes/no)?
```

3. Presiona la tecla `y`

De no haber agregado tu llave pública a tu cuenta de Github deberás ver este mensaje:

```
Agent admitted failure to sign using the key.
debug1: No more authentication methods to try.
Permission denied (publickey).
```

**Realiza el [ejercicio 5](../Ejercicio 5) y vuelve a realizar este Reto**

Una vez agregado tu llave pública a la cuenta de Github, el resultado deberá ser:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

Tiempo estimado: **5 min**



Tiempo estimado: **10 min**