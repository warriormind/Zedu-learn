import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseListScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Course List</Text>
            {/* Course listing will go here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
});

export default CourseListScreen;
