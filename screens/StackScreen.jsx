import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'My home' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    );
}