
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    ImageBackground
} from 'react-native';

import images from '../data/images';
import mockData from '../data/jsonData.json';
import { ProductCard } from '../components'
import Layout from '../components/layout'

export default class Products extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            data: mockData,
            isLoading: false
        }
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => response.json())
        //     .then((res) => {
        //         console.log(res);
        //         this.setState({
        //             users: res,
        //             isLoading: false
        //         });
        //     })
    }

    static navigationOptions = {
        header: null
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
            <Layout title='Products'>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <ProductCard onPress={() => this.props.navigation.navigate('Product', item)} source={images.get(item.imageUrl)} style={styles.item} >
                        <View style={styles.productTop}>
                            <Text style={{ fontWeight: 'bold', color: 'white', margin: 10 }}>{item.name}</Text>
                            <Text style={{ fontWeight: 'bold', color: 'white', margin: 10 }}>{item.price}</Text>
                        </View>
                    </ProductCard>}
                    keyExtractor={item => item.id}
                />
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: 'white'

    },
    item: {
        marginTop: 10,
        height: 300
    },
    productTop: {
        height: 40,
        backgroundColor: 'black',
        opacity: 0.6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

