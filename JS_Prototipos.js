class Personas {
    constructor(n, a, e) {
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
    }
    saludar() {
        console.log(`hola mi nombre es ${this.nombre}`);
    }

}
Personas.prototype.Despedir = function () {
    console.log(`chao mi edad es ${this.edad}`)
}
class Desarrollador extends Personas {
    saludar() {
        console.log(`hola mi nombre es ${this.nombre} y soy desarrollador`);
    }
}


persona1 = new Personas(prompt('Cual es tu Nombre'), prompt('Cual es tu Apellido'), parseInt(prompt('Cual es tu Edad')))
persona2 = new Desarrollador(prompt('Cual es tu Nombre'), prompt('Cual es tu Apellido'), parseInt(prompt('Cual es tu Edad')))



