import userLogin from "./moduloDados.js";


const alertaLogin = new bootstrap.Modal('#alertaLogin');

const entrarUsuario = document.getElementById("btnEntrar");

entrarUsuario.addEventListener("click", _event =>{
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let validaLogin = userLogin.find(userLogin => userLogin.userName == login);
    if(login == validaLogin.userName && senha == validaLogin.senha){
        window.location.pathname="/app.html"
    } else {
        alertaLogin.show();
    }
});




// do professor
// function loginForm() {
    
    
//     if(login == validaLogin.userName && senha == validaLogin.senha){
//         alert("Parabéns está Logado");
//         window.location.pathname="/app.html"
//     } else {
//         alertaLogin.show();
//     }}



// function loginForm(){  //meu jeito
//     let login = document.getElementById("login").value;
//     let senha = document.getElementById("senha").value;
//     for(var i = 0; i < userLogin.length; i++){
//     if(login == userLogin[i].userName && senha == userLogin[i].senha){
//         alert("Parabéns está Logado");
//         break;
//     } else {
//         alertaLogin.show();
//     }}
//     console.log(userLogin);
//     console.log(login);
//     console.log(senha);
// }
