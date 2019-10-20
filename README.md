# TODO API

> Table of Contents:
>
> 1. Patterns and Ionic CSS Variables
>    - [Pattern Library](src/app/lib/patterns)
> 2. Branding
>    - [Logos](src/app/lib/patterns/atoms/logos)
>    - [Colors](src/app/lib/patterns/atoms/colors)
>    - [Typography](src/app/lib/patterns/atoms/typography)
>    - [Iconography](src/app/lib/patterns/atoms/iconography)
>    - [Ionic Grid Samples](src/app/lib/patterns/templates/grid)
> 3. Components
>    - [Ionic Components](src/app/lib/patterns/ionic-components)
>    - [Custom Internal Components](src/app/lib/patterns/atoms/cu-loader)
>    - [Angular Web Components](src/app/lib/patterns)

___

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

* Node.js and npm
* Docker
* Postman
* Mongo Compass

### Docker build

1. Open a terminal 
2. Navigate to project and run `npm install`
3. See what processes are running:

```
docker ps -a
```

4. Start Docker:

```
docker-compose up
```

### Run the container api

5. In a seperate terminal window run the Docker exec api:

```
docker-compose exec api bash
```

6. Set up a development image:

```
npm i -g nodemon
```

7. Run Nodemon:

```
nodemon -L app.js
```

### Postman and Mongo DB compass

8. Download Mongo DB Compass:

[https://www.mongodb.com/products/compass](Mongo DB Compass)

9. Download Postman:
[https://www.getpostman.com/](Postman)

