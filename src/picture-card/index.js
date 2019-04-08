var yo = require('yo-yo');
var moment = require('moment');

module.exports = function picturecard(pic) {
 var el;
function render(picture){
 return  yo`<div class="card ${picture.liked ? 'liked' : ''}">
  <div class="card-image">
    <img class="activator" src="${picture.url}">
  </div>
  <div class="card-content">
    <a href="/user/${picture.user.username}" class="card-title">Card Title>
    <img src="${picture.user.avatar}" class="avatar"/>
    <spam class="username">${picture.user.username}</spam>
    </a>
    <small class="right time">${moment(picture.createdAT).fromNow()}</small>
    <p>
      <a class="left" href="#" onclick=${like.bind(null,true)}><i class="fa fa-heart-o" arian-hidden="true"></i></a>
      <a class="left" href="#" onclick=${like.bind(null,false)}><i class="fa fa-heart" arian-hidden="true"></i></a>
      <span class="left likes">${picture.likes} me gusta</span>
    </p>
  </div>
</div>`;
}

function like(liked){
  pic.liked=liked;
  pic.likes+=liked ? 1:-1;
  var newEL = render(pic);
  yo.update(el,newEL);
  return false;
}

el=render(pic);
return el ;
}      