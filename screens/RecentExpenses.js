import { useContext, useEffect } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

const RecentExpenses = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);

  console.log(expenses);

  useEffect(() => {
    const getExpenses = async () => {
      const fetchedExpenses = await fetchExpenses();
      setExpenses(fetchedExpenses);
    };

    getExpenses();
  }, []);

  const recentExpenses = expenses.filter(
    (expense) =>
      expense.date >= getDateMinusDays(7) && expense.date <= new Date()
  );
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;
