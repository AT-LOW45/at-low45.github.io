import "./App.css";
import { Routes, useNavigate, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import News from "./pages/News";

function App() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='/gallery' element={<Gallery />}></Route>
				<Route path='/news' element={<News />} />
			</Route>
		</Routes>
	);
}

export default App;
