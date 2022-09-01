import cover from '../images/cover.jpg';
import "./homeDisplay.css";

const HomeDisplay = () => {
	return (
		<div className="wallpaper">
			<div className="overlay">
				<br />
				<div className="w3-auto">
					<h1 className="w3-text-white w3-center">Felabs Real Estate</h1>
					<div className="w3-row-padding w3-stretch">
						<div className="w3-col l3">
							<input className="w3-input w3-border w3-round-xlarge" placeholder="location"/>
						</div>
						<div className="w3-col l3">
							<select className="w3-input w3-border w3-round-xlarge" placeholder="purpose">
								<option value="" selected>purpose</option>
								<option value="sale">Sale</option>
								<option value="rent">Rent</option>
							</select>
						</div>
						<div className="w3-col l3">
							<select className="w3-input w3-border w3-round-xlarge" placeholder="purpose">
								<option value="" selected>price range</option>
								<option value="10000">Less than 10000</option>
								<option value="20000">10000 - 20000</option>
								<option value="10000">20000 - 100000</option>
								<option value="100000">100000 - 500000</option>
								<option value="500000"> Greater than 500000</option>
							</select>
						</div>
						<div class="w3-col l3">
							<button className="w3-button w3-text-blue w3-border w3-round-xlarge">Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeDisplay