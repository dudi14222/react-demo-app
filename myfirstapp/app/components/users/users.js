
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';


export default class Users extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    users: res,
                    isLoading: false
                });
            })
    }

    static navigationOptions = {
        title: 'Users',
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 220 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View>
                <FlatList
                    data={this.state.users}
                    renderItem={({ item }) => <Text style={styles.item} key={item.id} >{item.name}</Text>}
                    keyExtractor={item => item.id}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

