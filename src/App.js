import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "./constants";

function App() {
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("token"))) {
			setAuthenticated(true);
		} else {
			setAuthenticated(false);
		}
	}, []);

	return (
		<div className="App">
			<header>
				<Navigation />
			</header>
			<main style={{ marginTop: "100px" }}>
				<Route path={REGISTER_ROUTE}>
					<Register />
				</Route>
				<Route path={LOGIN_ROUTE}>
					<Login />
				</Route>
				{authenticated && <Pages />}
				{/* {!authenticated && <Redirect to={LOGIN_ROUTE} />} */}
			</main>
		</div>
	);
}

export default App;
