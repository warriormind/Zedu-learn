import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Course Details</Text>
            <Text>This screen will display detailed information about a selected course.</Text>
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

export default CourseDetailsScreen;
