import React, { Component } from 'react';
import {
    Layout,    
    ItemsTable
} from '../../components/';
import { withRouter } from 'react-router-dom';
import { removeItem, saveCart } from '../../actions/actions';
import { connect } from 'react-redux';
import { getItemsSelector, getIsloadinSelector } from '../../reducers/cartReducer';
import './cartPage.css'

class CartPage extends Component {
    removeItem(itemId) {
        this.props.removeItem(itemId);
    }
    saveItems() {
        console.log('saving');
        console.log(this.props.items);
        this.props.saveCart(this.props.items);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.orderSaved){            
            this.props.history.push('/order-complete');
        }        
    }

    render() {
        return (
            <Layout>                
                <button type="button" className="btn-change btn btn-primary float-right save-btn" onClick={() => this.saveItems()}  disabled={this.props.isLoading}>
                    {this.props.isLoading ?
                        <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
                        :
                        ''
                    }
                    {this.props.isLoading ? ' Saving...' : ' Save'}
                </button>
                <ItemsTable items={this.props.items} removeItem={this.removeItem.bind(this)} isCartClosed={this.props.isLoading}/>                
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    items: getItemsSelector(state),
    isLoading: getIsloadinSelector(state),
    orderSaved: state.cartReducer.orderSaved    
})

export default connect(mapStateToProps, { removeItem, saveCart })(withRouter(CartPage));
