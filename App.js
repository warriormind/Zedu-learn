import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './RegistrationScreen';
import CourseListScreen from './CourseListScreen';
import CommunityScreen from './CommunityScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Registration">
                <Stack.Screen name="Registration" component={RegistrationScreen} />
                <Stack.Screen name="Course List" component={CourseListScreen} />
                <Stack.Screen name="Community" component={CommunityScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
