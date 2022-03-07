import { calculate, getLocalStorage, getAndSetValueDollarBlueAndOfficial} from "./utils/functions.js"

getLocalStorage()
getAndSetValueDollarBlueAndOfficial()

let btnCalculate = document.getElementById("calculate")

btnCalculate.addEventListener("click", calculate)