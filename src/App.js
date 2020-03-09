import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import SignIn from "./components/authentication/Signin";
import SignUp from "./components/authentication/Signup";
import Home from "./components/Home";
import Game from "./components/game/Game";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div className='App' style={{ marginLeft: "15px" }}>
			<Navigation />
			<h1>Team D Mud</h1>
			<Route exact path='/' component={Home} />
			<Route path='/signup' component={SignUp} />
			<Route path='/signin' component={SignIn} />
			<PrivateRoute path='/game' component={Game} />
		</div>
	);
}

export default App;
