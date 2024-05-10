import React, {useState} from 'react';
import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {uploadExpense} from '../helpers/httpHelper';
import {formatDate} from '../helpers/formatHelpers';
import {ExpensePayload} from '../types/ExpensePayload';
import moment from 'moment';

const CommonStyles = require('../assets/styles/commonStyles');

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
  const [amount, onChangeAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenseDate, setExpenseDate] = useState(formatDate(selectedDate));
  const [category, setCategory] = useState('');
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  function resetInputs() {
    onChangeTitle('');
    onChangeAmount('');
    setSelectedDate(new Date());
    setExpenseDate(formatDate(selectedDate));
    setCategory('');
  }

  function saveExpense() {
    const newExpense: ExpensePayload = {
      Title: title,
      Amount: parseFloat(amount),
      Category: category,
      ExpenseDate: expenseDate,
      ExpenseDateLong: +moment(selectedDate).format("x")
    };
    console.log(newExpense);
    uploadExpense(newExpense);
    resetInputs();
  }

  return (
    <View style={CommonStyles.form}>
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
        <View style={CommonStyles.datePickerContainer}>
          <Text>Expense date: </Text>
          <Text>{expenseDate}</Text>
        </View>
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
      <View style={CommonStyles.dropDownContainer}>
        <DropDownPicker
          open={categoryOpen}
          value={category}
          items={items}
          setOpen={setCategoryOpen}
          setValue={setCategory}
          setItems={setItems}
          style={CommonStyles.categoryItem}
          dropDownContainerStyle={CommonStyles.categoryDropdown}
        />
      </View>

      <View style={CommonStyles.buttonView}>
        <Button onPress={saveExpense} title="Add Expense" color="#f194ff" />
      </View>
    </View>
  );
}

export default AddNewExpenseScreen;
