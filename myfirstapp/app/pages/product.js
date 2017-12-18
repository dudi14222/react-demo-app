
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Button
} from 'react-native';

import images from '../data/images';
import mockData from '../data/jsonData.json';
import { ProductCard } from '../components'
import Layout from '../components/layout'

export default class Product extends Component<{}> {    

    static navigationOptions = {
        header: null
    }
    render() {
        const { params } = this.props.navigation.state;
        const name = params ? params.name:'';   
        const price = params ? params.price:'';     
        const imageUrl = params ? params.imageUrl:'';     
        const description = params ? params.description:'';     
        return (
            <Layout title='Product'>

                <ImageBackground style={styles.productImageContainer} source={images.get(imageUrl)}>
                    <View style={styles.productHeader}>
                        <Text style={{fontWeight: 'bold', color: 'white', padding: 15 }}>{`${name} ${price}`}</Text>
                        <View style={{ margin: 7, width: 60 }}>
                            <Button
                                title="Buy"
                                color="#3333ff"
                                onPress={() => this.props.navigation.navigate('Products', { name: 'Lucy' })}
                            />
                        </View>
                    </View>                    
                </ImageBackground>
                <View style={styles.productDescription}>
                    <Text style={{fontWeight: 'bold', color: 'black', padding: 3, overflow: 'scroll' }}>{description}</Text>
                </View>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    productImageContainer: {
        flex: 3        
    },
    productHeader: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        opacity: 0.7
    },    
    productDescription: {
        flex: 1
        
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        width: 50
    },
})

