import Navbar from '../components/Navbar';
import Properties from '../components/Properties';
import SearchCard from '../components/SearchCard';

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
