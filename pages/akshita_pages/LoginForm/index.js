import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };

    login = async => {
        if (this.state.username === 'admin' && this.state.password === 'pass1234') {
            // alert('Logged in ')
            this.props.navigation.navigate('Tista', { name: 'Tista' });
        }
        else if (this.state.username === 'admin2' && this.state.password === 'pass12334') 
        this.props.navigation.navigate('Associate', { name: 'Associate' });
        
        else alert('Username or password is incorrect')
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Username or Email'
                    returnKeyType="next"
                    keyboardType="email-address"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    style={styles.input} />
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    returnKeyType="go"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    style={styles.input} />
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={this.login}
                >
                    <Text style={styles.button}>LOGIN</Text>
                </TouchableOpacity>
            </View>


        );
    }

};
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 150
    },
    input: {
        height: 40,
        backgroundColor: '#d7f8ff',
        marginBottom: 20,
        marginBottom: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        padding: 10,
    },
    button: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }


});

export default LoginForm;
