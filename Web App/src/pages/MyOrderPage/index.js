import React, { Component } from 'react';
import {
    Layout,    
    ItemsTable
} from '../../components/';
import { withRouter } from 'react-router-dom';
import { getOrderHistory } from '../../actions/actions';
import { connect } from 'react-redux';
import { getItemsSelector, getIsloadinSelector } from '../../reducers/cartReducer';

class MyOrderPage extends Component {   

    componentDidMount(){
        this.props.getOrderHistory();
    }

    render() {
        return (
            <Layout>                
                <ItemsTable items={this.props.items}  isCartClosed={true}/>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.orderHistoryReducer.items,       
    email: state.userReducer.email
})

export default connect(mapStateToProps, { getOrderHistory })(withRouter(MyOrderPage));
