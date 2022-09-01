import './accountIcon.scss';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const AccountIcon = ({ className }) => {
	return (
		<div class="w3-col accountIcon l6">
			<div className="w3-card-4 w3-round">
				<PersonOutlineOutlinedIcon className="personIcon"/>
				<div className="generalDetails">
					<table class="w3-table accountTable">
						<caption>Account Details</caption>
						<tr>
							<th>Name</th>
							<td>Felix Awere</td>
						</tr>
						<tr>
							<th>Account Id</th>
							<td>felabs.near</td>
						</tr>
						<tr>
							<th>Balance</th>
							<td>200 N</td>
						</tr>
						<tr>
							<td><button class="w3-button w3-blue w3-round">Edit Account</button></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AccountIcon;
