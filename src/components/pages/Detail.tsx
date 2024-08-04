import { Box } from "@mui/material";
import { useMatches, useParams, useSearchParams } from "react-router-dom";

export default function Detail() {
	const params = useParams();
	const [searchParams] = useSearchParams();
	const matches = useMatches();

	console.log("params", params);
	console.log(searchParams.get("name"));
	console.log("matches", matches);

	return <Box>asd</Box>;
}
