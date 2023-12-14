# Nombre Del Proyecto

Descripcion del proyecto

## Tabla de Contenidos

- [Introducción](#introducción)
- [Funcionalidades](#funcionalidades)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Casos de Uso](#casos-de-uso)
- [Llaves Guardadas](#llaves-guardadas)
- [Guía de Instalación y Configuración](#guía-de-instalación-y-configuración)
- [Cómo Contribuir](#cómo-contribuir)
- [Construcción y Despliegue](#construcción-y-despliegue)
- [Cómo Contribuir](#cómo-contribuir)
- [Licencia](#licencia)

## Introducción

Introduccion del Proyecto

## Funcionalidades

Descripcion detallada de para que sera utilizado el proyecto, y las soluciones que han sido implementadas (Especificando cada modulo)

#### 1. Inicio de Sesión ...

#### 2. Gestión de ...

#### 3. Almacenamiento y Gestión de Datos ...

#### 4. Manejo de Solicitudes de Red con `RequestUseCase` y `RequestUseCaseRetry`

La aplicación incorpora un manejo avanzado de las solicitudes de red mediante dos funciones clave: `ExecutePetition` y `ExecuteWithRetry`, implementadas en la clase `Api`. Estas funciones permiten realizar solicitudes HTTP a través de `axios` de manera eficiente y robusta.

##### ExecutePetition

- **Propósito**: Realizar solicitudes HTTP básicas.
- **Uso**: Se le pasa la URL, el método, y opcionalmente, los datos a enviar.
- **Funcionamiento**: Gestiona respuestas de acuerdo con su estado HTTP.

##### ExecuteWithRetry

- **Propósito**: Realizar solicitudes HTTP con reintentos automáticos.
- **Uso**: Similar a `ExecutePetition`, pero con control de intentos máximos y política de reintento.
- **Funcionamiento**: Reintentos automáticos en caso de fallo, aumentando el tiempo entre intentos.

#### 5. Other

##### Implementación y Uso

##### Funciones Clave

## Tecnologías Utilizadas

El proyecto "\*\*\*" hace uso de una amplia gama de tecnologías, lenguajes, frameworks y librerías para ofrecer una experiencia de usuario robusta y eficiente. A continuación, se detalla la lista de las principales dependencias utilizadas:

### Lenguajes y Frameworks

- React Native: Versión 0.72.6
- React: Versión 18.2.0
- Expo: Versión ~49.0.15

### Gestión de Estado y Almacenamiento de Datos

- Libreria: `package de la libreria`

### Comunicación y Servicios

- Axios: `axios` Versión ^1.3.4

### UI y Componentes

- React Native Elements: `react-native-elements` Versión ^3.4.3

### Navegación y Rutas

- React Navigation: Varias dependencias como `@react-navigation/native`, `@react-navigation/drawer`, etc.

### Herramientas de Desarrollo y Otros

- ESLint: Versión ^8.42.0
- Prettier: Versión ^2.8.8
- TypeScript: Versión ^4.6.3
- Babel: Varias dependencias como `@babel/core`, `@babel/preset-env`, etc.
- Patch-Package: Versión ^7.0.2

### Funcionalidades Expo

- Expo Dev Client: `expo-dev-client` Versión ~2.0.0

### Modulos Nativos

## Guía de Instalación y Configuración

Esta sección proporciona un paso a paso para instalar y configurar el proyecto "\*\*\*" en un ambiente local. Asegúrate de tener las credenciales de Expo y de seguir los pasos cuidadosamente para configurar el entorno de desarrollo.

### Requisitos Previos

1. **Node.js y Yarn**: Asegúrate de tener Node.js y Yarn instalados en tu sistema. Yarn se usará para manejar las dependencias del proyecto.
2. **Expo CLI**: Instala Expo CLI globalmente usando Yarn con el comando `yarn global add expo-cli` .
3. **React Native**: Este proyecto está construido con React Native, así que asegúrate de tener el entorno de React Native configurado.
4. **Java y Android Studio**: Necesitarás Java y Android Studio para el desarrollo de aplicaciones Android. Asegúrate de tenerlos instalados y configurados correctamente.
5. **Credenciales de Expo**: Debes tener acceso a las credenciales de Expo para abrir y probar la app en desarrollo.

### Configuración del Proyecto

1. **Clonar el Repositorio**: Comienza clonando el repositorio del proyecto a tu máquina local usando Git.

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```

### Instalación de Dependencias

Navega al directorio del proyecto clonado e instala las dependencias usando Yarn.

    cd [NOMBRE_DEL_DIRECTORIO]
    yarn install

### Configuración de Expo

Inicia sesión en tu cuenta de Expo usando Expo CLI.

    eas login

Sigue las instrucciones en pantalla para ingresar tus credenciales de Expo.

### Ejecución del Proyecto en Desarrollo

Para iniciar el proyecto en modo de desarrollo, utiliza el comando:

    npx expo start --dev-client

### Ejecución en un Emulador o Dispositivo Físico

Puedes ejecutar la aplicación en un emulador Android o en un dispositivo físico. Sigue las instrucciones en la ventana bash de Expo para ver las diferentes opciones disponibles.

## Cómo Contribuir

Contribuir al proyecto "\*\*\*" requiere seguir ciertos estándares y procesos para mantener la consistencia y calidad del código. A continuación, se detallan las pautas para contribuir al proyecto:

### Estándares de Commit

- **Formato del Mensaje de Commit**: Usa las primeras dos iniciales del desarrollador seguidas de una descripción clara de lo que se ha hecho. Incluye también la historia de usuario (HU) o el número de caso (NC) asociado de Qtracker, Odoo o Jira.

  ```bash
  [EV] Se arregla reenvio de documentos pendientes, UseSendPendings, NC 1022
  ```

  ```bash
  [EV] Se añade pantalla de ayuda, Helper.tsx UseHelper.ts `(HU 21)`
  ```

### Antes de Realizar Push

- **Linting del Código**: Antes de realizar cualquier push, ejecuta `npm run lint` para asegurar que el código esté libre de errores de sintaxis y estilos innecesarios. Esto ayuda a evitar conflictos y mantiene la calidad del código.

  ```bash
  npm run lint
  ```

- **DRY**: Adicionalmente, y posterior al linting del codigo realizar cualquier push, ejecuta `npm run checkDry` para asegurar que el código esté libre de anidacion y repeticion innecesaria. Esto ayuda a la mantenibilidad a futuro, donde se creen estandares en el codigo que prevenga tener una misma funcion, un documento completo de estilos , repartidos muchas veces en el codigo.

  ```bash
  npm run checkDry
  ```

### Flujo de Desarrollo

- **Creación de Ramas para Sprints Nuevos**: Al iniciar un nuevo sprint en desarrollo, crea una rama basada en la rama del sprint inmediatamente anterior. Por ejemplo, para el sprint 3, crea una rama a partir de `developmentSprint2` Siempre desde la rama de desarrollo inmediatamente anterior

- **Gestión de Merges**: Continúa realizando merges con la rama del sprint anterior (por ejemplo, `developmentSprint2`) para mantener un registro incremental de los cambios.

## Construcción y Despliegue

### Compilación y Despliegue en Expo

Para desplegar o compilar la aplicación en Expo, es necesario estar logueado en la cuenta de Expo correspondiente. Expo utiliza ramas de EAS (Expo Application Services), que se configuran en el archivo `eas.json`.

    {
    ... ,
     "build": {
       "development": { <== Esto genera la apk de desarrollo
         "developmentClient": true,
         "distribution": "internal",
         "ios": {
           "resourceClass": "m-medium"
        }
      },
    "branchname": { <=== aqui se declara la rama de la app compilada
      "channel": "productions16",
      "android": {
        "buildType": "apk"
         }
        }
     },
     ...
    }

Cada objeto en eas.json representa un perfil en Expo sobre el cual se recibirán actualizaciones únicas. Para compilar una aplicación apuntando a una rama específica de Expo, utiliza el siguiente comando:

    eas build --platform android --profile [branchNameIneas.json]

Este comando generará un link donde se compilará la aplicación y será entregada posteriormente.

### Actualización de Bundles de JavaScript

Si se incluye un cambio en el bundle de JavaScript (solo código JS, no librerías), primero se publica el cambio aumentando la versión en los archivos constants.tsx e index.tsx de la carpeta constants.tsx

    export const publishVersion = "1.0.97"; <== sumale 1

Luego, usa el siguiente comando para publicar la actualización:

    eas update --platform android --branch [profile con el que se compiló]

Esto generará un nuevo bundle. Cada aplicación que se conecte a internet y que esté configurada con el perfil correspondiente se actualizará automáticamente con este nuevo bundle.
