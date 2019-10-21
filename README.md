# TODO API
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

