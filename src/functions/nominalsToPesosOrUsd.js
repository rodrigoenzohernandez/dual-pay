/**
 * @param {int} nominals Bonds Units
 * @param {string} currencyToRecive for example usd/pesos
 * @returns {Float} return the amount converted in pesos or usd
 */

async function nominalsToPesosOrUsd(nominals, currencyToRecive) {
  const balanzCommission = 0.4;
  const marketRight = 0.01;
  const commissionTotal = balanzCommission + marketRight;

  if (currencyToRecive === "usd") {

    try {

      //axios get
      const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000,
      });

      const config = { params: {name: 'GD30D'}}
      const response = await instance.get('/bonds', config);
      const bondSellPriceUsd = response.data.value

      //algorithm logic
      return transform(bondSellPriceUsd, "u$s", nominals, commissionTotal);

    } catch (error) {
      console.error(error);
      return null
    }

  } else if (currencyToRecive === "pesos") {  

    try {

      //axios get
      const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000,
      });

      const config = { params: {name: 'GD30'}}
      const response = await instance.get('/bonds', config);
      const bondSellPricePesos = response.data.value

      //algorithm logic
      return transform(bondSellPricePesos, "$", nominals, commissionTotal);

    } catch (error) {
      console.error(error);
      return null
    }


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
