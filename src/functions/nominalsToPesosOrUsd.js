/**
 * 
 * @param {int} nominals Bonds Units 
 * @param {string} currencyToRecive for example usd/pesos
 * @returns {Float} return the amount converted in pesos or usd 
 */

function nominalsToPesosOrUsd(nominals, currencyToRecive) {

    const balanzCommission = 0.4;
    const marketRight = 0.01;
    const commissionTotal = balanzCommission + marketRight;
    let subTotal = 0;
    let commission = 0;


    if (currencyToRecive === "usd") {
        const bondSellPriceUsd = 37.60; // to DO: api call
        subTotal = (nominals * bondSellPriceUsd) / 100;
        commission = (subTotal * commissionTotal) / 100;
    } else if (currencyToRecive === "pesos") {
        const bondSellPricePesos = 7270; // to DO: api call
        subTotal = (nominals * bondSellPricePesos) / 100;
        commission = (subTotal * commissionTotal) / 100;
    }
    // obtener el valor final 
    const total = subTotal - commission;
    return total;
};

