import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flex:0.3}}/>
      <Image
        source={require('../assets/icon.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Financial App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Add Expense"
          onPress={() => navigation.navigate('AddExpense')}
          color="#4CAF50" // green color
          style={styles.button}
        />
        <Button
          title="View Expenses"
          onPress={() => navigation.navigate('ExpenseList')}
          color="#2196F3" // blue color
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7', 
    // light gray background
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333', // dark gray text
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '45%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});

export default Home;