# Arquitectura de Software y Paradigmas de Programación

## OBJETIVOS

- Que el alumno entienda los estilos de arquitectura de software y los utilice para analizar problemas y diseñar requerimientos functionales y no funcionales
- Que el alumno estienda y ocupe los patrones de diseño de software para resolver problemas

## Requerimientos

- Entendimiento básico del lenguaje de programación **Javascript**

## DESARROLLO

### Arquitectura de Software

Llamamos Arquitectura de Software al proceso que nos permite pensar en las capas o módulos tecnológicos, y la forma de interacción entre ellos, necesarios para lograr satisfacer los requerimientos o especificaciones de negocio de proyecto.

El resultado de este proceso es una serie de documentos o diagramas donde se detallen las capas, las tecnologías, el modelo de datos, las librerías y _frameworks_ que se utilizarán para llegar a la solución tecnológica de los problemas planteados. 

Este diseño tiene como principal objetivo que el _stack_ de tecnología sea suficiente para desarrollar la solución completa y evitar así el riesgo de agregar o cambiar las tecnologías a medio desarrollo, que nos puedan llevar a cambios significativos de presupuesto o tiempos estimados de entrega. 

Una buena manera para representarlos serían los planos (blueprints) de un edificio. Empezar a construir(desarrollar) sin este diseño nos puede llevar a:
- Mala estimación del tiempo y costo (humano o tecnológico)
- Soluciones insuficientes
- Trabajo Inecesario. Hacer y deshacer
- Problemas de integración entre los módulos
- Problemas de escalamiento

Las ventajas de un buen diseño de arquitectura de software:
- Mapa claro de componentes o módulos necesarios
- Desarrollo modular y paralelo
- Descripción detallada de la forma de interaccióne entre los componentes
- Nos permité desarrollar pruebas (tests) para comprobar el correcto funcionamiento del sistema (pruebas unitarias y de integración)
- Mejor mantenibilidad de software
- Medición de eficiencia
- Planeción de escalabilidad
- Verificación seguridad
- Contemplar la reusabilidad de otros o nuevos códigos
- Flexibilidad de evolución

[Ejercicio 1: Diagrama de Arquitectura de Software de Bedu Travels con el stack MERN (Mongo Express React Node)](./Ejercicio-01/)

Para poder construir correctamente una Arquitectura de Software adecuada es necesario levantar requerimientos que nos den la mayor cantidad de detalle y especificación. 

##### Levantamiento de requerimientos

Siguiendo los principios de la metodología UX y el Desarrollo Ágil de Programación, recomendamos levantar los requerimientos juntando los siguientes elementos paulatinamente:

##### Historias de usuario

Las historias de usuario narran el tipo de **Personas**, las **acciones** que pueden realizar y los **motivos** por los que lo realizarían

[Ejercicio 2: Historias de usario de la aplicación Bedu Travels](./Ejercicio-02/)

[Reto 1: Imagina y redacta otras 2 Historias de Usuario para Tu proyecto](./Reto-01/)

##### Criterios de Aceptación

Cada Historia de Usuario tiene que tener una lista de criterios o condiciones a cumplir, que permita validar que la funcionalidad está abarcada completa y correctamente. Recomiendo dividrlos en `Elementos a mostrar` y `Comportamiento esperado`

[Ejercicio 3: Criterios de aceptación para Historia de Usuario](./Ejercicio-03/)

[Reto 2: Escribe los Criterios de Aceptación para alguna de las Historias de Usuario que redactaste](./Ejercicio-03/)

##### Arquitectura de Datos

A partir de las Historias de Usuario y los Criterios de Aceptación podemos darnos una mejor idea de qué datos y organizados de qué manera tenemos que almacenar en nuestra base de datos para que nuestra aplicación funcione. Para esto generamos Esquemas con los tipos de datos que cada Recurso (Colección o Tabla) que nos imaginemos

[Ejercicio 4: Algunos Esquemas de Arquitectura de Datos para Bedu Travels](./Ejercicio-04/)

[Reto 3: Dibuja el Esquema de Arquitectura de Datos para la funcionalidad que habías imaginado](./Reto-03/)

#### Diagramas de Flujo de Interacción

Para explicar la manera y las condiciones en las que podemos realizar ciertas acciones navegando en la app, utilizamos diagramas de flujo.

[Ejercicio 5: Diagrama de Flujo de Interacción para una Compra de Vuelo en Bedu Travels](./Ejercicio-05/)

[Reto 4: Dibuja el diagrama de Flujo de Interacción para una funcionalidad de tu proyecto](./Reto-04/)


#### Vistas

Lista de pantallas con los elementos a mostrar para cada parte de las acciones a realizar. Es recomendable, dado el uso actual de los dispositivos, empezar a diseñar primer para **Moviles** luego para **Escritorio**. E irlos desarrollando paulatinamente siguiendo estos pasos:

1. Wireframes de baja calidad (Pizarrón)
2. Wireframes de alta calidad (Digitales, sin colores, imagenes o fuentes) 
3. Mockup (Digitales, colores, íconos y fuentes) 

![](https://mentormate.com/wp-content/uploads/2018/05/all-wireframes-1030x585.jpg)


### Patrones de programación

A lo largo de la historia de la programación de computadoras han existido distinas maneras de programas, dependiendo de la complejidad o la manera en que los agentes que se involucran se desarrollan.

#### Programación Imperativa

Es la primera, la más común y la más básica. Se puede resumir como **serie de pasos obligatorios**

#### Programación Orientada a Objetos

En cuanto empezamos a utilizar la programación para más ambitos de nuestra vida, nos fue necesario empezar a _simular la realidad_ de manera más organizada; se hizo generando **objetos** complejos (combinación de datos simples: strings, números, booleans, etc.)

Dentro de estos **Objetos** podemos especificar propiedes (características) y métodos (funcionales). A este __molde__ o __plantilla__ de estas especificaciones le llamamos **Clase** y con ella generar multiples **Instancias** de este Objeto.  Y además tienen la capacidad de heredar estas propiedades y métodos a otros objetos por medio de la **herencia**.

[Ejercicio 6: Ejercicio de Programación Orientada a Objetos utilizando Javascript ](./Ejercicio-06/)

#### Programación Funcional

Tienen su origen siguiendo modelos de fórmulas matemáticas. Están basadas en funciones que siempre regresarán el mismo resultado cuando se le mandan los mismos parámetros.

[Ejercicio 7: Ejercicio de Programación Funcional ultilizando Javascript](./Ejercicio-07/)

#### Programación Orientada a Eventos

Cuando exiten eventos que modifican el comportamiento de nuestro programa, por Ejercicio, eventos que recibimos de algún servidor, teclazos o clicks del usuario. Es necesario un paradigma que los tome en cuenta. La Programación Orientada a Eventos nos ayuda a lidiar con estos eventos. 