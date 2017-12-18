
import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import authService from '../services/authenticationService';
import Layout from '../components/layout'


export default class Login extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            isLoading: false
        }
    }

    componentDidMount() {

    }

    setUser(text) {
        this.setState({ user: text });
    }

    setPassword(text) {
        this.setState({ password: text });
    }

    handleAuthenticate() {
        Keyboard.dismiss();
        if (authService.authenticateUser(this.state.user, this.state.password)) {
            console.log("valid user");
            //this.setState({ isLoading: true });
            this.props.navigation.navigate('Products', { name: 'Lucy' });
        }
        else {
            console.log("not valid user");
        }
    }


    static navigationOptions = {
        header: null
    }
    render() {

        return (
            <Layout title='Login'>
                <ImageBackground source={require('../images/ski.jpg')} style={{flex: 1}} >
                    <View style={[styles.boxContainer, styles.boxTwo]}>
                        {
                            this.state.isLoading ?
                                <View style={{ flex: 1, paddingTop: 60 }}>
                                    <ActivityIndicator
                                        style={[styles.centering, { height: 80 }]}
                                        size="large"
                                        color="black"
                                    />
                                </View>
                                :
                                <View>
                                    <TextInput style={styles.inputBox}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        placeholder="Email"
                                        placeholderTextColor="#4d4d4d"
                                        selectionColor="#fff"
                                        keyboardType="email-address"
                                        onChangeText={(text) => this.setUser(text)}
                                        value={this.state.user}

                                    />

                                    <TextInput style={styles.inputBox}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        placeholderTextColor="#4d4d4d"
                                        onChangeText={(text) => this.setPassword(text)}
                                        value={this.state.password}
                                    />
                                    <TouchableOpacity style={styles.button} onPress={() => this.handleAuthenticate()}>
                                        <Text style={styles.buttonText}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                        }

                    </View>

                </ImageBackground>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    boxContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: 260,
        margin: 10,
        backgroundColor: '#eaeafa',
        borderColor: 'black', borderWidth: 2

    },
    inputBox: {
        width: 300,
        backgroundColor: '#b3b3b3',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        opacity: 0.7
    },

    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

})

