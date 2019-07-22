[<-- Regresar](../)

##### Ejericio 4

## Algunos Esquemas de Arquitectura de Datos para Bedu Travels

### Objetivo

Que al alumno aprenda a definir mediante Esquemas la Arquitectura de Datos de una Aplicación Web y su valor para definir la estructura de Base de Datos.

### Desarrollo

**Esquemas:**

#### User

- **name**: String
- **lastname**: String
- **birthDate**: Date
- **email**: String
- **password**: String (Codificado por seguridad)
- **savedTours**: [ObjectId]
- **interests** : [String]

#### Tour

- **title**: String
- **description**: String
- **startDate**: Date
- **endDate**: Date
- **maxUsers**: Number
- **price**: Number
- **promoCodes**: [String]

Tiempo estimado de explicación: **10 min**