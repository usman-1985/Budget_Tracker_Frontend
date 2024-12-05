// Summary.jsx
import React from "react";

const Summary = ({ income, expenses, balance }) => (
  <div>
    <h2>Summary</h2>
    <p>Total Income: ${income}</p>
    <p>Total Expenses: ${expenses}</p>
    <p>Remaining Balance: ${balance}</p>
  </div>
);

export default Summary;
