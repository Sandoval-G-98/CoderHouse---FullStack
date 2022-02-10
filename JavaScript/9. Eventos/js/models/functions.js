import { Investment } from "../class/investment.js";

export function showGraphicAllYears(){

    let startingAmount = parseInt(document.getElementById("startingAmount").value)
    let monthlyAdition = parseInt(document.getElementById("monthlyAdition").value)
    let yearsTocalculate = parseInt(document.getElementById("yearsToCalculate").value)
    let interest = parseInt(document.getElementById("interest").value);
    let wishedAmount = parseInt(document.getElementById("wishedAmount").value)
    
    let invest = new Investment(startingAmount, monthlyAdition, yearsTocalculate, interest, wishedAmount)

    invest.calculateInterest()
    
    if(invest.amountPerYear.length > 0){
        
        document.getElementById("graphic-all-years").innerHTML = "Gráfico del interes compuesto total"
        
        let yearsArray = []
        
        for(let year = 1; year <= invest.amountPerYear.length; year++)
            yearsArray.push(year)

        var data = [
            {
              x: yearsArray,
              y: invest.amountPerYear,
              type: "bar"
            }
          ];
        
        var layout = { 
          title: 'Ahorro por año',
          font: {size: 18}
        };
        
        var config = {responsive: true}
          
          Plotly.newPlot("Graphic", data, layout, config);
    }
}

export function calculate() {
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

                alert(`Felicidades! Su monto deseado fue alcanzado el año ${yearWishedAmount}`)
            } else {
                alert("No llegó a su monto deseado :( , es momento de invertir más")
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
