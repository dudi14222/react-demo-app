import { StackNavigator } from 'react-navigation';

import React from 'react';

import Login from './app/pages/login'
import Users from './app/components/users/users'
import Products from './app/pages/products'
import DemoPage from './app/pages/demoPage'
import Product from './app/pages/product'


const RootNavigator = StackNavigator({

    Login: { screen: Login },
    Products: { screen: Products },
    Product: { screen: Product },    
   
    DemoPage: { screen: DemoPage },

    Users: { screen: Users },


});

export default RootNavigator;