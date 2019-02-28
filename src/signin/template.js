var yo = require('yo-yo'); 
var landing= require('../landing')
var signinForm= yo`<div class="col s12 m7">
<div class="row">
    <div class="signup-box">
        <h1 class="plazigram">Plazigram</h1>
        <form class="signup-form">
            <div class="section">
                <a class="btn btn-fb hide-on-small-only">Iniciar sesión con facebook</a>
                <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook"></i> Iniciar sesión</a>
            </div>
            <div class="divider"></div>
            <div class="section">
                <input type="text" name="username" placeholder="Nombre de usuario"/>
                <input type="password" name="password" placeholder="Contraseña"/>
                <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Sesión</button>
            </div>
        </form>
    </div>
</div>
<div class="row">
    <div class="login-box">
        ¿No Tienes una cuenta ?<a href="/signup"> Registrate</a>
    </div>
</div>
</div>`;

module.exports = landing(signinForm);








