
async function calcularSalarioNeto(salarioNeto, porcentaje) {

    const config = { params: { type: "valoresprincipales" } }
    const { DOLAR_SI_API_BASE_URL } = configVariables()
    const response = await GET(DOLAR_SI_API_BASE_URL, '/', config)
    let usdPrice = 0

    if (response) {
        usdPrice = parseFloat((response.data[0].casa.compra).replace(',', '.'))
    }
    const total = ((salarioNeto * porcentaje / 100) / usdPrice).toFixed(2);
    return total;
}