const facebankInput = document.querySelector('#facebankAmountInput');
const nominalsInput = document.querySelector('#nominalsInput');
const receivedMoneyInput = document.querySelector('#receivedMoneyInput');

const usdOption = document.querySelector('#usdOption');
const pesosOption = document.querySelector('#pesosOption');

const btnCalculate = document.querySelector('#btnCalcutate');

facebankInput.addEventListener('blur', async () => {
    const facebankAmount = facebankInput.value
    const validityState = facebankInput.validity;
    btnCalculate.disabled = true
    btnCalculate.style = "background-color rgb(89, 93, 97)";
    usdOption.checked = false
    pesosOption.checked = false

    if (validityState.rangeUnderflow || !facebankInput.value) {
        facebankInput.setCustomValidity('The amount must be over 30')
        facebankInput.reportValidity()
        facebankInput.value = ""
    }
    else {
        // calculate nominals and show amount 
        nominalsInput.value = await usdToNominals(facebankAmount)
        usdOption.disabled = false
        pesosOption.disabled = false
        receivedMoneyInput.value = ""
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
    changeOption("Amount of money to recive in USD")
})

pesosOption.addEventListener('click', () => {
    changeOption("Amount of money to recive in Pesos")
})

function changeOption(text) {
    const h3 = document.querySelector(".usdOrPesos");
    h3.innerText = text
    btnCalculate.disabled = false
    btnCalculate.style = 'background-color: rgb(60, 116, 207)'
    receivedMoneyInput.value = ""
}