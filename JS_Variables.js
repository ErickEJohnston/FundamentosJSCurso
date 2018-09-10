// Declarar variables
var saludo = 'Hola como estas', nombre = 'Michael';
saludo = saludo + ' bien y tu ?';
saludo += 'Bien!';

// metodos de string

var apellido = 'michael';
apellido = apellido.toUpperCase();
var primeraletra = apellido.charAt(0);
var cantidadletra = apellido.length;

//interpolar strings con comillas invertidas
primeraletra += `${cantidadletra}` // dentro de las llaves codigo javascript

var numero = 27;
numero++ // esto aumenta en uno sin reasignar
numerodivi = Math.round(numero / 3);