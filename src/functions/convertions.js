/**
 * 
 * @param {float} amount The amount on facebank that you want to transfer to Balanz
 * @constant {float} facebankTransferCost (USD)
 * @returns {int} Returns quantity of nominals that you will have on Balanz
 */

async function usdToNominals(amount) {

    const facebankTransferCost = 30;
    const balanzCommission = 0.4;
    
    try {
        const instance = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 5000,
          });
        
        const config = { params: {name: 'GD30C'}}
        const response = await instance.get('/bonds', config);
        const bondBuyPrice = response.data.value
        const percentageLessCommission = 100 - balanzCommission
        const nominals = Math.round(((amount - facebankTransferCost) / bondBuyPrice) * percentageLessCommission);

        return nominals

      } catch (error) {
        console.error(error);
        return null
      }

}