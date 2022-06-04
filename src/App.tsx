import "./App.css";
import { Routes, useNavigate, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

function App() {
	console.log(process.env.REACT_APP_API);
	
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
			</Route>
		</Routes>
	);
}

export default App;
