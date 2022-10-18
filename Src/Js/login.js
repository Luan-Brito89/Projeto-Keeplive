var form = document.querySelector("#form");
var username = document.querySelector("#input-form-email");
var password = document.querySelector("#input-form-password");



form.addEventListener("submit", (e)=>{
    
    var usuario = username.value;
    var senha = password.value;

    if(usuario === 'admin' && senha ==='admin'){
        localStorage.setItem(usuario,senha);
    } else{
        e.preventDefault();
        var error = document.querySelector("#error");
        error.innerText = "Ops, usuário ou senha inválidos. Tente novamente!"
        error.classList.add("error");
    }

})

// var inputNome = document.getElementById('input-form-email');
		
// inputNome.addEventListener('invalid', function() {
//         inputNome.setCustomValidity('Somente Letras Minúsculas!');
// }, false);

// inputNome.addEventListener('change', function() {
//         inputNome.setCustomValidity('');
// }, false);