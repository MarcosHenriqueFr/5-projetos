
const form = document.querySelector("form");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const divGeral = document.getElementById("container-geral");
const loginInfo = document.getElementById("loginInfo");

//Só vai acontecer depois de pressionar o botão
form.addEventListener("submit", event => {

    event.preventDefault();
    
    let segurarSenha = String(senha.value);
    let segurarUsuario = String(usuario.value);

    const aprovEmail = checarEmail(segurarUsuario);
    const aprovSenha = checarSenha(segurarSenha);
    
    if(aprovEmail && aprovSenha){
        loginInfo.innerHTML = "";
        console.log(loginInfo);
        
        const h2 = document.createElement("h2");
        h2.textContent = "Você logou com sucesso!!";
        loginInfo.appendChild(h2);
    } else {
        throw new Error("Suas credenciais estão erradas!!!");
    }
});

function checarEmail(usuarioinput){
    //meu regex
    const emailval = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const aprovado = emailval.test(usuarioinput);

    usuario.parentElement.classList.remove("verde", "vermelho");
    if(aprovado){
        usuario.parentElement.classList.add("verde");
    } else {
        usuario.parentElement.classList.add("vermelho");
    }

    return aprovado ? true : false;
}

function checarSenha(senhainput){

    senhainput = senhainput.trim();

    const aprovado = senhainput.length == 8 ? true : false;

    senha.parentElement.classList.remove("verde", "vermelho");
    if(aprovado){
        senha.parentElement.classList.add("verde");
    } else {
        senha.parentElement.classList.add("vermelho");
    }

    return aprovado ? true : false;
}