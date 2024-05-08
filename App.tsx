import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigationBar from './components/TabNavigationBar';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigationBar />
    </NavigationContainer>
  );
}

export default App;
