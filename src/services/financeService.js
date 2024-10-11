import axios from 'axios';

export const addTransaction = async (transaction) => {
  const response = await axios.post('/api/transactions', transaction);
  return response.data;
};

export const getTransactions = async () => {
  const response = await axios.get('/api/transactions');
  return response.data;
};
