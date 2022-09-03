import Navbar from '../components/Navigation/Navbar';
import Properties from '../components/Properties/Properties';
import SearchCard from '../components/SearchCard/SearchCard';

const AllProperties = ({ className }) => {
    return (
    	<>
        <Navbar />
        <br />
        <SearchCard />
        <Properties />
        </>
    );
};

export default AllProperties;
