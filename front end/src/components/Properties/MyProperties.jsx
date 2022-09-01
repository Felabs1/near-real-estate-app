import "./myProperties.scss";
const MyProperties = ({ className }) => {
    return (
        <div className="w3-col l12">
        	<br />
        	<div className="w3-card-4">
	        	<table className="w3-table propertyTable">
	        		<caption>My Properties</caption>
	        		<tr>
	        			<th>#</th>
	        			<th>Property Name</th>
	        			<th>price</th>
	        			<th>location</th>
	        			<th>status</th>
	        			<th>Action</th>
	        		</tr>
	        		<tr>
	        			<td>YnxT067</td>
	        			<td>Riara 001</td>
	        			<td>$ 40</td>
	        			<td>Kisumu</td>
	        			<td>Available</td>
	        			<td><button className="actionButton">Info</button>&nbsp;<button className="actionButton">Edit</button>&nbsp;<button className="actionButton">Delete</button></td>
	        		</tr>
	        	</table>
        	</div>
        </div>
    );
};

export default MyProperties;
