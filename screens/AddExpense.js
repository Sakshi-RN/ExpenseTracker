import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddExpense = ({ navigation, route }) => {
  const { addExpense } = route.params;
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null);

  const handleAddExpense = useCallback(() => {
    if (!amount ||!category ||!date ||!notes) {
      setError('Please fill in all fields');
    } else {
      const expense = {
        id: Math.random().toString(),
        amount,
        category,
        date,
        notes,
      };
      addExpense(expense);
      navigation.navigate('ExpenseList');
    }
  }, [amount, category, date, notes, addExpense]);

  const restoreFormData = useCallback(() => {
    setAmount('');
    setCategory('');
    setDate('');
    setNotes('');
    setError(null);
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', restoreFormData);
    return unsubscribe;
  }, [navigation, restoreFormData]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Expense</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Enter amount"
        />
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter category"
        />
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Enter date"
        />
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.input}
          value={notes}
          onChangeText={setNotes}
          placeholder="Enter notes"
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <Button title="Add Expense" onPress={handleAddExpense} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F7F7',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 16,
    borderRadius: 10,
    fontSize: 18,
  },
  error: {
    fontSize: 15,
    color: 'red',
    marginBottom: 16,
  },
});

export default AddExpense;