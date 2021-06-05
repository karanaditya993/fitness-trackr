import { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
	ACTIVITIES_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	MY_ROUTINES_ROUTE,
	REGISTER_ROUTE,
	ROUTINES_ROUTE,
} from "../constants";

const Navigation = () => {
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("token"))) {
			setAuthenticated(true);
		} else {
			setAuthenticated(false);
		}
	});

	return (
		<AppBar>
			<Toolbar>
				{authenticated && (
					<>
						<Link to={HOME_ROUTE}>Home</Link>
						<Link to={ROUTINES_ROUTE}>Routines</Link>
						<Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
						<Link to={ACTIVITIES_ROUTE}>Activities</Link>
					</>
				)}
				<Link to={LOGIN_ROUTE}>Login</Link>
				<Link to={REGISTER_ROUTE}>Register</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
