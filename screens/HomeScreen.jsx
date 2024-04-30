import React from 'react';
import {
    Image,
    Text,
    View,
    useColorScheme  } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const CommonStyles = require('../assets/styles/commonStyles');

function HomeScreen() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

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