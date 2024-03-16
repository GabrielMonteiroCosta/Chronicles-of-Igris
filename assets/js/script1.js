function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg"; /* Aqui ele vai alterar o icone após clicar no botão */
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"; /* Aqui ele vai alterar o icone após clicar no botão */
    }
}

const container = document.getElementById('container');
const cadastro = document.getElementById('cadastrobtn');
const escondido = document.getElementById('loginbtn');

cadastrobtn.addEventListener('click', ()=> {
    container.classList.add("active");
}) 

loginbtn.addEventListener('click', ()=> {
    container.classList.remove("active");
}) 

function  logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "gabs@gmail.com" && senha == "gab"){
        alert("Sucesso!!!");
        location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos.")
    }
}

function criarConta(){
    var novaSenha = document.getElementById('novaSenha').value;
    var novaSenhaConfirm = document.getElementById('novaSenhaConfirm').value;

    if(novaSenha != novaSenhaConfirm){
        alert("As senhas precisam ser idênticas!")
    } else {
        alert("Usuário cadastrado com sucesso!")
    }
}

const modal = document.querySelector('modal-container')

function openModal(){
    modal.classList.add('active');
}

function closeModal(){
    modal.classList.remove('active');
}