var counter = 0; 

const llueve = () => Math.random() < 0.25 // es un return si no se ponen llaves para el algoritmo

do {
    counter++
} while (!llueve())

console.log(`le dijiste a ${counter} personas y el ultimo fua a ver si llovia`)

signo = prompt('¿Cual es tu signo?').toLowerCase()

switch (signo) {
    case 'acuario':
        console.log('eres acuario');
        break;
    case 'tauro':
        console.log('eres tauro');
        break;
    default:
        console.log('Eso no es un signo');
}