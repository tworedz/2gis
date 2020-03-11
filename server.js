const http = require('http');
const express = require('express');
const path = require('path');
const app = new express();

const hostname = '127.0.0.1';
const port = 3002;

app.use(express.static('static'));


app.get('/', function(request, response){
    responce.send("Helllo!");
});

app.listen(port, function () {
  console.log('Example app listening on port 4000!');
})
