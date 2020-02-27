import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<div>
			<h2>Home</h2>
			<NavLink to='/signin'>Log In</NavLink>
		</div>
	);
}

export default Home;
