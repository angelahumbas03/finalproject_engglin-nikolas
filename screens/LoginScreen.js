import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: "",
            message: ""
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLogin(e) {
        if (this.state.username !== 'test') {
            this.setState({ message: "Username salah!" });
            return ;
        }

        if (this.state.password !== '1234') {
            this.setState({ message: "Password salah!" });
            return ;
        }

        return this.props.navigation.navigate('Home');
    }

    handleUsernameChange(text) {
        this.setState({ username: text })
    }

    handlePasswordChange(text) {
        this.setState({ password: text })
    }

    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 30, justifyContent: "center"}}>
                <Image 
                    style={{width: "50%", height: "20%", alignSelf: "center" }}
                    source={require('../assets/user.jpg')}
                />
                <Text style={{ paddingVertical: 20, alignSelf: "center" }}>{this.state.message}</Text>
                <Text>Username</Text>
                <TextInput 
                    style={{ borderWidth: 1 }}
                    onChangeText={this.handleUsernameChange} 
                    value={this.state.username}
                />
                <Text>Password</Text>
                <TextInput
                    style={{ borderWidth: 1, marginBottom: 10 }}
                    onChangeText={this.handlePasswordChange} 
                    value={this.state.password}
                    secureTextEntry={true}
                    textContentType="password"
                />
                <Button title="Log in" onPress={this.handleLogin}/>
            </View>
        );
    }
}

export default Login;