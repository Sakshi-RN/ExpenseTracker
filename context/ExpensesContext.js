import React, { createContext, useState } from 'react';

// Create a new context object
export const ExpensesContext = createContext();

// Create a provider component to wrap your app
export const ExpensesProvider = ({ children }) => {
  // Define state for managing expenses
  const [expenses, setExpenses] = useState([]);

  // Function to add an expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Provide the expenses state and addExpense function to the children components
  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
