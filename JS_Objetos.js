function Persona(n, a, e) {
    this.nombre = n;
    this.apellido = a;
    this.edad = e
};

michael = new Persona('Michael', 'Betancourt', 27)
console.log(`${michael.nombre} ${michael.apellido} edad ${michael.edad}`)

x = 4 
y = '4'
x == y // true
x === y // false

function Condicinales(p) {

    if (p.edad >= 18) {
        console.log('Felicidades eres mayor de edad');
    }
    else {
        console.log('Felicidades No Tienes la edad justa');
    }

}

// arrow functions

const FFlecha = ({ apellido }) => {
    console.log(apellido);
}

Condicinales(michael);

for (var i = 1; i <= michael.edad; i++) {
    console.log(`que cumpla ${i}`)

}
while (michael.edad != 30) {
    console.log(`vuelve el proximo año tu edad es ${michael.edad}`)
    michael.edad++
    if (michael.edad == 30) {
        console.log(`felicidades tu edad es ${michael.edad}`)
    }

}

arreglo1 = ['algo', 1, 2, 4, 3];