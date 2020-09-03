/*const comportamiento = document.querySelectorAll('[name=comportamiento') //! OBTENIENDO EL VALOR DE UN RADIOBUTTON CON UN FOR
console.log(comportamiento)
let resultado= ""
function obtenerRadio(){
    for(let i = 0;i<comportamiento.length;i++){
        if(comportamiento[i].checked){
            console.log(comportamiento[i].value)
            resultado = comportamiento[i].value
        }
        
    }
    return resultado
}

let resultadoFinal = obtenerRadio()

alert(resultadoFinal)*/



function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter"
    }
    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres"
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo nombre solo acepta letras'
    }
    return ""
}




function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "El texto que ingresaste es muy largo"
    } else if (descripcionRegalo.length === 0) {
        return "Por favor ingresa un texto valido"
    } else if (!/^[a-z0-9,\._ ]+$/i.test(descripcionRegalo)) {
        return "Por favor ingrese un caracter valido"
    }
    return ''
}



function validarCiudad(ciudad) {
    if (ciudad === "") {
        return "Por Favor ingrese una provincia"
    }
    return ""
}

const $form = document.querySelector('#carta-a-santa')

function validarFormulario(event) {

    event.preventDefault()

    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value
    const descripcionRegalo = $form['descripcion-regalo'].value


    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)


    const objetoErrores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = manejarErrores(objetoErrores) === 0;        //! COMPARO, SI TIENE ERRORES != EXITO, SI ES === 0 ESTONCES ES EXITOSO Y EN 5 SEGUNDOS LO MANDO A WISHLIST
    if(esExito){
        document.querySelector('#carta-a-santa').remove()
        const $divExito = document.querySelector('#exito')
        $divExito.className = ""
        
        setTimeout(() => {
            window.location.assign("wishlist.html")
        }, 5000);
    }
}



function manejarErrores(errores) {
    let contadorErrores = 0
    const $errores = document.querySelector('#errores')
    const keys = Object.keys(errores)
    
    while($errores.hasChildNodes()){
        $errores.removeChild($errores.firstChild);
    } 
    keys.forEach(function (key) {
        const error = errores[key]

        if (error) {
            contadorErrores++
            $form[key].className = 'error'
            let liErrores = document.createElement('li')
            liErrores.textContent = error
            $errores.appendChild(liErrores)
            

        } else {
           console.log('Exito!')
            $form[key].className = ''
            
        }
        
    })

    return contadorErrores
}

$form.onsubmit = validarFormulario
