import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const Dashboard = () => {
  const { finances, setFinances } = useContext(FinanceContext);

  const handleUpdate = (key, value) => {
    setFinances((prev) => ({ ...prev, [key]: parseFloat(value) }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Income:</label>
          <input
            type="number"
            value={finances.income}
            onChange={(e) => handleUpdate('income', e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Expenses:</label>
          <input
            type="number"
            value={finances.expenses}
            onChange={(e) => handleUpdate('expenses', e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Budget:</label>
          <input
            type="number"
            value={finances.budget}
            onChange={(e) => handleUpdate('budget', e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg">Remaining Budget: {finances.budget - finances.expenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
