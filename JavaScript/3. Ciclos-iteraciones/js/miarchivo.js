
let numbersTableMult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
let numToMult = 1
let number
let isResultCorrect = false
const LIMIT_TO_MULT = 10

do{
    number = parseInt(prompt("Ingrese con que tabla quiere trabajar (tabla de multiplicar del 1 al 10)"))
}while( isNaN(number) || (number < 1 || number > 10))
 
do {
    alert(number + " * " + numToMult + " = ?")
    result = parseInt(prompt("Ingrese el resultado"))
    if(result == (number * numToMult)){
        isResultCorrect = true
        numToMult++
    } else 
        isResultCorrect = false

}while(!isResultCorrect || numToMult <= LIMIT_TO_MULT)

alert("Felicitaciones! completaste la tabla del " +  number + " exitosamente")