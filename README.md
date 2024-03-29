# Registro de clientes

## Principais ferramentas
- NodeJS v20
- NextJS 14 / React 18

## Banco de dados

Para executar um servidor com banco de dados de exemplo para desenvolvimento, podemos usar o [Docker](https://www.docker.com/) executando o seguinte comando:

```bash
docker-compose up
```

## Backend

É necessário criar um arquivo com as váriveis de ambiente chamado ```.env.local``` dentro da pasta ```backend``` e nele configurar as seguintes váriaveis (com valores de exemplo):

```
PORT=5000
PG_CONNECTION_STRING=postgresql://postgres:1234@localhost:5432/postgres
```

Para executar um ambiente de desenvolvimento, execute o seguintes comandos:

```bash
cd backend
yarn
yarn dev
```

E para executar uma build otimizada para produção, execute os seguintes comando:

```bash
cd backend
yarn
yarn build
yarn start
```

## Frontend

É necessário criar um arquivo com as váriveis de ambiente chamado ```.env.local``` dentro da pasta ```frontend``` e nele configurar as seguintes váriaveis (com valores de exemplo):

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Para executar um ambiente de desenvolvimento, execute o seguintes comandos:

```bash
cd frontend
yarn
yarn dev
```

E para executar uma build otimizada para produção, execute os seguintes comando:

```bash
cd frontend
yarn
yarn build
yarn start
```