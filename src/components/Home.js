import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Login from "./Login";

function Home() {
	return (
		<>
			<h1>Welcome!</h1>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button color='danger' style={{ margin: "10px" }}>
					<NavLink
						to='/'
						style={{ color: "white", textDecoration: "none" }}
					>
						Home
					</NavLink>
				</Button>

				<Button color='danger' style={{ margin: "10px" }}>
					<NavLink
						to='/signup'
						style={{ color: "white", textDecoration: "none" }}
					>
						Sign Up
					</NavLink>
				</Button>

				<Login />
			</div>
		</>
	);
}

export default Home;
