import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={SignUp} />
		</div>
	);
}

export default App;
