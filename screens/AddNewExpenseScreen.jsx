import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const CommonStyles = require('../assets/styles/commonStyles');

function AddNewExpenseScreen() {
    const [title, onChangeTitle] = useState('');
    const [amount, onChangeAmount] = useState(0);
    const [category, onChangeCategory] = useState('');
    const [expenseDate, onChangeExpenseDate] = useState('');

    async function uploadExpense(newExpense) {
        const addExpenseUrl = "https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker";
        const response = await fetch(addExpenseUrl, {
            method: "POST",
            body: JSON.stringify(newExpense),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const resData = await response.json();

        if (!response.ok) {
            throw new Error('Failed to create a new expense');
        }

        console.log('Response: ', resData.message);
    }

    function resetInputs() {
        onChangeTitle('');
        onChangeAmount('');
        onChangeCategory('');
        onChangeExpenseDate('');
    }

    function saveExpense() {
        const newExpense = {
            Title: title,
            Amount: parseFloat(amount),
            Category: category,
            ExpenseDate: expenseDate
        };
        console.log(newExpense);
        uploadExpense(newExpense);
        resetInputs();
    }

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.textLabel}>Add New Expense Form</Text>
            <TextInput 
                style={CommonStyles.textInput} 
                placeholder='Expense Title'
                value={title}
                onChangeText={onChangeTitle}
            />
            <TextInput 
                style={CommonStyles.textInput} 
                placeholder='Amount(Eur)' 
                keyboardType='numeric'
                value={amount}
                onChangeText={onChangeAmount}
            />
            <TextInput 
                style={CommonStyles.textInput} 
                placeholder='Category'
                value={category}
                onChangeText={onChangeCategory}
            />
            <TextInput 
                style={CommonStyles.textInput} 
                placeholder='Expense Date'
                value={expenseDate}
                onChangeText={onChangeExpenseDate}
            />
            <Button onPress={saveExpense} title='Add Expense'/>
        </View>
    );
}

export default AddNewExpenseScreen;