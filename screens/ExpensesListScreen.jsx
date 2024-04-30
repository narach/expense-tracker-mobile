import React from 'react';
import { Text, View } from 'react-native';

const CommonStyles = require('../assets/styles/commonStyles');

function ExpensesListScreen() {
    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.textLabel}>Expenses List</Text>
        </View>
    );
}

export default ExpensesListScreen;