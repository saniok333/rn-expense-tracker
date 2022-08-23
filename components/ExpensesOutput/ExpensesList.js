import { FlatList, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = ({ item: { id, description, amount, date } }) => {
  const expenseItemProps = {
    id,
    description,
    amount,
    date,
  };

  return <ExpenseItem {...expenseItemProps} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      key={(item) => item.id}
    />
  );
};

export default ExpensesList;
