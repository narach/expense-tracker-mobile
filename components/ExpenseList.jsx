import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const ExpenseList = ({expenseItems}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={expenseItems}
                renderItem={({ item }) => <ExpenseItem expenseItem={item} />}
                keyExtractor={item => item.ID}
            />
        </View>
    );
}

export default ExpenseList;