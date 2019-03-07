var page = require('page');
var empty = require("empty-element");
var template = require("./template")
var title = require('title')

page('/', function (ctx, next) {
    title('Gram');
    var main = document.getElementById('main-container')
    var pictures = [
       { user:{
           username:'alexis',
           avatar:'https://avatars2.githubusercontent.com/u/15174727?s=460&v=4'
       },
       url:'https://b3co.com/wp-content/uploads/2017/12/MG_0198-e1533329119250-1400x500.jpg',
       likes:10,
       liked:true    
       },   { user:{
        username:'alexis',
        avatar:'https://avatars2.githubusercontent.com/u/15174727?s=460&v=4'
    },
    url:'https://b3co.com/wp-content/uploads/2018/08/dji_1752-e1533323843543-1400x500.jpg',
    likes:1,
    liked:true    
    },
    ];
    empty(main).appendChild(template(pictures));

})