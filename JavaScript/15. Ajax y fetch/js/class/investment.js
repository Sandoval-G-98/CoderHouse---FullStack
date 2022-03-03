export class Investment {
    constructor(startingAmount, monthlyAdition, yearsTocalculate, interest, wishedAmount) {
      this.startingAmount = startingAmount
      this.monthlyAdition = monthlyAdition
      this.yearsTocalculate = yearsTocalculate
      this.interest = interest / 100
      this.wishedAmount = wishedAmount
      this.totalAmount = startingAmount
      this.amountPerYear = []
      this.amountPerYearWithMonths = []
    }
  
    calculateInterest() {
      if (
        this.isInformationCorrect(this.startingAmount, "startingAmount") &&
        this.isInformationCorrect(this.monthlyAdition, "monthlyAdition") &&
        this.isInformationCorrect(this.yearsTocalculate, "yearsTocalculate") &&
        this.isInformationCorrect(this.interest, "interest") &&
        this.isInformationCorrect(this.wishedAmount, "wishedAmount")) 
        {
        for (let i = 0; i < this.yearsTocalculate; i++) {
            let amountPerMonth = []
            for (let month = 0; month < 12; month++) {
                this.totalAmount = this.totalAmount + (this.totalAmount * this.interest) / 12 + this.monthlyAdition
                amountPerMonth.push(this.totalAmount.toFixed(2))
            }
            this.amountPerYear.push(this.totalAmount.toFixed(2))
            this.amountPerYearWithMonths.push(amountPerMonth)
        }
  
        this.totalAmount = this.totalAmount.toFixed(2)
  
        return this.totalAmount
      }
  
      return -1
    }
  
    isInformationCorrect(data, dataName) {
      if (isNaN(data) || data == "" || data < 0) {
        console.log("Entre a informacion is correct")
        console.log( `Data: ${data}`)
        console.log( `dataName ${dataName}`)
        switch (dataName) {
          case "startingAmount":
            this.focusInElementWrong("startingAmount", "Monto inicial")
            break;
          case "monthlyAdition":
            this.focusInElementWrong("monthlyAdition", "Adicion mensual")
            break;
          case "yearsTocalculate":
            this.focusInElementWrong("yearsTocalculate", "Cantidad de años")
            break;
          case "interest":
            this.focusInElementWrong("interest", "Interes anual")
            break;
          case "wishedAmount":
            this.focusInElementWrong("wishedAmount", "Monto deseado")
            break;
          default:
            break;
        }
        return false
      }
      return true
    }

    focusInElementWrong(elementHtml, messageElement) {

     Toastify({
        text:  `Error en el campo ${messageElement}`,
        duration: 3000
      }).showToast()

      document.getElementById(elementHtml).focus()
    }

  }
  