import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AddExpense from './screens/AddExpense';
import ExpenseList from './screens/ExpenseList';
import { ExpensesProvider, ExpensesContext } from './context/ExpensesContext';

const Stack = createStackNavigator();
const HomeScreen = (props) => {
  return <Home {...props} />;
};

const AddExpenseScreen = (props) => {
  const { addExpense } = useContext(ExpensesContext);
  return <AddExpense {...props} route={{ params: { addExpense } }} />;
};

const ExpenseListScreen = (props) => {
  const { expenses } = useContext(ExpensesContext);
  return <ExpenseList {...props} route={{ params: { expenses } }} />;
};

const App = () => {
  return (
    <ExpensesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
          <Stack.Screen name="ExpenseList" component={ExpenseListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesProvider>
  );
};


export default App;
