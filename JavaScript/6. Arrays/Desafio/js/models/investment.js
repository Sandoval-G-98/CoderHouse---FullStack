export default class Investment{
    
    constructor(startingAmount, monthlyAdition, yearsTocalculate, interest){
        this.startingAmount = startingAmount
        this.monthlyAdition = monthlyAdition
        this.yearsTocalculate = yearsTocalculate
        this.interest = interest / 100
        this.totalAmount = this.staringAmount
    }

    calculateInterest(){
    
        if(isInformationCorrect(this.startingAmount, "startingAmount") && isInformationCorrect(this.monthlyAdition, "monthlyAdition") &&
            isInformationCorrect(this.yearsTocalculate, "yearsTocalculate") && isInformationCorrect(this.interest, "interest")){        
            
            for (let i = 0; i < this.yearsTocalculate; i++){
                for (let month = 0; month < 12 ; month++){
                    this.totalAmount = this.totalAmount + (this.totalAmount * this.interest)/12 + this.monthlyAdition
                }
            }
            
            this.totalAmount = this.totalAmount.toFixed(2)
        
            return this.totalAmount
        }
        
        return -1
    }
    

    isInformationCorrect(data, dataName){

        if (isNaN(data) || data == "" || data < 0){
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
}
