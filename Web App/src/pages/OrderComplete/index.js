import React from 'react';
import {
    Layout,
    SubHeader    
} from '../../components/';
const OrderComplete = () => (
    <Layout subHeader={<SubHeader></SubHeader>}>  
    <div className="inner-content">   
        <h2 className='text-center'>Thank you for you order</h2>        
    </div>
    </Layout>
);

export default OrderComplete;
