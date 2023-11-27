document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);
function iniciarSesion(){
var sCorreo = '';
var sContrasena = '';
var bAcceso = false;

sCorreo = document.querySelector('#txtcorreo').value;
sContrasena = document.querySelector('#txtcontrasena').value;
bAcceso = validarCredenciales (sCorreo, sContrasena);
if(bAcceso==true){
    ingresar();
}

}
function ingresar(){
    var rol=sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href='proyecto web.html';
            break;
    }
}