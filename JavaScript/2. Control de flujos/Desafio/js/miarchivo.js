/// Desafio de la clase 2

// Declaración de constantes
const LIMIT1 = 1000
const MIN = 10
const MAX = 50

let number = parseInt(prompt("Ingrese un numero"))

if (number > LIMIT1){
    alert("El numero ingresado es correcto ")
} else {
    alert("El número ingresado debe ser mayor a " + LIMIT1 )
}

let text = prompt("Ingrese una palabra")

if (text == "Hola"){
    alert("El texto ingresado es correcto")
} else {
    alert("El texto que se debe ingresar es 'Hola' ")
}

number = parseInt(prompt("Ingrese un numero"))

if (number > MIN && number < MAX){
    alert("El numero ingresado es mayor a " + MIN + " y menor a " + MAX)
} else {
    alert("Debe ingresar un numero entre " + MIN + " y " + MAX)
}