var express = require("express");

var app = express();

app.get('/', function(req,res){
    res.send('servidor activo ');
});

app.listen(3000,function(err){
    if(err) return console.log("hubo un error"), process.exit(1);
    console.log("escuchando en el puerto 3000");
});