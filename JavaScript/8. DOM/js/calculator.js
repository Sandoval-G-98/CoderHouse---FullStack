import { Investment } from "./models/investment.js";
import { showGraphicAllYears } from "./models/chartAllYears.js"

let btnCalculate = document.getElementById("calculate")

btnCalculate.addEventListener("click", calculate)
btnCalculate.addEventListener("click", showGraphicAllYears)

function calculate() {
    let startingAmount = parseInt(document.getElementById("startingAmount").value)
    let monthlyAdition = parseInt(document.getElementById("monthlyAdition").value)
    let yearsTocalculate = parseInt(document.getElementById("yearsToCalculate").value)
    let interest = parseInt(document.getElementById("interest").value)
    let wishedAmount = parseInt(document.getElementById("wishedAmount").value)

    startCalculate(startingAmount, monthlyAdition, yearsTocalculate, interest, wishedAmount)
}

function startCalculate( startingAmount, monthlyAdition, yearsTocalculate, interest, wishedAmount) {

    const invest = new Investment(
        startingAmount,
        monthlyAdition,
        yearsTocalculate,
        interest,
        wishedAmount);
    
        let totalAmount = invest.calculateInterest();
    
        if (totalAmount != -1){

            if(isWishedAmountReached(invest.wishedAmount, invest.amountPerYear) == true){
                
                let amountThatOverAmountWished = invest.amountPerYear.find( (amount) => amount === ((invest.amountPerYear.filter( amount => amount > invest.wishedAmount))[0]) )

                let yearWishedAmount = invest.amountPerYear.indexOf(amountThatOverAmountWished) + 1

                console.log(`Felicidades! Su monto deseado fue alcanzado el año ${yearWishedAmount}`)
            } else {
                console.log("No llegó a su monto deseado :( , es momento de invertir más")
            }

            let labelTotalAmount = document.getElementById("amountPerYear")

            labelTotalAmount.innerHTML = `Su capital luego de ${yearsTocalculate} años es de $${totalAmount}`
            
            showAmounts(invest.amountPerYear, yearsTocalculate);

            validateAndShowInvestYearBreakdow(invest)

        } else 
            console.log("Error en el ingreso de información");
}

function showAmounts(amountPerYear, yearsTocalculate) {
    let listAmountsPerYear = document.getElementById("amountPerYear")

    for(let year = 1; year <= yearsTocalculate; year++){
        const liAmounts = document.createElement("li");
        liAmounts.textContent = `año: ${year} --> ${amountPerYear[year-1]}`
        listAmountsPerYear.appendChild(liAmounts)
    }
}

function showBreakDownYear(amountPerYearWithMonths, yearToBreakDown){

    let breakdownYear = document.getElementById("breakdownYear")

    breakdownYear.innerHTML = `Desglose del año ${yearToBreakDown}`

    let listBreakDownYear = document.getElementById("listBreakDownYear")

    for(let month = 0; month < 12; month++){
        const liBreakDownYear = document.createElement("li");
        liBreakDownYear.textContent = `mes: ${month+1} --> ${amountPerYearWithMonths[yearToBreakDown-1][month]}`
        listBreakDownYear.appendChild(liBreakDownYear)
    }

}

function isWishedAmountReached(wishedAmount, amountPerYear) {

   const result = amountPerYear.filter( amount => amount > wishedAmount)
   
   if(result.length > 0) return true 
   
   return false
}

function validateAndShowInvestYearBreakdow(invest){
    let answer
    do{

        answer = prompt(" ¿ Desea ver el desglose por mes de algún año en especifico ? (si/no)")
        answer = answer.toLowerCase()

        if(answer == "si"){
            let yearToBreakDown = prompt("Ingrese el año deseado")
            if( !isNaN(yearToBreakDown) && yearToBreakDown != "" && (yearToBreakDown > 0 && yearToBreakDown <= invest.amountPerYearWithMonths.length)) {
                showBreakDownYear(invest.amountPerYearWithMonths, yearToBreakDown)
                break
            } else {
                console.log("El año escogido no es el correcto")
            }
        }
        else if(answer == "no"){
            console.log("Adios :)")
            break
        }

    }while(answer != "si" || answer != "no")
}