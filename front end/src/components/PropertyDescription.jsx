import './propertyDescription.scss';
const PropertyDescription = () => {
	const customFont = {
		color: "#444"
	}
    return (
        <div className="w3-col l4">
        	<div className="w3-panel" style={customFont}>
        	<h1>Description</h1>
        	<hr />
        	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    </p>
    		<table className="w3-table owner">
    			<caption>Owner Details</caption>
    			<thead>
    			</thead>
    			<tbody>
    			<tr>
    				<th>Name</th>
    				<td>Felix Awere</td>
    			</tr>
    			<tr>
    				<th>Contact</th>
    				<td>0111942081</td>
    			</tr>
    			<tr>
    				<th>Residence</th>
    				<td>Kisumu</td>
    			</tr>
    			</tbody>
    		</table>
        	</div>
        </div>
    );
};

export default PropertyDescription;
