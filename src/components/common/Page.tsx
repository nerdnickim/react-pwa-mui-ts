import { Box, SxProps } from "@mui/material";

interface IPageProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	sx?: SxProps;
}

export default function Page({ children, sx, ...rest }: IPageProps) {
	return (
		<Box {...rest} sx={sx}>
			<Box component="main">{children}</Box>
		</Box>
	);
}
