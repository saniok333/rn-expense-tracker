import axios from 'axios';

export const storeExpense = (expenseData) => {
  axios.post(
    'https://rn-exp-bknd-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
};
