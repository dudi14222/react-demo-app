
import React, { Component } from 'react';
import { 
    View,
    StyleSheet  
} from 'react-native'
import Header from './header'
import Main from './main'
class Layout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header} title={this.props.title} />
                <Main style={styles.main} >
                    {this.props.children}
                </Main>
            </View>
        );
    }
}
export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    header: {       
        height: 40,        
        backgroundColor: 'black',
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'center'
        
       
    },
    main: {
       flex: 1
    }
})
