import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });
  const inputChangedHandler = (inputIdentifier, enteredText) => {
    setInputValues((previousInputValues) => ({
      ...previousInputValues,
      [inputIdentifier]: enteredText,
    }));
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: (enteredAmount) =>
              inputChangedHandler('amount', enteredAmount), // another variation instead of bind
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});
