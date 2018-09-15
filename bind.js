// javascript Sourcecode
class Persona{
    constructor(nombre){
        this.nombre = nombre
    }
despedir(){
    console.log(`Adios ${this.nombre}`)
}

}
Persona.prototype.ayudar = function () {
    console.log(`Te ayudo en algo ${this.nombre}`)
}

function saludar(){
    console.log(`Mi nombre es ${this.nombre}`)
}

var persona1 = new Persona('Michael')

saludarMichael = saludar.bind(persona1)

var nombre = 'Sacha'
var apellido = 'Lifszyc'
function pasarAMayusculas(nombre){
    return nombre.toUpperCase()
  }
  pasarAMayusculas(nombre + ' ' + apellido)
  pasarAMayusculas('Lucía')
  pasarAMayusculas('')