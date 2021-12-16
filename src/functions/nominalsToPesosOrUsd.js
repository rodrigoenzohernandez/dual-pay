/**
 * @param {int} nominals Bonds Units
 * @param {string} currencyToRecive for example usd/pesos
 * @returns {Float} return the amount converted in pesos or usd
 */

function nominalsToPesosOrUsd(nominals, currencyToRecive) {
  const balanzCommission = 0.4;
  const marketRight = 0.01;
  const commissionTotal = balanzCommission + marketRight;

  if (currencyToRecive === "usd") {
    const bondSellPriceUsd = 37.6; // TO DO: api call
    return transform(bondSellPriceUsd, "u$s", nominals, commissionTotal);
  } else if (currencyToRecive === "pesos") {
    const bondSellPricePesos = 7270; // TO DO: api call
    return transform(bondSellPricePesos, "$", nominals, commissionTotal);
  }
}

function transform(bondSellPrice, currency, nominals, commissionTotal) {
  let subTotal = 0;
  let commission = 0;
  subTotal = (nominals * bondSellPrice) / 100;
  commission = (subTotal * commissionTotal) / 100;
  let total = (subTotal - commission).toFixed(2);
  return `${currency} ${total}`;
}
