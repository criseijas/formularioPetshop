export const valida = (input) => {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("container-invalid")
    }else{
        input.parentElement.classList.add("container-invalid")
        input.parentElement.querySelector(".input-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }

}

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },

    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "Email inavalido. Incluye un signo @ en la dirección de correo electrónico y luego introduce texto después del signo @"
    },

    password: {
        valueMissing: "El campo password no puede estar vacío",
        patternMismatch: "Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número"
    },

    nacimiento: {
        valueMissing: "El campo nacimiento no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad"
    },

    telefono: {
        valueMissing: "El campo teléfono no puede estar vacío",
        patternMismatch: "El formato requerido es 11XXXXXXXX (10 números, agregando el 11 delante)"
    },

    direccion: {
        valueMissing: "El campo dirección no puede estar vacío",
        patternMismatch: "La dirección debe tener entre 5 y 40 caracteres"
    },

    ciudad: {
        valueMissing: "El campo ciudad no puede estar vacío",
        patternMismatch: "La ciudad debe tener entre 5 y 40 caracteres"
    },

    provincia: {
        valueMissing: "El campo ciudad no puede estar vacío",
        patternMismatch: "La provincia debe tener entre 5 y 40 caracteres"
    },

}

const validadores = {
    nacimiento: (input) => validarNacimiento(input)
}

const mostrarMensajeDeError = (tipoDeInput, input) =>{

    let mensaje = ""

    tipoDeError.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })

    return mensaje
}

const validarNacimiento = (input) => {
    const fechaCliente = new Date(input.value)

    let mensaje = ""
    
    if(mayorDeEdad(fechaCliente) == false){
        mensaje = "Debes tener al menos 18 años de edad"
    }

    input.setCustomValidity(mensaje)
    
}

const mayorDeEdad = (fecha) => {
    const fechaActual = new Date()

    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate())

    return diferenciaFechas <= fechaActual
}





































































