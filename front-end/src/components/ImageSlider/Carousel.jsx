import "./carousel.scss";
import image1 from "../../images/3.jpg";
import image2 from "../../images/4.jpg";
import image3 from "../../images/5.jpg";
import image4 from "../../images/6.jpg";
import ImageSlider from "./ImageSlider";

const Carousel = () => {
    const slides = [
        {url: `${image1}`, title: 'Beach'},
        {url: `${image2}`, title: 'Beach'},
        {url: `${image3}`, title: 'Beach'},
        {url: `${image4}`, title: 'Beach'},
    ];

    const containerStyles={
        width: "100%",
        height: "380px",
        margin: "0 auto",
    };

    const MainDescStyles = {color: "#444"};
    return (
        <div className="w3-col l8">
            <br />
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <br />
            <div className="mainDetails" style={MainDescStyles}>
                <h3>Riara 39, $400, Nairobi</h3>
            </div>
        </div>
    );
};

export default Carousel;
