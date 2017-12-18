let instance = null;

class AuthenticationService{  
    constructor() {
        if(!instance){
            this._isLogedIn = false; 
            this.email = 'test@gmail.com';
            this.pass =  '123456';
            instance = this;
        }    
        return instance;
    }
    isLogedIn(){
        return this._isLogedIn;
    } 
    authenticateUser(userEmail, userPassword){
        if(this.email === userEmail && this.pass === userPassword){
            this._isLogedIn = true;
            return true;
        }
        return false;
    }     
}
const AuthService = new AuthenticationService();

export default AuthService;