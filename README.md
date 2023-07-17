# Frosty Bite

Frosty Bite es un proyecto realizado para el curso de React JS de CoderHouse. La aplicacion es un simulador de un Ecommerce basico,
en ella pueden probar la navegacion entre un listado de productos y generar una ordende compra. Tanto los productos como las ordenes se
almacenan en Firebase.

## Tecnologías Utilizadas

- Vite
- React
- React Router
- Cloud Firestore de Firebase

## Funcionalidades

- Ver una lista de productos disponibles
- Separar dichos productos en Categorias
- Diferenciar productos cuyo Stock este agotado
- Ver los Detalles de un producto en especifico
- Agregar productos al carrito de compras
- Ver el carrito de compras
- Modificar el carrito de compras
- Realizar un Checkout de la compra
- Generar una orden de compra

## Instalacion

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

Clona el repositorio a tu máquina local.

Abre una terminal en el directorio del proyecto.

Ejecuta el comando npm install para instalar las dependencias.

Ejecuta el comando npm run dev para iniciar la aplicación.

Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Configuracion de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

Crea una cuenta en Firebase y crea un nuevo proyecto.

En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.

En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.

En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.

Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
