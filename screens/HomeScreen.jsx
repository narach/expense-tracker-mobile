import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
    useColorScheme,
    StyleSheet
  } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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
  });

function HomeScreen( {navigation}) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
            <View style={styles.container}>
              <Text style={styles.textLabel}>Expense tracker app</Text>
              <Image 
                source={require('../assets/images/logo.jpg')}
                style={styles.image}
              />
            </View>
            <Button
              title="View Details"
              onPress={() => 
                navigation.navigate('Details', {
                  itemId: 86,
                  otherParams: 'additional params'
                })
              }
            />
        </ScrollView>
      </SafeAreaView>
    ); 
  }

  export default HomeScreen;