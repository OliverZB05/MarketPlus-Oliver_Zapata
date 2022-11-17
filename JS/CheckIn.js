let CheckIn1 = document.getElementById("CheckIn1");
let CheckIn2 = document.getElementById("CheckIn2");
let CheckIn3 = document.getElementById("CheckIn3");

let SendButton = document.getElementById("SendButton");

function SaveData(){

SendButton.onclick = () =>{
    
    if(CheckIn1.value != "" && CheckIn2.value != "" && CheckIn3.value != ""){
        
        Swal.fire(
            '¡Enviado con éxito!',
            'Formulario enviado con éxito',
            'success'
        );

        localStorage.setItem("Nombre", CheckIn1.value);
        localStorage.setItem("Email", CheckIn2.value);
        localStorage.setItem("Contraseña", CheckIn3.value);
        location.href = "../index.html";
    }
    
    if(CheckIn1.value == "" && CheckIn2.value != "" && CheckIn3.value != ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta completar el campo de nombre',
        });
    }

    if(CheckIn1.value != "" && CheckIn2.value == "" && CheckIn3.value != ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta completar el campo de email',
        });
    }

    if(CheckIn1.value != "" && CheckIn2.value != "" && CheckIn3.value == ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta completar el campo de contraseña',
        });
    }

    if(CheckIn1.value == "" && CheckIn2.value == "" && CheckIn3.value != ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta completar el campo de nombre y email',
        });
    }

    if(CheckIn1.value == "" && CheckIn2.value != "" && CheckIn3.value == ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta completar el campo de nombre y contraseña',
        });
    }

    if(CheckIn1.value != "" && CheckIn2.value == "" && CheckIn3.value == ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta completar el campo de email y contraseña',
        });
    }

    if(CheckIn1.value == "" && CheckIn2.value == "" && CheckIn3.value == ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar los campos',
        });
    }
}

} 

SaveData();