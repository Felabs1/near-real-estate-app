import {useState} from 'react';
import logo from '../../images/logo.jpg';
import { login } from '../../utils/utils';
const Navbar = () => {
    
    if(window.walletConnection.isSignedIn()){
        return (
        <div className="w3-bar w3-card-4 w3-white">
            <span className="logo-holder w3-bar-item"><img className="w3-image logo" src={logo} /></span>
            <div className="w3-right">
                <a className="w3-bar-item">New Property</a>
                <a className="w3-bar-item">{window.walletConnection.getAccountId()}</a>
            </div>
        </div>
    );
    }else{
        return(
            <div className="w3-bar w3-card-4 w3-white">
                <span className="w3-large w3-bar-item"><img className="w3-image logo" src={logo} /></span>
                <div className="w3-right">
                    <a className="w3-bar-item"><button className="w3-button w3-blue w3-round" onClick={() => login()}>Login</button></a>
         </div>
            </div>
            )
    }
    
};

export default Navbar;
