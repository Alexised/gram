var page = require('page');
var empty = require("empty-element");
var template = require("./template")
var title = require('title')

page('/', function (ctx, next) {
    title('Gram');
    var main = document.getElementById('main-container')
    empty(main).appendChild(template);

})