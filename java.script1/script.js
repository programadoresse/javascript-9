'use strict'
document.write('<h1>Hola mundo</h1>')

// Tipos de datos
// cadena
;('Hola Mundo')
;('Hola Mundo')

// Número
10000
;-2.3

// Booleano
true
false

// Objeto
const objeto = {
 nombre: 'will',
 valor1: 99.99,
 valor2: 35,
}

// Variables
var nombre = 'william'
let apellido = 'Ramirez'
nombre = 'fabian'
const PI = 3.1415
console.log(nombre)
console.log(apellido)
console.log(PI)

// Estuche de camellos
let nombreUsuario = 'AAAA'
var lastNameOfPerson = 'skibidi'

// Operadores
let NumeroUno = 1
let NumeroDos = 2
let resultado = NumeroUno + NumeroDos
console.log(resultado)

let name = 'will'
let apellido2 = 'smith'
let resultt = namee + apellido2
console.log(resultt)

let contraseña = 'programador89'
let entrada = 'programador89'
let resulttt = entrada === contraseña
console.log(resulttt)

if (resulttt === true) {
 console.log('Inicio de sesión correcto')
} else {
 console.log('Inicio de sesión incorrecto')
}

let puntuacion = 70
if (puntuacion > 30) {
 console.log('Estás bien')
} else {
 console.log('Estas mal')
}

let tipoCard = 'Tarjeta de débito'
switch (tipoCard) {
 case 'Tarjeta bancolombia':
  console.log('Trakaa')
  break
 case 'Tarjeta de débito':
  console.log('Síííí')
  break
 default:
  console.log('¿Qué estás usando?')
  break
}

// Iteradores
let cuenta = 1
while (cuenta < 50) {
 console.log(cuenta)
 cuenta++
}

let nombres = ['william', 'will', 'sara']
console.log(nombres.length)
for (let i = 0; i < nombres.length; i++) {
 console.log(nombres[i])
}

// Funciones
function saludo() {
 console.log('Hola')
}
saludo()
