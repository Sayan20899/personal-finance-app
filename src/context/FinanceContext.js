import React, { createContext, useState } from 'react';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [finances, setFinances] = useState({
    income: 0,
    expenses: 0,
    budget: 0,
  });

  return (
    <FinanceContext.Provider value={{ finances, setFinances }}>
      {children}
    </FinanceContext.Provider>
  );
};
