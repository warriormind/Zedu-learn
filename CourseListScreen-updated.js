import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const courses = [
    { id: '1', title: 'Introduction to Programming', price: 'Free' },
    { id: '2', title: 'Web Development Basics', price: '$50' },
    { id: '3', title: 'Data Science with Python', price: '$100' },
    { id: '4', title: 'Mobile App Development', price: '$75' },
];

const CourseListScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Course List</Text>
            <FlatList
                data={courses}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.courseItem}>
                        <Text style={styles.courseTitle}>{item.title}</Text>
                        <Text style={styles.coursePrice}>{item.price}</Text>
                    </View>
                )}
            />
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
    courseItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    courseTitle: {
        fontSize: 18,
    },
    coursePrice: {
        fontSize: 16,
        color: 'gray',
    },
});

export default CourseListScreen;
