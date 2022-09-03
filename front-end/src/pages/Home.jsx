import Navbar from "../components/Navigation/Navbar";
import HomeDisplay from "../components/Home/HomeDisplay";
import Properties from "../components/Properties/Properties";
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
