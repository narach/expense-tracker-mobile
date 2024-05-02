import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import ExpenseList from '../components/ExpenseList';
import {Expense} from '../types/ExpensePayload';
import {fetchExpenses} from '../helpers/httpHelper';

function ExpensesListScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [expenseData, setExpenseData] = useState<Expense[]>([]);

  const getExpenses = async () => {
    setIsLoading(true);
    try {
      const responseData = await fetchExpenses();
      console.log('Expenses List: ', responseData);
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
