/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ExpensesListScreen from './screens/ExpensesListScreen';
import AddNewExpenseScreen from './screens/AddNewExpenseScreen';
import ExpenseStatsScreen from './screens/ExpenseStatsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={ ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Expenses List') {
              iconName = 'view-list';
            } else if (route.name === 'Add Expense') {
              iconName = 'bank-plus';
            } else if (route.name === 'Expense Stats') {
              iconName = 'chart-pie';
            } else {
              iconName = 'home'
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;  
          }
        })
        }
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Tab.Screen 
          name="Expenses List" 
          component={ExpensesListScreen}
        />
        <Tab.Screen name="Add Expense" component={AddNewExpenseScreen}/>
        <Tab.Screen name="Expense Stats" component={ExpenseStatsScreen}/>
      </Tab.Navigator>  
    </NavigationContainer>
  );
}

export default App;
