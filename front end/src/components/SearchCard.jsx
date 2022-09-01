import "./SearchCard.css";
const SearchCard = ({ className }) => {
	return (
		<div className="w3-card w3-padding w3-row-padding w3-stretch w3-auto w3-round">
			<div className="w3-col l3">
				<input
					className="w3-input w3-border w3-round"
					placeholder="location"
				/>
			</div>
			<div className="w3-col l3">
				<select
					className="w3-input w3-border w3-round"
					placeholder="purpose"
				>
					<option value="" selected>
						purpose
					</option>
					<option value="sale">Sale</option>
					<option value="rent">Rent</option>
				</select>
			</div>
			<div className="w3-col l3">
				<select
					className="w3-input w3-border w3-round"
					placeholder="purpose"
				>
					<option value="" selected>
						price range
					</option>
					<option value="10000">Less than 10000</option>
					<option value="20000">10000 - 20000</option>
					<option value="10000">20000 - 100000</option>
					<option value="100000">100000 - 500000</option>
					<option value="500000"> Greater than 500000</option>
				</select>
			</div>
			<div class="w3-col l3">
				<button className="w3-button w3-blue w3-round">
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchCard;
