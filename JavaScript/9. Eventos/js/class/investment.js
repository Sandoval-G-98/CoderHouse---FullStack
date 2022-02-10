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
        switch (dataName) {
          case "startingAmount":
            alert("Error en el campo de monto inicial")
            break;
          case "monthlyAdition":
            alert("Error en el campo de adicion mensual")
            break;
          case "yearsTocalculate":
            alert("Error en el campo de cantidad de años")
            break;
          case "interest":
            alert("Error en el campo de interes anual")
            break
          case "wishedAmount":
            alert("Error en el campo de monto deseado")
            break
          default:
            break
        }
        return false
      }
      return true
    }
  }
  