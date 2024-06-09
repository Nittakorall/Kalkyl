

const results = document.querySelector(".resultat")

let lista = []
console.log('hi')

const countButton1 = document.querySelector('#one')
countButton1.addEventListener("click", button1)

const countButton2 = document.querySelector('#two')
countButton2.addEventListener("click", button2)

const countButton3 = document.querySelector('#three')
countButton3.addEventListener("click", button3)

const countButton4 = document.querySelector('#four')
countButton4.addEventListener("click", button4)

const countButton5 = document.querySelector('#five')
countButton5.addEventListener("click", button5)

const countButton6 = document.querySelector('#six')
countButton6.addEventListener("click", button6)

const countButton7 = document.querySelector('#seven')
countButton7.addEventListener("click", button7)

const countButton8 = document.querySelector('#eight')
countButton8.addEventListener("click", button8)

const countButton9 = document.querySelector('#nine')
countButton9.addEventListener("click", button9)

const countButton0 = document.querySelector('#zero')
countButton0.addEventListener("click", button0)

const plus = document.querySelector('#plus')
plus.addEventListener("click", plussa)



const totalt = document.querySelector("#totalt")
totalt.addEventListener("click", inTotal)

const resume = document.querySelector("#resume")
resume.addEventListener('click', resumea)
let currentNumber = ""
plus.disabled = true

countButton1.disabled = false
 countButton2.disabled = false
 countButton3.disabled = false
 countButton4.disabled = false
 countButton5.disabled = false
 countButton6.disabled = false
 countButton7.disabled = false
 countButton8.disabled = false
 countButton9.disabled = false
 countButton0.disabled = false
function button1() {
    plus.disabled = false
 
    currentNumber += "1"
    results.innerText = currentNumber

}

function button2() {
    plus.disabled = false
 
    currentNumber += "2"
    results.innerText = currentNumber
}
function button3() {
    plus.disabled = false
 
    currentNumber += "3"
    results.innerText = currentNumber
}

function button4() {
    plus.disabled = false
 
    currentNumber += "4"
    results.innerText = currentNumber
}

function button5() {
    plus.disabled = false
 
    currentNumber += "5"
    results.innerText = currentNumber
}
function button6() {
    plus.disabled = false
 
    currentNumber += "6"
    results.innerText = currentNumber
}
function button7() {
    plus.disabled = false
 
    currentNumber += "7"
    results.innerText = currentNumber
}
function button8() {
    plus.disabled = false
 
    currentNumber += "8"
    results.innerText = currentNumber
}
function button9() {
    plus.disabled = false
 
    currentNumber += "9"
    results.innerText = currentNumber
}

function button0() {
    plus.disabled = false
 
    currentNumber += "0"
    results.innerText = currentNumber
}

function plussa() {
    countButton1.disabled = false
    countButton2.disabled = false
    countButton3.disabled = false
    countButton4.disabled = false
    countButton5.disabled = false
    countButton6.disabled = false
    countButton7.disabled = false
    countButton8.disabled = false
    countButton9.disabled = false
    countButton0.disabled = false
    lista.push(currentNumber)
    currentNumber = ""
    results.innerText = " + "
}


let allTogether = 0

function inTotal() {
plus.disabled = false
 
countButton1.disabled = true
countButton2.disabled = true
countButton3.disabled = true
countButton4.disabled = true
countButton5.disabled = true
countButton6.disabled = true
countButton7.disabled = true
countButton8.disabled = true
countButton9.disabled = true
countButton0.disabled = true
    lista.push(currentNumber)
    let numberLista = []
    for (let i = 0; i < lista.length; i++) {
        numberLista.push(Number(lista[i]))
    }
    numberLista.forEach((Number, index) => {
        allTogether += Number
    })
    results.innerText = allTogether
    currentNumber = ""
    lista = []
console.log (numberLista)
}
function resumea () {
    currentNumber = ""
    lista = []
    plus.disabled = true

    countButton1.disabled = false
    countButton2.disabled = false
    countButton3.disabled = false
    countButton4.disabled = false
    countButton5.disabled = false
    countButton6.disabled = false
    countButton7.disabled = false
    countButton8.disabled = false
    countButton9.disabled = false
    countButton0.disabled = false
     allTogether = 0
     results.innerText = allTogether
}
console.log (lista)
