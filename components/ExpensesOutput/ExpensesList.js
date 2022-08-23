import { FlatList, Text } from 'react-native';

const renderExpenseItem = ({ item: { description, amount, date } }) => (
  <Text>{description}</Text>
);

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
