function calculate(){
    let startingAmount = parseInt(document.getElementById("startingAmount").value)
    let monthlyAdition = parseInt(document.getElementById("monthlyAdition").value)
    let yearsTocalculate = parseInt(document.getElementById("yearsToCalculate").value)
    let interest = parseInt(document.getElementById("interest").value)
    
    let invest = new Investment(startingAmount, monthlyAdition, yearsTocalculate, interest)
    
    totalAmount = invest.calculateInterest()
    
    if(totalAmount != -1)
        console.log(`Su capital luego de ${yearsTocalculate} años es de ${totalAmount}`)
    else
        console.log("Error en el ingreso de información")
}
