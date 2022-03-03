import { Investment } from "../class/investment.js";

/// Funciones para calcular la inversion

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

                document.getElementById("messageAmountWished").innerText = `Felicidades! Su monto deseado fue alcanzado el año ${yearWishedAmount}`
            } else {
                document.getElementById("messageAmountWished").innerText = "No llegó a su monto deseado :( , es momento de invertir más"
            }
            
            let labelTotalAmount = document.getElementById("amountPerYear")

            labelTotalAmount.innerHTML = `Su capital luego de ${yearsTocalculate} años es de $${totalAmount}`
            
            showAmounts(invest.amountPerYear, yearsTocalculate);

            showGraphicAllYears(invest)

            validateAndShowInvestYearBreakdow(invest)
        }
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
   
    return  result.length > 0 ? true : false 
}

function validateAndShowInvestYearBreakdow(invest){

    document.getElementById("messageBreakdownYear").style.visibility = "hidden"

    let titleBreakDownYear = document.getElementById("titleBreakDownYear")
    
    titleBreakDownYear.innerText = "¿Desea ver el desglose por mes de algún año en especifico? (si/no)"

    let formBreakdownYear = document.getElementById("form-breakdown-year")

    formBreakdownYear.innerHTML = '<input type="text" name="question breakdown year" id="questionBreakDownYear"/> <button id="buttonQuestionBreakDownYear" type="button">Confirmar</button> </form>'
    
    validateAnswerBreakdownYear(invest)
}

function validateAnswerBreakdownYear(invest) {

    let buttonQuestionBreakDownYear = document.getElementById("buttonQuestionBreakDownYear")
    
    buttonQuestionBreakDownYear.addEventListener("click", () => {

        let answer

        answer = document.getElementById("questionBreakDownYear").value
        answer = answer.toLowerCase()

        if(answer == "si"){
            document.getElementById("container-breakdown-year").style.visibility = "visible"
            document.getElementById("messageBreakdownYear").style.visibility = "hidden"

            let titleBreakDownYear = document.getElementById("titleBreakDownYear")

            titleBreakDownYear.innerText = "Ingrese el año deseado para desglose"

            let formBreakdownYear = document.getElementById("form-breakdown-year")

            formBreakdownYear.innerHTML = '<input type="text" name="question number breakdown year" id="questionNumberBreakDownYear"/> <button id="buttonQuestionNumberBreakDownYear" type="button">Confirmar</button> </form>'

            let buttonQuestionNumberBreakDownYear = document.getElementById("buttonQuestionNumberBreakDownYear")

            buttonQuestionNumberBreakDownYear.addEventListener("click", () => {

                let yearToBreakDown = parseInt(document.getElementById("questionNumberBreakDownYear").value)

                if( !isNaN(yearToBreakDown) && yearToBreakDown != "" && (yearToBreakDown > 0 && yearToBreakDown <= invest.amountPerYearWithMonths.length)) {
                    document.getElementById("messageBreakdownYear").style.visibility = "visible"
                    showBreakDownYear(invest.amountPerYearWithMonths, yearToBreakDown)

                } else {
                    titleBreakDownYear.innerText = "El año escogido no es el correcto, porfavor ingrese otro"
                }
            })

        }
        else if(answer == "no"){
            document.getElementById("container-breakdown-year").style.visibility = "hidden"
        } else {

            let titleBreakDownYear = document.getElementById("titleBreakDownYear")

            titleBreakDownYear.innerText = "Error en su respuesta, vuelva a ingresar (si/no)"
        }

    })

}

/// Funcion para mostrar el gráfico

export function showGraphicAllYears(invest){
    
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


/// Local storage


export function getLocalStorage() {

    if ( !localStorage.getItem("investment") ) {
        storeLocalStorage()
    }

    let investment = JSON.parse(localStorage.getItem("investment"))

    const { startingAmount, monthlyAdition, yearsToCalculate, interest, wishedAmount } = investment

    document.getElementById("startingAmount").value = startingAmount
    document.getElementById("monthlyAdition").value = monthlyAdition
    document.getElementById("yearsToCalculate").value = yearsToCalculate
    document.getElementById("interest").value = interest
    document.getElementById("wishedAmount").value = wishedAmount
}

function storeLocalStorage() {

    let invest = {
        "startingAmount" : "10",
        "monthlyAdition" : "100",
        "yearsToCalculate" : "10",
        "interest": "20",
        "wishedAmount": "20000"
    }

    localStorage.setItem("investment", JSON.stringify(invest))

}

export async function getAndSetValueDollarBlueAndOfficial(){
    const resp = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales', {
        method: 'GET'
    })
    
    const jsonDollars = await resp.json()

    let dataDollars = document.getElementById("valuesDollars")
    
    let officialDollar = jsonDollars[0]

    let blueDollar = jsonDollars[1]

    dataDollars.innerHTML = `<p> Tipo dolar: ${officialDollar.casa.nombre} | Valor compra: ${officialDollar.casa.compra} | Valor venta: ${officialDollar.casa.venta} </p>
                    <p> Tipo dolar: ${blueDollar.casa.nombre} | valor compra: ${blueDollar.casa.compra} | valor venta: ${blueDollar.casa.venta} </p>`

}