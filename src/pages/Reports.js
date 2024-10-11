import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const Reports = () => {
  const { finances } = useContext(FinanceContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="space-y-4">
        <p>Total Income: {finances.income}</p>
        <p>Total Expenses: {finances.expenses}</p>
        <p>Budget: {finances.budget}</p>
        <p>Remaining Budget: {finances.budget - finances.expenses}</p>
      </div>
    </div>
  );
};

export default Reports;
