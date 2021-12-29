//CLASS calculator_container OCUPA EN 35% DE LA PANTALLA
//CLASS home_container PARA LLEVAR HACIA EL COSTADO 65%
//ID btn_Open click en CALCULATOR
let landing_page_calculator = document.querySelector("section").classList;
let main_calculator = document.getElementById("main__calculator");
let side_calculator = document.getElementById("side__calculator");
let side_home = document.getElementById("side__home");
let btn_Open = document.getElementById("btn__Open");
document.getElementById("btn__Open").addEventListener('click', open_close_calculator);

function open_close_calculator (){
    landing_page_calculator.toggle('main-calculator');
    side_home.classList.toggle("home_container");
    side_calculator.classList.toggle("calculator_container");

}


