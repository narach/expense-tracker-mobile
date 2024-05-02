import React from 'react';
import {View, Text} from 'react-native';

const CommonStyles = require('../assets/styles/commonStyles');

const ExpenseItem = ({expenseItem}) => {
  return (
    <View style={CommonStyles.expensesContainer}>
      <View style={CommonStyles.expensesItem}>
        <Text style={CommonStyles.expenseTitle}>{expenseItem.Title}</Text>
        <Text style={CommonStyles.expenseAmount}>{expenseItem.Amount} €</Text>
      </View>
      <View style={CommonStyles.expenseDetailsContainer}>
        <Text style={CommonStyles.expenseCategory}>
          Category: <Text>{expenseItem.Category}</Text>
        </Text>
        <Text style={CommonStyles.expenseDate}>
          Expense date: <Text>{expenseItem.ExpenseDate}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ExpenseItem;
