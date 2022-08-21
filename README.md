
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Developer

- clone repository 
- Execute 
```
  yarn install
```
- Nest CLI 
```
  npm i -g @nest/cli
```
- Run mongoDB with Docker 
```
  docker-compose up -d 
```

- Load initial data
```
  {{url}}/api/v1/sped/?limit=100
```

## Stack V
* nestjs
* MongoDB

## Produccion build

1. Create file .env.prod
2. Add the environment variables:
   ```
      MONGO_URI=
      PORT=
      JWT_SECRET= 
      DEFAULT_LIMIT= 
   ```

