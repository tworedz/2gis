const http = require('http');
const express = require('express');
const path = require('path');
const app = new express();

const PORT = process.env.PORT || 5000


app.use(express.static('static'));


app.get('/', function(request, response){
    response.send("Hello");
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
})
