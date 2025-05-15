import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';

const kidsImages = [
    { id: 1, uri: 'https://i.imgur.com/1Q9Z1Zx.png' }, // example kid jumping image 1
    { id: 2, uri: 'https://i.imgur.com/2Q9Z2Zy.png' }, // example kid jumping image 2
    { id: 3, uri: 'https://i.imgur.com/3Q9Z3Zz.png' }, // example kid jumping image 3
];

const RegistrationScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const re = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
        return re.test(email);
    };

    const handleRegister = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters.');
            return;
        }
        // Mock registration success
        Alert.alert('Success', 'Registration successful!');
        // Navigate to Course List after registration
        navigation.navigate('Course List');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to ZEDULEARN!</Text>
                <View style={styles.imagesContainer}>
                    {kidsImages.map((img) => (
                        <Image
                            key={img.id}
                            source={{ uri: img.uri }}
                            style={styles.kidImage}
                            resizeMode="contain"
                        />
                    ))}
                </View>
                <Text style={styles.title}>Register</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Register" onPress={handleRegister} color="#4CAF50" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
        paddingVertical: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    welcome: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2e8b57',
        textAlign: 'center',
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 30,
    },
    kidImage: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: '#4CAF50',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
});

export default RegistrationScreen;
