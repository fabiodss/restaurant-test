import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import InfoScreen from '../screens/info';

const Stack = createStackNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{header: () => null}} />
                <Stack.Screen name="Search" component={SearchScreen} options={{header: () => null}} />
                <Stack.Screen name="Info" component={InfoScreen} options={{header: () => null}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};