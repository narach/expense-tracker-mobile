import React from 'react';
import { Text, View } from 'react-native';

const CommonStyles = require('../assets/styles/commonStyles');

function ExpenseStatsScreen() {
    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.textLabel}>Expense Statistics</Text>
        </View>
    );
}

export default ExpenseStatsScreen;