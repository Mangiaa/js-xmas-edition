function probarValidarNombre(){
    console.assert(
        validarNombre("") === "Este campo debe tener al menos 1 caracter",
         "No esta bien hecha la funcion validar nombre con un solo caracter");

    console.assert(
        validarNombre('9384yhfdbkbiesdfhbedifudbsifjkbsdfikjcbfkxjcbsd;fkcdlfhlskndfm;ldskfnxc') === "Este campo debe tener menos de 50 caracteres",
         "No esta dando correctamente la funcion de mas de 50 caracteres")   
    console.assert(
        validarNombre('12134564123') === 'El campo nombre solo acepta letras',
        'No esta funcionando corre validar que tenga solo letras'
    )
}

probarValidarNombre()

function validarRegalo(){

    console.assert(
        validarDescripcionRegalo('1234465144661+415165465416543165416549865415321564886541230546516532106531653156316534165313216534156315632156321653416531532165341653215321563416534156316531531654156') === "El texto que ingresaste es muy largo",
        "No esta funcionando la validacion del regalo"
    )
    console.assert(validarDescripcionRegalo("") === "Por favor ingresa un texto valido",
        "No esta funcionando la funcion validarDescripcionRegalo con texto vacio"
    )
    console.assert(validarDescripcionRegalo('{%$chichuni')=== "Por favor ingrese un caracter valido",
        "No esta funcionando la funcion validarDescripcionRegalo con caracteres prohibidos"    
    )
    

}

validarRegalo()

function validarSeleccionDeCiudad(){
    console.assert(
        validarCiudad('') === "Por Favor ingrese una provincia",
        "No esta funcionando la validacion de la ciudad"
    )
}

validarSeleccionDeCiudad()
