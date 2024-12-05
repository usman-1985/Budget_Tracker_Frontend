import React from "react";

const TransactionList = ({ transactions, onDelete }) => (
  <div>
    <h2>Transactions</h2>
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction._id}>
          {transaction.title} - ${transaction.amount} ({transaction.type})
          <button onClick={() => onDelete(transaction._id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;
