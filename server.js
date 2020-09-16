const express = require('express') // importando a dependencia
const nunjucks = require('nunjucks')
const routes = require('./routes') // ./ Raiz do projeto
//const { request } = require('express');
const server = express() // criando server, ele irá executar o server

server.set("view engine", "njk") // tipo de template de visualização njk

server.use(express.static("public")) // servidor, use um tipo estatico
server.use(routes) // midlleware

nunjucks.configure("views", { // consigurando o nunjucks
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function(){ // iniciando servidor
    console.log('server is running')
})