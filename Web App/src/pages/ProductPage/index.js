import React, { Component } from 'react';
import {
    Layout    
} from '../../components/';
import getItemById from '../../services/dataProvider.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {addItem} from '../../actions/actions';
import './productPage.css';
class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: getItemById(this.props.match.params.id)
        }
    }
    addItem(){                
        this.props.addItem(this.state.item);
        this.props.history.goBack();        
    }

    render() {   
        const { history } = this.props     
        return (
            <Layout>                
                <div>
                    <div className="row">
                        <div className="col-md-7 col-sm-7 col-xs-7 col-lg-7">                            
                            <h4>{this.state.item.name}  {this.state.item.price}</h4>                                                      
                            <div className="product-image" style={{ backgroundImage: `url(${this.state.item.imageUrl})` }}>                              
                            </div>
                        </div>   
                        <div className="col-md-5 col-sm-5 col-xs-5 col-lg-5">
                            <button type="button" className="btn-change btn btn-primary back-button float-right"
                                onClick={() => history.goBack()}>Back
                            </button> 
                            <button type="button" className="btn-change btn btn-primary buy-button float-right" 
                                onClick={() => this.addItem()}>Buy
                            </button> 
                        </div>                                             
                    </div>                      
                    <div> {this.state.item.description} </div>                    
                </div>
            </Layout>
        );
    }
}


export default connect(null, { addItem })(withRouter(ProductPage));
