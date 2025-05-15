import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './RegistrationScreen';
import CourseListScreen from './CourseListScreen-updated'; // Updated import
import CommunityScreen from './CommunityScreen';
import UserProfileScreen from './UserProfileScreen';
import CourseDetailsScreen from './CourseDetailsScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Registration">
                <Stack.Screen name="Registration" component={RegistrationScreen} />
                <Stack.Screen name="Course List" component={CourseListScreen} />
                <Stack.Screen name="Community" component={CommunityScreen} />
                <Stack.Screen name="User Profile" component={UserProfileScreen} />
                <Stack.Screen name="Course Details" component={CourseDetailsScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
