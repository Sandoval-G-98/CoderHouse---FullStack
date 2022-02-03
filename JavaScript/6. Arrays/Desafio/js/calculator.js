import { Investment } from "./models/investment.js";

document
  .querySelector("#calcular")
  .addEventListener("click", function calculate() { 

    let startingAmount = parseInt(document.getElementById("startingAmount").value)
    let monthlyAdition = parseInt(document.getElementById("monthlyAdition").value)
    let yearsTocalculate = parseInt(document.getElementById("yearsToCalculate").value)
    let interest = parseInt(document.getElementById("interest").value);

    console.log()

    const invest = new Investment(
    startingAmount,
    monthlyAdition,
    yearsTocalculate,
    interest);

    let totalAmount = invest.calculateInterest();

    if (totalAmount != -1){

        console.log(`Su capital luego de ${yearsTocalculate} años es de ${totalAmount}`); 

        console.log("Su patrimonio por año: ")

        for(let year = 1; year <= invest.yearsTocalculate; year++){
            console.log(`año: ${year} --> ${invest.amountPerYear[year-1]}`)
        }

        let answer
        do{

            answer = prompt(" ¿ Desea ver el desglose por mes de algún año en especifico ? (si/no)")
            answer = answer.toLowerCase()
            if(answer == "si") {
                let yearToBreakDown = prompt("Ingrese el año deseado")
                if( !isNaN(yearToBreakDown) && yearToBreakDown != "" && (yearToBreakDown > 0 && yearToBreakDown <= invest.amountPerYearWithMonths.length)) {
                    console.log(`Desglose del año ${yearToBreakDown}`)
                    for(let month = 0; month < 12; month++){
                        console.log(`mes: ${month+1} --> ${invest.amountPerYearWithMonths[yearToBreakDown-1][month]}`)
                    }
                } else {
                    console.log("El año escogido no es el correcto")
                }
                break
            } else if(answer == "no"){
                console.log("Adios :)")
                break
            }

        }while(answer != "si" || answer != "no")

    } else 
        console.log("Error en el ingreso de información");
  });
