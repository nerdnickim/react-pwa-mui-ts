import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Detail from "./components/pages/Detail";
import Main from "./components/pages/Main";
import Sample from "./components/pages/Sample";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Main />,
		},
		{
			path: "sample",
			element: <Sample />,
		},
		{
			path: "detail/:id",
			element: <Detail />,
		},
	],
	{
		basename: "/",
	}
);

function App() {
	return (
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	);
}

export default App;
