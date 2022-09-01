import Navbar from "../components/Navigation/Navbar";
import Carousel from "../components/ImageSlider/Carousel";
import PropertyDescription from '../components/Properties/PropertyDescription';
const ViewProperty = ({ className }) => {
    return (
        <>
            <Navbar />
            <div className="w3-auto">
                <div className="w3-row-padding w3-stretch">
                    <Carousel />
                    <PropertyDescription />
                </div>
                <div className="w3-row-padding w3-stretch">
                    <div className="w3-col l12">
                        <button className="w3-button w3-round-large w3-border w3-border">Create Bid</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProperty;
