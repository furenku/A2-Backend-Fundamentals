##### Ejemplo 01
## Verificación de SHH instalado

### OBJETIVO
Comprobar la instalación de ssh en nuestro equipo.

#### REQUISITOS

Contar con una terminal.

### DESARROLLO
1. Dentro de tu **terminal** ejecutaremos el siguiente comando
```
man ssh
```

2. Si ssh está instalado, deberá mostrarse el manual básico de ssh
  
```
SSH(1)                                                          BSD General Commands Manual                                                         SSH(1)

NAME
     ssh — OpenSSH SSH client (remote login program)

SYNOPSIS
     ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec] [-D [bind_address:]port] [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]
         [-i identity_file] [-J [user@]host[:port]] [-L address] [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port] [-Q query_option]
         [-R address] [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]] [user@]hostname [command]

DESCRIPTION
     ssh (SSH client) is a program for logging into a remote machine and for executing commands on a remote machine.  It is intended to provide secure
     encrypted communications between two untrusted hosts over an insecure network.  X11 connections, arbitrary TCP ports and UNIX-domain sockets can also
     be forwarded over the secure channel.

     ssh connects and logs into the specified hostname (with optional user name).  The user must prove his/her identity to the remote machine using one of
     several methods (see below).

     If command is specified, it is executed on the remote host instead of a login shell.

     The options are as follows:
```

3. Oprime la tecla `q` para salir


__Nota:__ Este ejemplo se realiza en 5 mins o menos.

