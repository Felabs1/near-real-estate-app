import PropertyCard from './PropertyCard';

const Properties = ({ className }) => {
    return (
        <div className="w3-row-padding w3-auto w3-stretch">
        	<br/>
        	<h3>Featured</h3>
        	<PropertyCard />
        	<PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        	<PropertyCard />
        </div>
    );
};

export default Properties;
