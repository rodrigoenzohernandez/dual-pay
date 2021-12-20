/**
 * @param {int} nominals Bonds Units
 * @param {string} currencyToRecive for example usd/pesos
 * @returns {Float} return the amount converted in pesos or usd
 */

async function nominalsToPesosOrUsd(nominals, currencyToRecive) {
  const balanzCommission = 0.4;
  const marketRight = 0.01;
  const commissionTotal = balanzCommission + marketRight;
  const { DUAL_PAY_API_BASE_URL } = configVariables();
  const bondName = currencyToRecive === "u$s" ? "GD30D" : "GD30";
  const config = { params: { name: bondName } };

  const response = await GET(DUAL_PAY_API_BASE_URL, "/bonds", config);

  if (response) {
    const bondSellPrice = response.data.value;
    let subTotal = 0;
    let commission = 0;
    subTotal = (nominals * bondSellPrice) / 100;
    commission = (subTotal * commissionTotal) / 100;
    let total = (subTotal - commission).toFixed(2);
    return `${currencyToRecive} ${total}`;
  }
}
