import React from 'react';
import { Text, View } from 'react-native';

const CommonStyles = require('../assets/styles/commonStyles');

function AddNewExpenseScreen() {
    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.textLabel}>Add New Expense Form</Text>
        </View>
    );
}

export default AddNewExpenseScreen;