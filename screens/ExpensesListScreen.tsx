import React, {useState, useEffect} from 'react';
import { Text, View, Image, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ExpenseList from '../components/ExpenseList';
import ExpenseItem from '../components/ExpenseItem';

// const CommonStyles = require('../assets/styles/commonStyles');

const expenseItems = [
    {
        ID: "cf7006be-410e-4034-b87f-4c4fd7c0822e",
        Title: "Beer and bike supper with colleague",
        Amount: 20,
        Category: "Entertainment",
        ExpenseDate: "26-04-2024"
    },
    {
        ID: "181b08bc-76b7-42ae-813a-f011562ab6d1",
        Title: "Ruzmarin supper during quiz",
        Amount: 10.8,
        Category: "Entertainment",
        ExpenseDate: "25-04-2024"
    },
    {
        ID: "secondExpense",
        Title: "Ruzmarin Quiz",
        Amount: 20,
        Category: "Entertainment",
        ExpenseDate: "25-04-2024"
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
});

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
            const url = "https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker";
            const response = await fetch(url);
            const responseData = await response.json();
            setExpenseData(responseData);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect( () => {
        getExpenses();
    }, []);

    return (
        <>
            {isLoading && <ActivityIndicator/>}
            {!isLoading && <ExpenseList expenseItems={expenseData}/>}
        </>
    );
}

export default ExpensesListScreen;