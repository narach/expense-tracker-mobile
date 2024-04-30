import React from 'react';
import { Text, View, Image, SafeAreaView, FlatList, StyleSheet } from 'react-native';
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

function ExpensesListScreen() {
    console.log('Expense items: ');
    console.log(expenseItems);

    return (
        <ExpenseList expenseItems={expenseItems}/>
    );
}

export default ExpensesListScreen;