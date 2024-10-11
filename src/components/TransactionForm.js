import React, { useState } from 'react';

const TransactionForm = ({ type, onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { type, amount, description };
    onSubmit(transaction);
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{type === 'income' ? 'Add Income' : 'Add Expense'}</h3>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;
