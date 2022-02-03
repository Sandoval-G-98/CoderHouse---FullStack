import { Investment } from "./investment.js";

export function showGraphicAllYears(){

    let startingAmount = parseInt(document.getElementById("startingAmount").value)
    let monthlyAdition = parseInt(document.getElementById("monthlyAdition").value)
    let yearsTocalculate = parseInt(document.getElementById("yearsToCalculate").value)
    let interest = parseInt(document.getElementById("interest").value);
    let wishedAmount = parseInt(document.getElementById("wishedAmount").value)
    
    let invest = new Investment(startingAmount, monthlyAdition, yearsTocalculate, interest, wishedAmount)

    invest.calculateInterest()
    
    if(invest.amountPerYear.length > 0){
        
        document.getElementById("graphic-all-years").innerHTML = "Gráfico del interes compuesto"
        
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
          
          Plotly.newPlot("Graphic", data);
    } else 
        console.log("No se completaron los datos del formulario")
}
