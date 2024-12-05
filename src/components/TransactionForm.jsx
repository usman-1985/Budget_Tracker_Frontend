// TransactionForm.jsx
import React, { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "income",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return alert("Please fill all fields");
    onAdd(formData);
    setFormData({ title: "", amount: "", type: "income" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        placeholder="Amount"
        onChange={handleChange}
      />
      <div>
        <label>
          <input
            type="radio"
            name="type"
            value="income"
            checked={formData.type === "income"}
            onChange={handleChange}
          />
          Income
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={formData.type === "expense"}
            onChange={handleChange}
          />
          Expense
        </label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
