const netIncomeInput = document.querySelector("#netIncomeInput");
const percentageSelect = document.querySelector("#percentageSelect");
percentageSelect.value = "";
const dolarsInput = document.querySelector("#dolarsInput");
const btnGetDolars = document.querySelector("#btnGetDolars");

netIncomeInput.addEventListener("blur", async () => {
  const salary = netIncomeInput.value;
  const validityState = netIncomeInput.validity;
  percentageSelect.disabled = true;
  btnGetDolars.style = "background-color rgb(89, 93, 97)";

  if (validityState.rangeUnderflow || !netIncomeInput.value) {
    netIncomeInput.setCustomValidity("The amount must be over 1");
    netIncomeInput.reportValidity();
    netIncomeInput.value = "";
  } else {
    percentageSelect.disabled = false;
    let selectedPercentage = 0;
    percentageSelect.addEventListener("change", async () => {
      btnGetDolars.disabled = false;
      btnGetDolars.style = "background-color: rgb(60, 116, 207)";

      selectedPercentage = percentageSelect.value;
    });

    btnGetDolars.addEventListener("click", async () => {
      const result = await calcularSalarioNeto(salary, selectedPercentage);
      dolarsInput.value = result;
    });
  }
});
