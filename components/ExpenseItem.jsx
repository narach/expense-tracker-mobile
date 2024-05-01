import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#82E0AA',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Arial',
    borderColor: '#0000ff',
    borderWidth: 1,
    borderRadius: 15,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  info: {
    padding: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginBottom: 5,
    marginRight: 10,
  },
  title: {
    flex: 2,
    fontSize: 16,
    fontWeight: '700',
  },
  amount: {
    fontSize: 26,
    fontWeight: '900',
    color: '#dd0000',
    flex: 1,
    textAlign: 'right',
  },
  category: {
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  expenseDate: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
    flex: 1,
  },
});

const ExpenseItem = ({expenseItem}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>{expenseItem.Title}</Text>
        <Text style={styles.amount}>{expenseItem.Amount} €</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.category}>
          Category: <Text>{expenseItem.Category}</Text>
        </Text>
        <Text style={styles.expenseDate}>
          Expense date: <Text>{expenseItem.ExpenseDate}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ExpenseItem;
