
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Ambiente de desarrollo

- Clonar el repositorio 
- Ejecutar 
```
  yarn install
```
- Tener el CLI de nest instalado 
```
  npm i -g @nest/cli
```
- Levantar la base de datos con docker 
```
  docker-compose up -d 
```

- Cargar data inicial
```
  {{url}}/api/v1/sped/?limit=100
```

## Stack V
* nestjs
* MongoDB


## Documentacion 
https://documenter.getpostman.com/view/11189605/VUqoRz8x


## Produccion build

1. Crer archivo .env.prod
2. Llenar las variables de entorno:
   ```
      MONGO_URI=url de mongo
      PORT=puerto en el que desea correr la aplicacion
      JWT_SECRET= jwt de la aplicacion
      DEFAULT_LIMIT= llimite de registros por pagina por defecto
   ```