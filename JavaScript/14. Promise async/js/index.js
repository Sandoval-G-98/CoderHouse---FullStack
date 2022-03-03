import { showGraphicAllYears , calculate, getLocalStorage} from "./utils/functions.js"

getLocalStorage()

let btnCalculate = document.getElementById("calculate")

btnCalculate.addEventListener("click", calculate)