import React, { Component } from 'react';
import {
    Layout,
    SingleInput,
    SubHeader
} from '../../components/';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../actions/actions';
import './logInPage.css';

class LogInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hideClass: 'hidden'
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isLogedIn){
            console.log(this.props.history);           
            this.props.history.goBack();
        }
        else{
            if(!nextProps.isLoading)
                this.setState({ hideClass: '' });
        }            
    }
    handleAuthenticate(e) {
        e.preventDefault();        
        this.props.logIn(this.state.email, this.state.password);                    
        return false;
    }

    clearErrorMessage() {
        this.setState({ hideClass: 'hidden' });
    }

    handleEmailChange(e) {
        this.clearErrorMessage();
        this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
        this.clearErrorMessage();
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Layout subHeader={<SubHeader>Login Page</SubHeader>}>

                <div className="main-container">                    
                    <div className="inner-container col-md-4 col-md-offset-4">
                        <form action="" onSubmit={this.handleAuthenticate.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <SingleInput required={'true'} inputType={'text'} content={this.state.email} placeholder={'email'}
                                    className={'form-control'} id={'email'} disabled={this.props.isLoading} controlFunc={this.handleEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <SingleInput required={'true'} inputType={'password'} content={this.state.password} placeholder={'password'}
                                    className={'form-control'} id={'password'} disabled={this.props.isLoading} controlFunc={this.handlePasswordChange.bind(this)} />
                            </div>
                            <span className={`label label-danger ${this.state.hideClass}`}>The email address or password you entered is not valid</span>
                            <button type="submit" className="btn-change btn btn-primary login-button" disabled={this.props.isLoading}>
                                {this.props.isLoading ?
                                        <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
                                    :
                                        ''
                                } 
                                {this.props.isLoading ? ' Loading...': ' Submit'}                                 
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = ({userReducer: {isLoading, isLogedIn}}) => ({
    isLoading,
    isLogedIn
})

export default connect(mapStateToProps, { logIn })(withRouter(LogInPage));

