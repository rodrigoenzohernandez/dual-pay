const facebankInput = document.querySelector('#facebankAmountInput');
const nominalsInput = document.querySelector('#nominalsInput');
const receivedMoneyInput = document.querySelector('#receivedMoneyInput');

const usdOption = document.querySelector('#usdOption');
const pesosOption = document.querySelector('#pesosOption');

const btnCalculate = document.querySelector('#btnCalcutate');

facebankInput.addEventListener('blur', () => {
    const facebankAmount = facebankInput.value
    const validityState = facebankInput.validity;

    if (validityState.rangeUnderflow) {
        facebankInput.setCustomValidity('The amount must be over 30')
        facebankInput.reportValidity()
        facebankInput.value = ""
    }
    else {
        nominalsInput.value = usdToNominals(facebankAmount)
        usdOption.disabled = false
        pesosOption.disabled = false
    }
})

btnCalculate.addEventListener('click', () => {

    btnCalculate.style = 'border: rgb(147, 174, 201) solid 2px; background-color: rgb(6, 40, 95);'

    if (usdOption.checked || pesosOption.checked) {
        let currencyToRecive;
        if (usdOption.checked) currencyToRecive = "usd"
        else currencyToRecive = "pesos"
        receivedMoneyInput.value = nominalsToPesosOrUsd(nominalsInput.value, currencyToRecive)
    }
})

usdOption.addEventListener('click', () => {
    const h3 = document.querySelector(".usdOrPesos");
    h3.innerText = "Amount of money to recive in Usd"
    btnCalculate.disabled = false
    btnCalculate.style = 'background-color: rgb(60, 116, 207)'

})

pesosOption.addEventListener('click', () => {
    const h3 = document.querySelector(".usdOrPesos");
    h3.innerText = "Amount of money to recive in Pesos"
    btnCalculate.disabled = false
    btnCalculate.style = 'background-color: rgb(60, 116, 207)'

})