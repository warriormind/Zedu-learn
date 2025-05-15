import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <Text>This is the user profile screen. User details and settings will be shown here.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});

export default UserProfileScreen;
