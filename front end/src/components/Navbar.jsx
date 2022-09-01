import logo from '../images/logo.jpg';
const Navbar = () => {
    const isLoggedIn = true;
    if(isLoggedIn){
        return (
        <div className="w3-bar w3-card-4 w3-white">
            <span className="logo-holder w3-bar-item"><img className="w3-image logo" src={logo} /></span>
            <div className="w3-right">
                <a className="w3-bar-item">New Property</a>
                <a className="w3-bar-item">felabs1.testnet</a>
            </div>
        </div>
    );
    }else{
        return(
            <div className="w3-bar w3-card-4 w3-white">
                <span className="w3-large w3-bar-item"><img className="w3-image logo" src={logo} /></span>
                <div className="w3-right">
                    <a className="w3-bar-item"><button className="w3-button w3-blue w3-round">Login</button></a>
         </div>
            </div>
            )
    }
    
};

export default Navbar;
