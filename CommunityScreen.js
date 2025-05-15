import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Community</Text>
            {/* Community features will go here */}
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

export default CommunityScreen;
