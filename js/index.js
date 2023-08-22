console.clear();

function getValue(elementId) {
  const Field = document.getElementById(elementId);
  const String = Field.value || 0;
  const fieldValue = parseFloat(String);
  if (isNaN(Field.value)) {
    alert("Please, give number input.");
    Field.focus();
    return;
  } else if (fieldValue < 0) {
    Field.focus();
    alert("Please, give correct information about: " + elementId + " money. ");
    return null;
  }
  return fieldValue;
}

const totalExpensesElementText = document.getElementById("totalExpenses");
const balanceElementText = document.getElementById("balance");
const savingAmountElementText = document.getElementById("savingAmount");
const budgetCalcBtn = document.getElementById("budgetCalcBtn");
const saveBtn = document.getElementById("saveBtn");
const remainingBalanceElementText = document.getElementById("remainingBalance");

budgetCalcBtn.addEventListener("click", function () {
  const income = getValue("income");
  const foodCost = getValue("food");
  const RentCost = getValue("Rent");
  const ClothesCost = getValue("Clothes");

  console.log(income, foodCost, RentCost, ClothesCost);
  if (income) {
    const totalExpenses = foodCost + RentCost + ClothesCost;
    checkNan(totalExpenses, totalExpensesElementText);

    const balance = income - totalExpenses;
    if (balance > 0) balanceElementText.innerText = balance;
    else
      balanceElementText.innerHTML = `<p class='text-red-500'>Please, fill information fields correctly.</p>`;
  }
  saveBtn.addEventListener("click", function () {
    const savePercent = getValue("save");
    const save = income * (savePercent / 100);
    checkNan(save, savingAmountElementText);
    checkNan(balance - save, remainingBalanceElementText);
  });
});

function checkNan(value, field) {
  if (isNaN(value))
    field.innerHTML = `<p class='text-red-500'>Please, fill information fields correctly.</p>`;
  else field.innerText = value;
}
