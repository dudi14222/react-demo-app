import React from 'react';
import { 
    Header,
    Body
} from '../components'
import { connect } from 'react-redux';
import classNames from 'classnames';
import T from 'i18n-react';
import heb from '../translations/heb.json';
import en from '../translations/en.json';
import {getItemsSelector} from '../reducers/cartReducer';
import {getIsLogedInSelector} from '../reducers/userReducer';

    
export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: false,            
            isEnLanguage: localStorage.lang !== 'he'
        }
        T.setTexts(localStorage.lang === 'he' ? heb:en);
    }
 
  open = () =>  {
    this.setState({
      menuState: true
    })
  }

  switchLanguage = () =>{
      if(this.state.isEnLanguage){ 
          T.setTexts(heb);         
          this.setState({ isEnLanguage: false});
          localStorage.setItem("lang", "he");
      }
      else{    
          T.setTexts(en);      
          this.setState({ isEnLanguage: true});
          localStorage.setItem("lang", "en");
      }
  }

  close = (e) => {
    if (this.state.menuState) {
      this.setState({
        menuState: false
      })
    } 
  }

  getItemCount(){
        let itemCount = 0;
        for(let i in this.props.items){  
            itemCount = itemCount + this.props.items[i].quantity;                          
        } 
        return itemCount;
    }

  render() { 
    const {         
        open, 
        close, 
        switchLanguage,
        state: { menuState }, 
        props: { 
            className,
            children,
            subHeader,
            showHeaderButton          
        }
    } = this;
    const headerButton = this.props.isLogedIn ?         
        {   
            name: {key: 'Cart', nItems: this.getItemCount()},
            path: '/cart'
        }
        :
        {   
            name: {key: 'LogIn'},
            path: '/login'
        };
    return (
        <div className={classNames(["App", className ])} onClick={() => close()}>    
            <Header showHeaderButton={showHeaderButton} headerButton={headerButton} menuConfig={{ menuState, open, switchLanguage }} userName={this.props.userName} >
                {subHeader}
            </Header>
            <Body>
                { children }
            </Body>              
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    items: getItemsSelector(state),
    isLogedIn: getIsLogedInSelector(state),
    userName: state.userReducer.userName
})

export default connect(mapStateToProps, null)(Layout);
