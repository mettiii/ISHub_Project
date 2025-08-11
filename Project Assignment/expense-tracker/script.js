const balance = document.getElementById("balance");
const incomes = document.getElementById("money-plus");
const expens = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const deletBtn = document.getElementById("delete-btn");

const localStorageTransaction = JSON.parse(
  localStorage.getItem("transactions")
);

function generateId() {
  return Math.floor(Math.random() * 100000000);
}

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransaction : [];
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add a text and amount");
  } else {
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateLocalStorage();
    updateValues();

    text.value = "";
    amount.value = "";
  }
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `${transaction.text} <span>${sign} ${Math.abs(
    transaction.amount
  )}</span>
   <button class="delete-btn" onclick="removeTransaction(${
     transaction.id
   })">x</button>`;
  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const exp =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);

  balance.innerText = `$ ${total}`;
  incomes.innerText = `$ +${income}`;
  expens.innerText = `$ -${exp}`;
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function removeTransaction(id) {
  transactions = transactions.filter((money) => money.id !== id);
  updateLocalStorage();

  init();
}

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();
form.addEventListener("submit", addTransaction);
