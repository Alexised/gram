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
       url:'https://materializecss.com/images/office.jpg',
       likes:125,
       liked:true    
       },   { user:{
        username:'alexis',
        avatar:'https://avatars2.githubusercontent.com/u/15174727?s=460&v=4'
    },
    url:'https://materializecss.com/images/office.jpg',
    likes:125,
    liked:true    
    },
    ];
    empty(main).appendChild(template(pictures));

})