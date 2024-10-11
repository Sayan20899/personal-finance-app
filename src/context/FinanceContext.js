import React, { createContext, useReducer } from 'react';

const initialState = {
  income: [],
  expenses: [],
};

export const FinanceContext = createContext(initialState);

const financeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        income: [...state.income, action.payload],
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export const FinanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
};
