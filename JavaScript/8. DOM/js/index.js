import { showGraphicAllYears , calculate} from "./models/functions.js"

let btnCalculate = document.getElementById("calculate")

btnCalculate.addEventListener("click", calculate)
btnCalculate.addEventListener("click", showGraphicAllYears)