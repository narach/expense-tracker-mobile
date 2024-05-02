import type {Expense, ExpensePayload} from '../types/ExpensePayload';

export async function uploadExpense(newExpense: ExpensePayload) {
  const addExpenseUrl =
    'https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker';
  const response = await fetch(addExpenseUrl, {
    method: 'POST',
    body: JSON.stringify(newExpense),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to create a new expense');
  }

  console.log('Response: ', resData.message);
}

export async function fetchExpenses(): Promise<Expense[]> {
  let responseData: Expense[] = [];
  try {
    const url =
      'https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker';
    const response = await fetch(url);
    responseData = await response.json();
  } catch (error) {
    throw new Error('Unable to fetch expenses data');
  }
  return responseData;
}
