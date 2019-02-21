var express = require("express");

var app = express();
app.set('view engine','pug');
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('index');
});

app.get('/signup', function(req,res){
    res.render('index');
});

app.get('/signin', function(req,res){
    res.render('index');
});

app.listen(3000,function(err){
    if(err) return console.log("hubo un error"), process.exit(1);
    console.log("escuchando en el puerto 3000");
});