const http = require('http');
const express = require('express');
const path = require('path');
const app = new express();

const PORT = process.env.PORT || 3000


app.use(express.static('static'));


app.get('/', function(request, response){
    responce.send("Helllo!");
});

app.listen(PORT, function () {
  console.log('Example app listening on port 4000!');
})
