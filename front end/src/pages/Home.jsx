import Navbar from "../components/Navbar";
import HomeDisplay from "../components/HomeDisplay";
import Properties from "../components/Properties";
const Home = ({ className }) => {
	return (
		<>
			<Navbar />
			<HomeDisplay />
			<Properties />
		</>
	);
};

export default Home;
