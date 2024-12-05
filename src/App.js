import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionForm from "./src../../components/TransactionForm.jsx";
import TransactionList from "./src../../components/TransactionList.jsx";
import Summary from "./src../../components/Summary.jsx";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTransaction = (transaction) => {
    axios.post("http://localhost:5000/api/transactions", transaction)
      .then((res) => setTransactions([...transactions, res.data]))
      .catch((err) => console.error(err));
  };

  const deleteTransaction = (id) => {
    console.log("Deleting transaction with ID:", id);
    axios.delete(`http://localhost:5000/api/transactions/${id}`)
      .then(() => {
        console.log("Transaction deleted successfully.");
        setTransactions(transactions.filter((t) => t._id !== id));
      })
      .catch((err) => console.error("Error deleting transaction:", err));
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const remainingBalance = totalIncome - totalExpenses;

  return (
    <div>
      <h1>Transaction Tracker</h1>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <Summary income={totalIncome} expenses={totalExpenses} balance={remainingBalance} />
    </div>
  );
};

export default App;
