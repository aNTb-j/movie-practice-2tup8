import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Login from "./components/login/Login.jsx"
import NotFound from "./components/login/NotFound.jsx";
import Protected from "./components/login/Protected.jsx";

import Movie from "./components/movies/Movie.jsx"

function App() {

	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		setLoggedIn(true);
	}

	console.log(loggedIn)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Navigate to={"login"} />} />
				<Route path="/login" element={<Login loggedInFlag={handleLogin}/>}/> 
				<Route path="/movies" element={
					<Protected isLoggedIn={loggedIn}>
						<Movie />
					</Protected>
				} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;