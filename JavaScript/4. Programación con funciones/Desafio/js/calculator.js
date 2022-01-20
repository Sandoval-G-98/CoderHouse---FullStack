
function calculateInterest(){
    let startingAmount = parseInt(document.getElementById("startingAmount").value)
    let monthlyAdition = parseInt(document.getElementById("monthlyAdition").value)
    let yearsTocalculate = parseInt(document.getElementById("yearsToCalculate").value)
    let interest = parseInt(document.getElementById("interest").value)
    let totalAmount = startingAmount
    interest = interest / 100

    if(isInformationCorrect(startingAmount, "startingAmount") && isInformationCorrect(monthlyAdition, "monthlyAdition") &&
        isInformationCorrect(yearsTocalculate, "yearsTocalculate") && isInformationCorrect(interest, "interest")){        
        
        for (let i = 0; i < yearsTocalculate; i++){
            for (let month = 0; month < 12 ; month++){
                totalAmount = totalAmount + (totalAmount * interest)/12 + monthlyAdition
            }
        }
        
        totalAmount = totalAmount.toFixed(2)
    
        console.log(`Su capital luego de ${yearsTocalculate} años es de ${totalAmount}`)
        
        return
    }

    console.log("Error en el ingreso de información")
}

function isInformationCorrect(data, dataName){

    console.log("dentro de la funcion de validacion")
    if (isNaN(data) || data == "" || data < 0){
        console.log("Estoy dentro del if")
        console.log(`Tengo ${data} del campo ${dataName}`)
        switch(dataName){
            case "startingAmount":
                alert("Error en el campo de monto inicial")
                break
            case "monthlyAdition":
                alert("Error en el campo de adicion mensual")
                break
            case "yearsTocalculate":
                alert("Error en el campo de cantidad de años")
                break
            case "interest":
                alert("Error en el campo de interes anual")
                break
            default:
                break
        }
        return false
    }
    return true
}