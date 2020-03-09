import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<div>
			<h2>Welcome!</h2>
			<NavLink to='/signin'>Start Playing</NavLink>
		</div>
	);
}

export default Home;
