import HomeScreen from '../screens/HomeScreen';
import ExpensesListScreen from '../screens/ExpensesListScreen';
import AddNewExpenseScreen from '../screens/AddNewExpenseScreen';
import ExpenseStatsScreen from '../screens/ExpenseStatsScreen';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExpenseChartScreen from '../screens/ExpenseChartScreen';

const TabNavigationBar = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: '#AED6F1'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Expenses List"
        component={ExpensesListScreen}
        options={{
          tabBarLabel: 'Expenses',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Expense"
        component={AddNewExpenseScreen}
        options={{
          tabBarLabel: 'Add Expense',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Expense Stats"
        // component={ExpenseStatsScreen}
        component={ExpenseChartScreen}
        options={{
          tabBarLabel: 'Statistics',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chart-pie" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationBar;
