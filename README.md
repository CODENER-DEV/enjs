# API Movies

API en la cual se consumiran recursos de películas

## Instalar Node JS y NPM
Descargar la versión mas reciente
https://nodejs.org/es

## Instalar y ejecutar BackEnd con Node JS
Descarga el proyecto
```
$ git clone https://github.com/CODENER-DEV/enjs.git
$ cd ../path/to/the/file
$ npm install
$ npm start
```

### Ejecutar servidor en modo Development
```
npm run dev
```

### Ejecutar servidor en modo Producción
```
npm run start
```

### Modificar puertos
Puede modificar el puerto abierto del servidor Express si se requiere en .env, la constante SERVER_PORT es el puerto donde estará escuchando el servidor Express, la constante CLIENT_PORT es el puerto del cliente Angular desde donde se estará mandando solicitudes
```
SERVER_PORT=8000
CLIENT_PORT=8100
```

### Abrir Data Base en MongoDBCompass
Descargar en https://www.mongodb.com/products/tools/compass
Instalar aplicación y conectarse desde ahí con las credenciales en el archivo .env

## Ejecutar FrontEnd con Angular "compilado"
Coloque la carpeta "enjs" en su carpeta "www" con servidor Apache HTTP Server (puede utilizar WampServer o MAMP que incluyen las herramientas necesarias) y ejecutar desde ahi index.html o abra la url http://localhost:[port]/enjs y estará corriendo en un navegador Web.
Si usted desea colocar la carpeta "enjs" en un "dominio" propio, no olvide registrar el "dominio" sin "https://" en el archivo .env, esto por temas de CORS
```
ALTERNATE_CLIENT_DOMAIN=dominio.com
```

El proyecto ya está "compilado", para ver el código "sin compilar" vaya a la carpeta y archivos:
```
/enjs-original/src/app/[folders]
```
## Ejecutar FrontEnd con Angular "sin compilar"
Para ejecutar o probar este FrontEnd en el navegador hecho con Ionic Framework con Angular escriba en la consola desde la raíz del proyecto:
### Instalar Ionic
```
npm install -g @ionic/cli
```
### Instalar Angular
```
npm install -g @ionic/angular
```
### Instalar Módulos de Node
```
npm install
```
### Ejecutar el servidor
```
ionic serve
```