import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Page from "../common/Page";

export default function Main() {
	const navigate = useNavigate();

	function onClick() {
		navigate("detail/3?name=asd");
	}

	return (
		<Page>
			<div>
				<Button variant="outlined" color="primary" onClick={onClick}>
					button
				</Button>

				<Link to="/sample">sample</Link>
			</div>
		</Page>
	);
}
