# PetFinder Backend

Este proyecto es una API backend desarrollada como parte del nivel 3 de APX School. El objetivo principal es gestionar información relacionada con mascotas perdidas y encontradas, permitiendo a los usuarios interactuar con los datos de manera eficiente. A continuación, se detallan las tecnologías, patrones y buenas prácticas utilizadas en el desarrollo.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir la API REST.
- **Sequelize**: ORM para interactuar con la base de datos.
- **PostgreSQL**: Base de datos relacional utilizada para almacenar la información.
- **Cloudinary**: Servicio para almacenar y gestionar imágenes de las mascotas.
- **Dotenv**: Gestión de variables de entorno.
- **Cors**: Middleware para habilitar CORS en la API.
- **JWT (JSON Web Tokens)**: Autenticación y autorización basada en tokens.
- **bcrypt**: Hashing de contraseñas para mayor seguridad.
- **Algolia**: Servicio para geolocalización y consultas rápidas.
- **Resend**: Libreria para envios de Email personalizados.

## Funcionalidades principales

- Registro y autenticación de usuarios.
- Configuracion del perfil de usuario, foto de perfil o cambio de contraseñas
- Publicación de mascotas perdidas con informacion, fotos y geolocalizacion.
- Actualización y eliminación de publicaciones de mascotas.
- Subida y gestión de imágenes con Cloudinary tanto para mascotas como usuarios.
- Búsqueda de mascotas por proximidad geográfica usando Algolia.
- Publicacion de reportes de avistajes con informacion relevante para el dueño
- Envio de correos personalizados para alertas de reportes de avistajes

## Patrones de diseño y arquitectura

- **Arquitectura MVC**: Separación de responsabilidades en modelos, vistas y controladores.
- **Rutas organizadas**: Uso de `Router` de Express para modularizar las rutas.
- **Servicios reutilizables**: Lógica de negocio encapsulada en servicios para facilitar la reutilización.
- **Middlewares personalizados**: Validación de datos y autenticación implementados como middlewares.
- **Gestión de errores centralizada**: Manejo de errores mediante un middleware global.

## Buenas prácticas aplicadas

- **Uso de variables de entorno**: Configuración sensible almacenada en un archivo `.env`.
- **Control de versiones**: Uso de Git para el control de cambios.
- **Documentación de la API**: Endpoints documentados para facilitar el uso por otros desarrolladores.

6. Accede a la API en `http://localhost:3000`.

## Estructura del proyecto

```
/src
  /controllers
  /models
  /routes
  /middlewares
  /utils
```

- **controllers**: Manejan las solicitudes HTTP y responden con datos o errores.
- **models**: Definiciones de los modelos de Sequelize.
- **routes**: Definición de las rutas de la API.
- **middlewares**: Funciones intermedias para validaciones y autenticación.
- **utils**: Funciones auxiliares.

## Lecciones aprendidas

- Implementación de una API RESTful desde cero.
- Integración de servicios externos como Cloudinary y Algolia, etc.
- Uso de un ORM para interactuar con bases de datos relacionales.
- Mejores prácticas en la organización y modularización del código.

## Próximos pasos

- Implementar autenticación con OAuth.
- Mejorar la cobertura de pruebas.
- Optimizar el rendimiento de las consultas a la base de datos.

¡Gracias por revisar este proyecto! Espero que sea útil y sirva como referencia para futuros desarrollos.
