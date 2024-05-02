import React from 'react';
import {View, FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';

const CommonStyles = require('../assets/styles/commonStyles');

const ExpenseList = ({expenseItems}) => {
  return (
    <View style={CommonStyles.expenseListContainer}>
      <FlatList
        data={expenseItems}
        renderItem={({item}) => <ExpenseItem expenseItem={item} />}
        keyExtractor={item => item.ID}
      />
    </View>
  );
};

export default ExpenseList;
