var yo = require('yo-yo');

module.exports = function (pic) {
    return yo`<div class="card">
  <div class="card-image">
    <img class="activator" src="${pic.url}">
  </div>
  <div class="card-content">
    <a href="/user/${pic.user.username}" class="card-title">Card Title>
    <img src="${pic.user.avatar}" class="avatar"/>
    <spam class="username">${pic.user.username}</spam>
    </a>
    <small class="right time">Hace 1 dia</small>
    <p>
      <a class="left" href="#"></a>
    </p>
  </div>
 
</div>`;
}      