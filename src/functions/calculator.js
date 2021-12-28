function calcularSalarioNeto(salarioNeto, porcentaje) {

    if (salarioNeto == 0) { alert("Ingrese un número") }

    else {

        var formula = (salarioNeto / porcentaje) * valorDolar;
        console.log(formula);
    }
}


