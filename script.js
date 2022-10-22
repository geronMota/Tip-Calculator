
let plus = document.querySelector('#plus')

let minus =  document.querySelector('#minus')
let tipPerPerson =  document.querySelector('#tipPerPerson')
let totalPerPerson =  document.querySelector('#totalPerPerson')
let total =  document.querySelector('#total')
let btnCalcule =  document.querySelector('#calcule')
let btnReset =  document.querySelector('#reset')
let i = 1
num.textContent = parseInt(i)
function calc(){
    
    let num = Number(document.querySelector('#num').textContent)
    let inputBill = Number(document.querySelector('#inputBill').value)
    let inputTip = Number(document.querySelector('#inputTip').value)
    let tipPerPerson =  document.querySelector('#percTipPerPerson')
    let totalPerPerson =  document.querySelector('#totalPerPerson')
    let total =  document.querySelector('#total')
    let perPerson = document.querySelector('#TipPlusPerson')
let totalPPerson = (inputBill/num)
let porcentage = (inputBill * inputTip)/100
tipPerPerson.innerText = Number((porcentage/num).toFixed(2))
totalPerPerson.innerText = Number(((inputBill+porcentage)/num).toFixed(2))
total.innerHTML = (inputBill + porcentage).toFixed(2)


}

function increment(){

if(i < 1000){
    i++
    num.innerText = i
}
}
function decrement(){
    if(i > 1){
    i--
    num.innerText = i
    }else if(i < 0){
        num.innerText = 0
    }
}

function reset(){
    window.location.reload()
}
btnReset.addEventListener('click',reset)
minus.addEventListener('click',decrement)
plus.addEventListener('click',increment)
btnCalcule.addEventListener('click',calc)