import moment from 'moment';
import React, {useState, useRef} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const CommonStyles = require('../assets/styles/commonStyles');

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#E8DAEF',
    marginTop: 8,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
  },
  buttonView: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  categoryInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#E8DAEF',
  },
});

function AddNewExpenseScreen() {
  const [items, setItems] = useState([
    {label: 'Food', value: 'Food'},
    {label: 'Medicine', value: 'Medicine'},
    {label: 'Motorcycles', value: 'Motorcycles'},
    {label: 'Pets', value: 'Pets'},
    {label: 'Entertinement', value: 'Entertinement'},
    {label: 'Restaurants', value: 'Restaurants'},
    {label: 'Other', value: 'Other'},
  ]);

  const [title, onChangeTitle] = useState('');
  const [amount, onChangeAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenseDate, setExpenseDate] = useState(formatDate(selectedDate));
  const [category, setCategory] = useState('');
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  async function uploadExpense(newExpense) {
    const addExpenseUrl =
      'https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker';
    const response = await fetch(addExpenseUrl, {
      method: 'POST',
      body: JSON.stringify(newExpense),
      headers: {
        'Content-Type': 'application/json',
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
    setExpenseDate('');
    setCategory('');
  }

  function formatDate(selDate) {
    return moment(selDate).format('DD-MM-YYYY');
  }

  function saveExpense() {
    const newExpense = {
      Title: title,
      Amount: parseFloat(amount),
      Category: category,
      ExpenseDate: expenseDate,
    };
    console.log(newExpense);
    uploadExpense(newExpense);
    resetInputs();
  }

  return (
    <View style={styles.form}>
      <Text style={CommonStyles.textLabel}>Add New Expense Form</Text>
      <TextInput
        style={CommonStyles.textInput}
        placeholder="Expense Title"
        value={title}
        onChangeText={onChangeTitle}
      />
      <TextInput
        style={CommonStyles.textInput}
        placeholder="Amount(Eur)"
        keyboardType="numeric"
        value={amount}
        onChangeText={onChangeAmount}
      />
      <TouchableOpacity
        onPress={() => {
          setDatePickerOpen(true);
        }}>
        <TextInput
          style={CommonStyles.textInput}
          placeholder="Expense Date"
          editable={false}
          value={expenseDate}
        />
      </TouchableOpacity>
      <DatePicker
        date={selectedDate}
        mode="date"
        locale="en"
        modal
        open={datePickerOpen}
        onConfirm={selDate => {
          setDatePickerOpen(false);
          setSelectedDate(selDate);
          setExpenseDate(formatDate(selDate));
        }}
        onCancel={() => {
          setDatePickerOpen(false);
        }}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 12,
          alignContent: 'stretch',
        }}>
        <DropDownPicker
          open={categoryOpen}
          value={category}
          items={items}
          setOpen={setCategoryOpen}
          setValue={setCategory}
          setItems={setItems}
          style={{
            backgroundColor: '#E8DAEF',
            borderWidth: 1,
            borderRadius: 8,
          }}
          dropDownContainerStyle={{
            display: 'flex',
            backgroundColor: '#dfdfdf',
            marginTop: 5,
            minHeight: 300,
          }}
        />
      </View>

      <View style={styles.buttonView}>
        <Button onPress={saveExpense} title="Add Expense" color="#f194ff" />
      </View>
    </View>
  );
}

export default AddNewExpenseScreen;
