import { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';

const EditAccount = ({ className }) => {
    const [fullName, setFullName] = useState("");
    const [userType, setUsertype] = useState("");
    const [contact, setContact] = useState("");

    const handleFullName = (e) => {
        setFullName(e.target.value);
    }

    const handleUserType = (e) => {
        setUsertype(e.target.value);
    }

    const handleContact = (e) => {
        setContact(e.target.value);
    }
    return (
    	<>
    	<Navbar />
    	<br/>
  		<div className="w3-auto"  style={{width: '30rem'}}>
  			<form className="w3-card-4 w3-round-xlarge">
  				<h3>Edit Details</h3>
  				<input className="w3-input" value={fullName} onChange={handleFullName} placeholder="Full Name" />
  				<select className="w3-input" placeholder="Usertype" value={userType} onChange={handleUserType}>
  					<option value="">Select User</option>
  					<option value="normal_user">Normal User</option>
  					<option value="estate_agent">Estate Agent</option>
  					<option value="verifier">Verifier</option>
  				</select>
  				<input className="w3-input" placeholder="Contact" value={contact} onChange={handleContact}/>
  				<br />
  				<button className="w3-button w3-grey w3-center w3-round-xlarge">Save</button>
  			</form>
  		</div>
  		</>      
    );
};

export default EditAccount;
