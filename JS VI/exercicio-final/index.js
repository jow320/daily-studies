function renderTransaction(transactionData) {
  const transaction = document.createElement("section");
  transaction.id = `transaction-${transactionData.id}`;
  transaction.innerText = `Transação ID-${transactionData.id}`;

  const name = document.createElement("div");
  name.textContent = `Nome da Transação: ${transactionData.name}`;

  const value = document.createElement("div");
  value.textContent = `Valor da Transação: ${transactionData.value}`;

  transaction.append(name, value);
  document.querySelector("#transactions").append(transaction);
}

async function fetchTransaction() {
  const transactions = await fetch("http://localhost:3000/transactions").then(
    (res) => res.json()
  );
  transactions.forEach(renderTransaction);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchTransaction();
});

const form = document.querySelector("form");

document.getElementById("post").addEventListener("click", async (ev) => {
  ev.preventDefault();

  const transactionData = {
    name: document.querySelector("#name").value,
    value: document.querySelector("#value").value,
  };

  const response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactionData),
  });

  const savedTransaction = await response.json();
  renderArticle(savedTransaction);

  console.log(savedTransaction);
});

document.getElementById("put").addEventListener("click", async (ev) => {
  ev.preventDefault();

  const transactionData = {
    id: document.querySelector("#ID").value,
    name: document.querySelector("#name").value,
    value: document.querySelector("#value").value,
  };

  const response = await fetch(
    `http://localhost:3000/transactions/${transactionData.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    }
  );

  const updatedTransaction = await response.json();
  form.reset();
  renderTransaction(updatedTransaction);

  console.log(updatedTransaction);
});

document.querySelector("#delete").addEventListener("click", async (ev) => {
  ev.preventDefault();

  const transactionData = {
    id: document.querySelector("#ID").value,
  };

  const response = await fetch(
    `http://localhost:3000/transactions/${transactionData.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    console.log(`Artigo com ID ${transactionData.id} removido.`);
    document.querySelector(`#transaction-${transactionData.id}`).remove();
  } else {
    console.error(`Erro ao remover o artigo com ID ${transactionData.id}`);
    alert("O ID informado não existe!");
  }
});

async function calculateTotalValue() {
  try {
    const response = await fetch("http://localhost:3000/transactions");
    const transactions = await response.json();

    const totalValue = transactions.reduce((total, transaction) => {
      return total + parseFloat(transaction.value);
    }, 0);

    document.getElementById(
      "totalValue"
    ).textContent = `Total: ${totalValue.toFixed(2)}`;
  } catch (error) {
    console.error("Erro ao calcular o total das transações:", error);
  }
}

document.addEventListener("DOMContentLoaded", calculateTotalValue);
