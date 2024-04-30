import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row'
    },
    title: {
        fontSize: 14,
    },
    title2:{
        fontSize:12 , marginLeft:10
    }
});

const ExpenseItem = ({expenseItem}) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.title}>{expenseItem.Title}</Text>
            </View>
            <View>
                <Text style={styles.title}>{expenseItem.Amount}</Text>
                <Text style={styles.title}>{expenseItem.Category}</Text>
                <Text style={styles.title}>{expenseItem.ExpenseDate}</Text>
            </View>
        </View>
    );
}

export default ExpenseItem;