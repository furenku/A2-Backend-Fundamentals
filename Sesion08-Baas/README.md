# BaaS - Backend as a Service



## OBJETIVOS

- Que el alumno pueda entender las ventajas y desventajas de un BaaS
- Que el alumno pueda levantar un Baas con Autenticación y Base de Datos

## Requerimientos

- Cuenta de Google
- Explorador

## DESARROLLO
### ¿Qué es un BaaS?

Es un servicio que levanta un backend personalizado en la nube donde ofrece funcionalidades como:

- Almacenamiento de archivos
- Base de datos
- Exposición de API's 
- Administración de roles
- Authenticación y Sessión
- Integración continua
- Notificaciones push
- Integración con redes sociales
- Estadísticas de uso
- Seguridad
- Sistama de escalamiento automático

Normalmente es un servicio que se ofrece gratuito en su forma más básica (__freemium__), permitiendo así que desarrolladores puedan probar las funcionalidades, pero que al momento de escalar a un producto en producción, ofreciendo más espacio, capacidad de procesamiento o ancho de banda, se cobra por el servicio según como vaya escalando.

Este servicio normalmente está dotado de una Interfaz Web que nos permite hacer las configuraciónes estandares de un servidor backend, pero mediante una interfaz amigable y con opciones predeterminadas.

### Ventajas y desventajas

#### Ventajas

- Es posible levantar un servicio completo de backend para una WebApp o NativeApp sin saber sobre SysAdmin o DevOps
- Autenticación __out of the box__
- Permite un escalamiento __out of the box__
- Altamente customizable
- Permite integración continua
- Ahorra tiempo de desarrollo, permitiendo a nuestra App salir antes al mercado
- Simplicidad

#### Desventajas

- No tienes control completo sobre tus datos y archivos
- No permite una configuración customizada completa o perfectamente óptima
- Es un servicio por que hay que pagar mensualmente
- Centralización de datos
- Riesgo de pérdida de datos
- Testear es más complicado
- Tiene una complejidad propia
- Curva de aprendizaje

### Proveedores de Baas

- <a href="https://www.back4app.com/" target="_blank">Back4App</a>
- <a href="https://cloudboost.io/" target="_blank">CloudBoost</a>
- <a href="https://firebase.google.com" target="_blank">Firebase</a>
- <a href="https://www.graph.cool/" target="_blank">Graphcool</a>
- <a href="https://hasura.io/diy-graphql-baas" target="_blank">Hasura</a>
- <a href="https://www.progress.com/kinvey" target="_blank">Kinvey</a>
- <a href="https://azure.microsoft.com/en-us/" target="_blank">Azure</a>
- <a href="https://cloud.oracle.com/home" target="_blank">Oracle Cloud</a>
- <a href="https://en.wikipedia.org/wiki/Parse_(platform)" target="_blank">Parse (platform)</a>
- <a href="https://www.prisma.io/cloud" target="_blank">Prisma Cloud</a>
- <a href="https://www.redhat.com/en/technologies/cloud-computing/cloud-suite" target="_blank">Red Hat</a>

### Firebase

Firebase es un servicio de Google. De entre todas escogimos Firebase por su amplia gama de funcionalidades, madurez y comunidad alrededor. Servicios: 

- **Analytics**
  - Mide uso y nivel de compromiso (__engagemente__) de los usuarios en la app 

- **Develop**
  - Firebase Cloud Messaging
    - Notificaciones y mensajería
  - Firebase Auth
    - Servicio de autenticación via Email, Teléfono, Google, Twitter, Github, etc...
  - Firebase Realtime Database
    - Perfecta para software colaborativo y gaming
  - Firebase Cloud Firestore
    - Mejora de Realtime Database, mejor sistema de queries.
  - Firebase Storage
    - Manejo de archivos: fotos, videos, documentos, etc.
  - Firebase Hosting
    - Puedes hostear no sólo tu backend, también tu app
  - ML Kit
    - Machine Learning
- **Stability**
  - Crashlytics
    - Registro de errores en al app
  - Firebase Performance
    - Medición de rendimiento según sistema operativo, version, browser
  - Firebase Test Lab
    - Ambiente de pruebas multiplataforma (mobile, tablet, pc)

#### Crear un proyecto

[Ejemplo 1: Crea un proyecto de Firebase](./Ejemplo-01/)

#### Configurar Base de Datos

[Ejemplo 2: Configurar Database de Firebase](./Ejemplo-02/)
[Ejemplo 3: Crea una nueva Collection y agrega primer Documento ](./Ejemplo-03/)
[Reto 1: Agrega otros 3 Documentos a Collection](./Reto-01/)
[Reto 2: Agrega otra Collection y agrégale 3 Documentos](./Reto-02/)
[Ejemplo 4: Consulta con un query en Javascript los datos de tu Database](./Ejemplo-04)
[Reto 3: Haz una nueva consulta a la otra Collection](./Reto-03)
[Ejemplo 5: Agrega usando Javascript un documento a Collection](./Ejemplo-05)
[Reto 4: Haz una nueva inserción a la otra Collection](./Reto-04)

#### Autenticación

[Ejemplo 6: Agrega Email como método de Autenticación](./Ejemplo-06/)
[Reto 5: Agrega y configura otro método de Autenticación](./Reto-05/)

