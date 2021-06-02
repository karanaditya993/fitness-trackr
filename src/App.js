import "./App.css";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";

function App() {
	return (
		<div className="App">
			<header>
				<Navigation />
			</header>
			<main style={{ marginTop: "100px" }}>
				<Pages />
			</main>
		</div>
	);
}

export default App;
