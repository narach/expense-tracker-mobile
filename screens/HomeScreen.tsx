import React from 'react';
import {Image, Text, View} from 'react-native';

const CommonStyles = require('../assets/styles/commonStyles');

function HomeScreen() {
  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.textLabel}>Expense tracker app</Text>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={CommonStyles.image}
      />
    </View>
  );
}

export default HomeScreen;
