/**
 * 
 * @param {float} amount The amount on facebank that you want to transfer to Balanz
 * @constant {float} facebankTransferCost (USD)
 * @returns {int} Returns quantity of nominals that you will have on Balanz
 */

async function usdToNominals(amount) {

    const facebankTransferCost = 30;
    const balanzCommission = 0.4;
    const config = { params: {name: 'GD30C'}}
    const {DUAL_PAY_API_BASE_URL} = configVariables()
    const response = await GET(DUAL_PAY_API_BASE_URL, '/bonds', config)

    if(response){
        const bondBuyPrice = response.data.value
        const percentageLessCommission = 100 - balanzCommission
        const nominals = Math.round(((amount - facebankTransferCost) / bondBuyPrice) * percentageLessCommission);
        return nominals
    }

}