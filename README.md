# Search-app boilerplate
Simple boilerplate for a search app using react, express, sequelize (orm) and postgres. Deployed via docker.

## Demo 🚀
<a href="https://google.com" target="_blank">Running demo</a>

## Why?
Serve as starting point for similar apps or just code-reference for similar implementations.

## How to run
### 📲 Dependencies
- `docker` and `docker-compose`
- `node` and `npm`
- `git`

### Starting the app
- clone the repo `git clone https://github.com/Agezao/search-app-boilerplate.git`
- run `npm start` at root of this project
- It will automatically run `docker-compose` wich will build, migrate DDL, seed DML and deploy two images, one for `pg-database` and one with `express api + react app`
- After `docker-compose` do his job, the app will be live at `http://localhost:8080`

## General notes
Using `postgres` as database and using sequelize as ORM, extending sequelize `migrations` and `data seed`, so we can have logs about database changes _(old problem with distributed dev teams)_ and also having `database-as-code` making it easy to setup new environments and maintain running ones. Basic diagram can be found at `/database/diagram.jpg`

API built with express and with consistency and longevity in mind (using validations, error management, and many other resources). Dive into the express setup and booting to know more of what's happening under the hood. API documentation live ar `localhost:8080/api/api-docs`, the docs where built with swagger and using swagger generator for convenience and clarity between the dev team on the development time.

# 
_thanks for reading_
