# Full Stack Case


# TOPIC  "TODO" 



### Installation

requires [Node.js](https://nodejs.org/) v12.13.0+ to run.

This project use monorepo with lerna 
```sh
$ npm install -g lerna 
```

### Installation With Lerna Bootstrap
```sh
$ lerna bootstrap
```
### Or Install Manually

Install the dependencies and devDependencies and start the server.
API
```sh
$ cd packages/api-todos
$ npm install 
```

Gateway
```sh
$ cd packages/gateway
$ npm install 
```

For react APP...

```sh
$ cd packages/todo-app
$ npm install 
```

### How to run using lerna
```sh
$ lerna run start
```

or run manually each project
```sh
$ cd packages/api-todos
$ npm start

$ cd packages/gateway
$ npm start

$ cd packages/todo-app
$ npm start
```
