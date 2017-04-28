# Where is my driver

A ridesharing app like api created using node js.

# What is it?
  - It's a secret procject
  - It meets the given requirement
  - I can still improve the codebase overtime ;)

### Tech

This API uses a number of open source projects to work properly:
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [mocha] - the test framework
* [chaijs] - assertion framework for mocha
* [body-parser] - Node.js body parsing middleware.
* [mongoose] - MongoDB object modeling tool designed to work in an asynchronous environment.
* [morgan] - HTTP request logger middleware for node.js
* [nodemon] - Saviour during app development
* [javascript] - duh!

### Installation

This API requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd WhereIsMyDriver
$ npm install
$ node index.js
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node index
```

### Docker
This API is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3000, so change this within the Dockerfile if necessary. When ready, simply use the docker compose to build the image.

```sh
cd WhereIsMyDriver
docker-compose up --build
```
In this example, we simply map port 3000 of the host to port 3000 of the Docker (or whatever port was exposed in the Dockerfile):

Verify the deployment by navigating to your server address in Postman/Insomnia.

```sh
http://localhost:3000/drivers
```

### Todos

 - SSL everything
 - JWT Stateless auth
 - MOAR Tests
 - Deploy to AWS

License
----

MIT

**Free Software, Hell Yeah!**