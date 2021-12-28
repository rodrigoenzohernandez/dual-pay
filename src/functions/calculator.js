
async function calcularSalarioNeto(salarioNeto, porcentaje) {

    const config = { params: { type: "valoresprincipales" } }
    const { DOLAR_SI_API_BASE_URL } = configVariables()
    const response = await GET(DOLAR_SI_API_BASE_URL, '/', config)
    let valorDolar = 0

    if (response) {
        valorDolar = parseFloat((response.data[0].casa.compra).replace(',', '.'))
    }
    var total = ((salarioNeto * porcentaje / 100) / valorDolar).toFixed(2);
    return total;
}