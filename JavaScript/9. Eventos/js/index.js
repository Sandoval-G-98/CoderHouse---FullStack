import { showGraphicAllYears , calculate} from "./utils/functions.js"

let btnCalculate = document.getElementById("calculate")

btnCalculate.addEventListener("click", calculate)
btnCalculate.addEventListener("click", showGraphicAllYears)