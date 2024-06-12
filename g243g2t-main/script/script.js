const btn = document.querySelector("#btnlogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
    let usuraio = localStorage.getItem("usuario");
    if(usuraio){
        window.location.href = "http://www.uol.com.br";
    }
})();

btn.onclick = (e) =>{

    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return;
    }       
    if(usuario === "jesus"){
        if(senha === "123"){
            localStorage.setItem("usuario",usuraio);
            window.location.href = "http://www.uol.com.br";
        }else{
            inputUsuario.focus();
        }
    }
}