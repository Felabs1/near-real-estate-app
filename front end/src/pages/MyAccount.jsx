import Navbar from '../components/Navbar';
import AccountIcon from '../components/AccountIcon';
import MyProperties from '../components/MyProperties';

const MyAccount = ({ className }) => {
    return (
    	<>
        	<Navbar />
        	<div className="w3-auto">
        		<div className="w3-row-padding w3-stretch">
                    <br />
        			<AccountIcon />
        		</div>
                <div className="w3-row-padding w3-stretch">
                    <MyProperties />            
                </div>
        	</div>
        </>

    );
};

export default MyAccount;
