import React, { Component } from 'react';
import { Layout, ProductCard, Loading } from '../../components/';
import {
    Link
} from 'react-router-dom';
import { getItems } from '../../actions/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './products.css';

class Products extends Component {
    constructor(props) {
        super(props);       
    }

    componentDidMount(){
        console.log("this.props.getItems(); " + this.props.products.length);
        if(this.props.products.length === 0){
            this.props.getItems();
        }
            
    }

    render() {
        return (
            <Layout showHeaderButton={true}>
                {
                    this.props.isLoading ? <Loading type='balls' color='#122cea' />
                    :
                    ''
                }
                
                <div className="product-list">
                    {this.props.products.map(({ id, name, imageUrl, shortDesc, price }, index) => (
                        <ProductCard key={`product-${id}-${index}`} className="product-card"
                            style={{ backgroundImage: `url(${imageUrl})` }}>
                            <Link to={`${this.props.match.url}/${id}`} className="product-wrapping-link">
                                <div className="product-top-title">
                                    <p className="product-title">{name}</p>
                                    <p className="product-price">{price}</p>
                                </div>
                                <p className="product-bottom-desc">{shortDesc}</p>
                            </Link>
                        </ProductCard>
                    ))
                    }
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.productsReducer.products,
    isLoading: state.productsReducer.isLoading
})

export default connect(mapStateToProps, { getItems })(withRouter(Products));



