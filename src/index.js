var page = require('page');


var main =document.getElementById('main-container')

page('/',function(){
main.innerHTML='home <a href="/signup">signup</a>'
})

page('/signup',function(ctx, next){
main.innerHTML='signup <a href="/">Home</a>'
    
})

page();