# Prueba Soy Yo - Nodejs

BackEnd para el proyecto prueba escrito en Nodejs y express con typescript

## Instalación

Instalar dependencias y crear archivo .env basado en .env.example

```bash
npm install
```

Iniciar aplicación modo development

```bash
npm run dev
```

```bash
Crear una base de datos con el nombre asignado en el archivo .env
```

## Estructura Proyecto


```bash
/prisma/
|schema.prisma * archivo configuración prisma 
/src/
|-- controllers/ *controladores heredados de _base.controller.ts
|-- errors/   *errores genericos normalizados
|-- middlewares/ *middlewares para rutas
|-- routes/ *rutas del proyecto, partiendo de _main.route.ts
|-- seeders/ * archivos de generación de seeders
|-- utils/ * funciones genericas de ayuda ej: manejo de fechas
|-- config/ * archivos de configuracion ej: paginacion
|-- validators/ * validadores de campos 
| app.ts
| index.ts

```
## Formateo Código
La aplicación funciona con ESlint, por lo que se recomineda descargar la extensión de VScode
```bash
    npm run lint *ver errores de formato
    npm run lint-fix *ver y arreglar errores(los que se puedan) de formato
```
## Documentación Swagger
En cada ruta de la carpeta src/routes se debe llenar la documentación con JsDocs para la autogeneración de [swagger](https://swagger.io/docs/)
```javascrpit
/**
 * @swagger
 * /entities/filter:
 *  patch:
 *    description: Filtrar listado entidades ordenadas alfabeticamente
 *    responses:
 *      '200':
 *        description: Lista Correcta
 *
 */
entityRoute.post('/filter', entityController.filter)
```
Please make sure to update tests as appropriate.

