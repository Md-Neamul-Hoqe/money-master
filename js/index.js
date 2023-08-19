console.clear();

function getValue(elementId) {
  const Field = document.getElementById(elementId);
  const String = Field.value;
  const fieldValue = parseFloat(String);
  if (fieldValue < 0) {
    Field.focus();
    return alert(
      "Please, give correct informations about: " + elementId + " money. "
    );
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

  if (
    income === undefined ||
    foodCost === undefined ||
    RentCost === undefined ||
    ClothesCost === undefined
  ) {
    return false;
  }
  const totalExpenses = foodCost + RentCost + ClothesCost;
  totalExpensesElementText.innerText = totalExpenses;

  const balance = income - totalExpenses;
  balanceElementText.innerText = balance;

  saveBtn.addEventListener("click", function () {
    const savePercent = getValue("save");
    const save = income * (savePercent / 100);

    savingAmountElementText.innerText = save;
    remainingBalanceElementText.innerText = balance - save;
  });
});
