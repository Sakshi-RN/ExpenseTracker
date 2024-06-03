import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ExpenseList = ({ route, navigation }) => {
  const { expenses } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expenses</Text>
      </View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <View style={styles.expenseInfo}>
              <Text style={styles.expenseLabel}>Amount:</Text>
              <Text style={styles.expenseValue}>{item.amount}</Text>
            </View>
            <View style={styles.expenseInfo}>
              <Text style={styles.expenseLabel}>Category:</Text>
              <Text style={styles.expenseValue}>{item.category}</Text>
            </View>
            <View style={styles.expenseInfo}>
              <Text style={styles.expenseLabel}>Date:</Text>
              <Text style={styles.expenseValue}>{item.date}</Text>
            </View>
            <View style={styles.expenseInfo}>
              <Text style={styles.expenseLabel}>Notes:</Text>
              <Text style={styles.expenseValue}>{item.notes}</Text>
            </View>
          </View>
        )}
      />
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
    padding: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf:'center'
  },
  expenseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#FFFFFF',
  },
  expenseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  expenseLabel: {
    fontSize: 18,
    color: '#666',
  },
  expenseValue: {
    fontSize: 18,
    color: '#333',
  },
});

export default ExpenseList;