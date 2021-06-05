import { Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Activites from "./Activities";
import MyRoutines from "./MyRoutines";
import {
	ACTIVITIES_ROUTE,
	HOME_ROUTE,
	ROUTINES_ROUTE,
	MY_ROUTINES_ROUTE,
} from "../constants";

const Pages = () => {
	return (
		<>
			<Route path={HOME_ROUTE}>
				<h1>Home Page</h1>
			</Route>
			<Route path={ROUTINES_ROUTE}>
				<h1>Routines Page</h1>
			</Route>
			<Route path={MY_ROUTINES_ROUTE}>
				<MyRoutines />
			</Route>
			<Route path={ACTIVITIES_ROUTE}>
				<Activites />
			</Route>
		</>
	);
};

export default Pages;
