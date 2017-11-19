import React, { Component } from 'react';
import {
    Layout,
    SingleInput,
    SubHeader
} from '../../components/';
import { Prompt } from 'react-router';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',          
            formIsHalfFilledOut: false
        }
    }

    isDirty(email, name){
        return email !== '' || name !== '';
    }   

    handleEmailChange(e) {        
        this.setState({ email: e.target.value,
             formIsHalfFilledOut: this.isDirty(e.target.value, this.state.name) });
    }
    handleNameChange(e) {        
        this.setState({ name: e.target.value,
             formIsHalfFilledOut: this.isDirty(this.state.email, e.target.value) });
    }

    render() {   
        return (
            <Layout subHeader={<SubHeader>Contact Page</SubHeader>}>  
                <div className="main-container">
                    <div className="inner-container col-md-6 col-md-offset-3">
                        <form>                        
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <SingleInput required={'true'} inputType={'text'} content={this.state.email} 
                                    placeholder={'email'} className={'form-control'} id={'email'}
                                    controlFunc={this.handleEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <SingleInput required={'true'} inputType={'text'} content={this.state.password}
                                    placeholder={'name'} className={'form-control'} id={'name'} 
                                    controlFunc={this.handleNameChange.bind(this)} />
                            </div>                                               
                        </form>
                    </div>
                </div>

                <Prompt
                    when={this.state.formIsHalfFilledOut}
                    message={location => (
                    `Are you sure you want to go to ${location.pathname}?`
                    )}
                />
            </Layout>
        );
    }
}

export default Contact;
