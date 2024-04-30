/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';

const styles = StyleSheet.create({
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
  }
})

function App(): React.JSX.Element {

  function DetailsScreen({route, navigation}) {
    const {itemId, otherParams} = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.textLabel}>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParams: {JSON.stringify(otherParams)}</Text>
        <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
