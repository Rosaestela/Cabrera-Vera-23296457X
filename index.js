function enviarFormulario() {
   console.log("ENVIADO");
    validarNombre();
    validarEmail();
    validarPassword();
    window.alert("La inscripción ha sido correcta");
}

function validarNombre() {
   
    let resultElement=document.getElementById('nameValidationResult');
    let resultIcon=document.getElementById("icon");
    let resultIconError=document.getElementById("icon-error");
    let nombre=document.getElementById('nombre');
     var valueNombre=nombre.value;

    resultIcon.style.display = 'icon';
    resultIconError.style.display = 'icon-error';  
   
    console.log(valueNombre);

    if (valueNombre.trim() !==""&& /^[a-zA-Z]*$/.test(valueNombre)) {
        
        console.log("Nombre Correcto");
        nombre.style.borderColor="green";
        resultElement.style.color="green";
        resultIcon.style.display="block";
        resultElement.innerHTML="";

    } else if (valueNombre.trim() === "") {
        console.log("rellenar");
        nombre.style.borderColor = "red";
        resultElement.style.color = 'red';
        resultElement.innerHTML = 'Rellenar este campo';
        resultIconError.style.display = 'block';
    

    } else{
        console.log("Nombre Incorrecto");
        nombre.style.borderColor = "red";
        resultElement.style.color = 'red';
        resultElement.innerHTML = 'El nombres solo puede tener letras.';
        resultIconError.style.display = 'block';

    }   
}


function validarEmail() {
   
    let resultElementEmail = document.getElementById('emailValidationResult');
    let email = document.getElementById('email');
    let resultIconEmail = document.getElementById('iconEmail');
    let resultIconErrorEmail = document.getElementById('iconErrorEmail');
    var valueEmail = email.value;

    resultIconEmail.style.display = "iconEmail";
    resultIconErrorEmail.style.display = 'iconErrorEmail';

    console.log(valueEmail);

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(valueEmail)) {
        console.log('Email Correcto');
        email.style.borderColor = 'green';
        resultElementEmail.innerHTML = "";
        resultIconEmail.style.display = 'block';

    } else if (valueEmail.trim() === "") {
        console.log("rellenar");
        email.style.borderColor = "red";
        resultElementEmail.style.color = 'red';
        resultElementEmail.innerHTML = 'Rellenar este campo';
        resultIconErrorEmail.style.display = 'block';

    } else {
        console.log('Email Incorrecto');
        email.style.borderColor = 'red';
        resultElementEmail.style.color = 'red';
        resultElementEmail.innerHTML = 'Email inválido';
        resultIconErrorEmail.style.display = 'block';
    }  

}

function validarPassword() {
    var valuePass= clave.value;
    var valuePassRequer = repClave.value;

    console.log("Password");

    let clave = document.getElementById('clave');
    let resultElementPass = document.getElementById('passValidationResult');

    let repClave = document.getElementById('repClave');
    let resultElementPassRequerid = document.getElementById('passRequeridValidationResult');

    let resultIconPas = document.getElementById("iconClave");
    let resultIconErrorPas = document.getElementById("iconErrorClave");


    let resultIconRep = document.getElementById('iconRepClave');
    let resultIconErrorRep = document.getElementById("iconErrorRepClave");

    resultIconPas.style.display = 'none';
    resultIconErrorPas.style.display = 'none';

    resultIconRep.style.display = 'none';
    resultIconErrorRep.style.display = 'none';

    console.log(valuePass);
    console.log(valuePassRequer);

    if (/^.{1,8}$/.test(valuePass)) {
        console.log('Clave Correcta');
        clave.style.borderColor = 'green';
        resultElementPass.innerHTML = "";
        resultIconPas.style.display = 'block';

        if (valuePass === valuePassRequer) {
            console.log('ClaveReq Correcta');
            repClave.style.borderColor = 'green';
            resultElementPassRequerid.innerHTML = '';
            resultIconRep.style.display = 'block';

        } else if (valuePassRequer.trim() === '') {
            console.log('Campo Vacio');
            repClave.style.borderColor = 'red';
            resultElementPassRequerid.style.color = 'red';
            resultElementPassRequerid.innerHTML = 'Rellenar este campo';
            resultIconErrorRep.style.display = 'block';

        } else {
            console.log('ClaveReq Incorrecta');
            repClave.style.borderColor = 'red';
            resultElementPassRequerid.style.color = 'red';
            resultElementPassRequerid.innerHTML = 'Las contraseñas no coinciden';
            resultIconErrorRep.style.display = 'block';
        }

    } else if (valuePass.trim() === "") {
        console.log('Campo Vacio');
        clave.style.borderColor = 'red';
        resultElementPass.style.color = 'red';
        resultElementPass.innerHTML = 'Rellenar este campo';
        resultIconErrorPas.style.display = 'block';

        if (valuePassRequer.trim() === '') {
            console.log('Campo Vacio');
            repClave.style.borderColor = 'red';
            resultElementPassRequerid.style.color = 'red';
            resultElementPassRequerid.innerHTML = 'Rellenar este campo';
            resultIconErrorPas.style.display = 'block';

        }

    } else {
        console.log('Clave Incorrecta');
        clave.style.borderColor = 'red';
        resultElementPass.style.color = 'red';
        resultElementPass.innerHTML = 'No debe tener más de 8 caracteres';
        resultIconErrorPas.style.display = 'block';
    }
}