/*const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()

    if (usernameValue === ''){
        errorValidation(username, 'Preencha esse campo')
    }else{
        successValidation(username)
    }

    if(emailValue === ''){
        errorValidation(email, 'Preencha esse campo')
    }else{
        successValidation(email)
    }
}

function errorValidation(input, message){
    const formControl = input.parentElement;
    const small =  formControl.querySelector('small')

    small.innerText = message


    formControl.className = 'form-control error'
}

function successValidation(input){
    const formControl = input.parentElement;

    formControl.className='form-control success'
}*/

function abrirAlerta(){
    swal({
        title: "AVISO",
        text: "Após ler o conteúdo, você não poderá voltar atrás",
        icon: "warning",
    })
    .then((proximo)=>{
        if(proximo){
            window.location.replace("sla.html") 
        }
    })
}

