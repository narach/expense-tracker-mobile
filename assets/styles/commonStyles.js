import {StyleSheet} from 'react-native';

const CommonStyles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLabel: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    opacity: 1,
    shadowOpacity: 1,
  },
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
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    opacity: 1,
    shadowOpacity: 1,
    padding: 5,
  },
  categoryItem: {
    backgroundColor: '#E8DAEF',
    borderWidth: 1,
    borderRadius: 8,
  },
  categoryDropdown: {
    display: 'flex',
    backgroundColor: '#dfdfdf',
    marginTop: 5,
    minHeight: 300,
    borderRadius: 8,
  },
  dropDownContainer: {
    flex: 1,
    paddingHorizontal: 12,
    alignContent: 'stretch',
  },

  // Expense list styles
  expensesContainer: {
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
  expensesItem: {
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  expenseTitle: {
    flex: 2,
    fontSize: 16,
    fontWeight: '700',
  },
  expenseAmount: {
    fontSize: 26,
    fontWeight: '900',
    color: '#dd0000',
    flex: 1,
    textAlign: 'right',
  },
  expenseCategory: {
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
  expenseDetailsContainer: {
    padding: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginBottom: 5,
    marginRight: 10,
  },
  expenseListContainer: {
    flex: 1,
  },
  chartContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = CommonStyles;
