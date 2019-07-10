## Algunos Esquemas de Arquitectura de Datos para Bedu Travels

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