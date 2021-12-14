/**
 * 
 * @param {float} amount The amount on facebank that you want to transfer to Balanz
 * @constant {float} facebankTransferCost (USD)
 * @returns {int} Returns quantity of nominals that you will have on Balanz
 */

function usdToNominals(amount){

    const facebankTransferCost = 30;
    const balanzComision = 0.4;
    const bondBuyPrice = 35.65; //TO DO: api call
    const percentageLessComision = 100 - balanzComision
    const nominals = Math.round(((amount - facebankTransferCost) / bondBuyPrice) * percentageLessComision);
    return nominals

}