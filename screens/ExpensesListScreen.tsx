import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import ExpenseList from '../components/ExpenseList';

type Expense = {
  ID: string;
  Title: String;
  Amount: number;
  Category: string;
  ExpenseDate: string;
};

function ExpensesListScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [expenseData, setExpenseData] = useState<Expense[]>([]);

  const getExpenses = async () => {
    try {
      const url =
        'https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker';
      const response = await fetch(url);
      const responseData = await response.json();
      setExpenseData(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      {isLoading && <ActivityIndicator />}
      {!isLoading && <ExpenseList expenseItems={expenseData} />}
    </>
  );
}

export default ExpensesListScreen;
