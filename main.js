/*
const form = document.getElementById('form-valores');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    if(numeroB.value > numeroA.value){
        alert("Valido")
        numeroB.value = ''; 
        numeroA.value = '';
    }
    else{
        alert("Não valido")
        numeroB.value = ''; 
        numeroA.value = '';
    }
})
*/

const form = document.getElementById('form-valores');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const mensagemValido = `Numero B <b>${numeroB.value}</b> é maior que Numero A <b>${numeroA.value}</b>`;
    if(parseInt(numeroB.value) > parseInt(numeroA.value)){
        const mensagemValidar = document.querySelector('.sucess-message');
        mensagemValidar.innerHTML = mensagemValido;
        mensagemValidar.style.display = 'block';
        numeroB.value = ''; 
        numeroA.value = '';
    }
    else{
        numeroB.style.border = '1 px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numeroB.addEventListener('keyup', function(e){
    if (parseInt(numeroB.value) <= parseInt(numeroA.value)){
        numeroB.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    }
    else{
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})