// JavaScript source code
class Persona  {
    constructor (edad) {
        this.edad = edad
    }
}
var persona1 = new Persona(prompt('cual es tu edad'))
function esMayorEdad(persona) {
    var mensaje

    if (persona.edad > 18) {
        mensaje = 'es mayor de edad'
        console.log(mensaje)
    } else {
        mensaje = 'es menor de edad'
        console.log(mensaje)
    }
   
}

esMayorEdad(persona1)
