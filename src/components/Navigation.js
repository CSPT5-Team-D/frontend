import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Navigation(props) {
	const handleLogOut = () => {
		localStorage.removeItem("key");
		props.history.push("/");
	};
	return (
		<nav style={{ display: "flex", justifyContent: "flex-end" }}>
			{localStorage.getItem("key") ? (
				<>
					<p
						onClick={handleLogOut}
						style={{
							margin: "20px",
							color: "#000",
							padding: "9px",
							border: "1px solid black",
							borderRadius: "10px",
							textDecoration: "none",
						}}
					>
						Sign Out
					</p>
				</>
			) : (
				<>
					<NavLink
						style={{
							margin: "20px",
							color: "#000",
							padding: "9px",
							border: "1px solid black",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						to='/signin'
					>
						Sign In
					</NavLink>{" "}
					<NavLink
						style={{
							margin: "20px",
							color: "#000",
							padding: "9px",
							border: "1px solid black",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						to='/signup'
					>
						Create Account
					</NavLink>
				</>
			)}
		</nav>
	);
}

export default withRouter(Navigation);
