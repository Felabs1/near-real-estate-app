import "./propertyCard.css";
import cover from "../images/cover.jpg";
const PropertyCard = ({ className }) => {
    return (
    	<div className="w3-col l4 m6 property-card">
		<div className="w3-card w3-round-xlarge">
			<div className="property-image w3-round-xlarge" style={{backgroundImage: `url(${cover})`}}>
			<button className="w3-button w3-round-xlarge w3-margin w3-blue">See More</button>
			</div>
			<div className="card-details">
				<span className="price">sh 4000</span> <span className="sub-details"> | rent | Kisumu</span>
				<hr />	
				<span>lorem ipsum dolor sit amet consectetur...</span>
			</div>
		</div>
		</div>        
    );
};


export default PropertyCard;
