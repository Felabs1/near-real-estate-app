import { useState } from "react";
import "./addProperty.scss";
import Navbar from "../components/Navigation/Navbar";
import { newProperty } from "../utils/utils";
const AddProperty = () => {
	const [uploadedImages, setUploadedImages] = useState([]);
	const [propertyName, setPropertyName] = useState("");
	const [location, setLocation] = useState("");
	const [price, setPrice] = useState("");
	const [propertyDescription, setPropertyDescription] = useState("");

	const handleLocation = (e) => {
		setLocation(e.target.value);
	};
	const handlePrice = (e) => {
		setPrice(Number(e.target.value));
	};
	const handlePropertyName = (e) => {
		setPropertyName(e.target.value);
	};
	const handleDescription = (e) => {
		setPropertyDescription(e.target.value);
	};
	const uploadFiles = async (e) => {
		const acceptedFiles = e.target.files;
		const data = new FormData();
		for (const file of acceptedFiles) {
			data.append("multi-files", file, file.name);
		}

		fetch("http://localhost:3001/", {
			method: "POST",
			body: data,
		})
			.then((response) => response.json())
			.then((result) => setUploadedImages(result))
			.catch((error) => console.error("Error:", error));
		console.log(uploadedImages);
		// 19 1165.70
		// 21 jul bal 520 1685.7 bil
		// 1685.70 reminder instead 0f 1585 paid 1000
		// 685.70 todays bill    1585.70 as bal

		// reminder picked the wrong figure
		// total bill 630 total bill + 685;
	};

	const saveProperty = (e) => {
		e.preventDefault();
		const readyForSubmit =
			propertyName !== "" ||
			price !== "" ||
			location !== "" ||
			propertyDescription !== "" ||
			uploadedImages.length > 0;
		if (readyForSubmit) {
			let add = newProperty(
				propertyName,
				price,
				location,
				propertyDescription,
				uploadedImages
			);
			console.log(add);
		}else{
			alert("please fill in all the details");
		}
	};
	return (
		<>
			<Navbar />
			<br />
			<br />
			<div className="w3-card-4 w3-round-xlarge w3-auto">
				<h3 className="w3-padding">New Property</h3>
				<form className="add-card">
					<div className="group">
						<input
							className="w3-input"
							onChange={handleLocation}
							value={location}
							placeholder="location"
						/>
					</div>
					<div className="group">
						<input
							className="w3-input"
							type="number"
							onChange={handlePrice}
							value={price}
							placeholder="price"
						/>
					</div>
					<div className="group">
						<input
							className="w3-input"
							onChange={handlePropertyName}
							value={propertyName}
							placeholder="name"
						/>
					</div>
					<div className="group">
						{/*<>*/}
						<input
							className="w3-input"
							multiple
							placeholder="images"
							name="multi-files"
							onChange={uploadFiles}
							type="file"
							id="images"
						/>
					</div>
					<div className="group">
						<label htmlFor="">Description</label>
						<textarea
							name="description"
							className="w3-input"
							id=""
							onChange={handleDescription}
							value={propertyDescription}
							cols="30"
							rows="10"
						></textarea>
					</div>
					<br />
					<div className="group">
						<button
							onClick={saveProperty}
							className="w3-button w3-light-grey w3-round"
						>
							Save Property
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddProperty;
