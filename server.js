const http = require('http');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');


const app = new express();

const PORT = process.env.PORT || 5000


app.use(express.static('static'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/debug', (req, res) => {
    let body = req.body;
    if (body.latitude && body.longitude && body.data){
      res.status(200).json({
        message: "Succesfully get data",
        data: body
      });
    }else{
      res.status(400).json({
        message: "Error. Bad request"
      })
    }
});


app.post('/to_map', (req, res) => {
    let body = req.body;
    if (body.latitude && body.longitude && body.data){

      res.status(200).json({
        message: "Succesfully get data"
      });
    }else{
      res.status(400).json({
        message: "Error. Bad request"
      })
    }
});


app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
})
