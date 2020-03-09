import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import axios from "axios";
import Loader from "react-loader-spinner";

function SignIn(props) {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const [mainErrorMsg, setMainErrorMsg] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [show, setShow] = useState(true);

	const handleClose = () => {
		setShow(false);
		props.history.push("/");
	};

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		setMainErrorMsg("");
		setIsLoading(true);
		e.preventDefault();
		if (user.username === "" || user.password === "") {
			setMainErrorMsg("Username/Password required");
			return;
		}
		axios
			// .post('http://localhost:8000/api/login/', user)
			.post("https://lambda-mud-test.herokuapp.com/api/login/", user)
			.then(res => {
				console.log(res);
				setIsLoading(false);
				localStorage.setItem("key", res.data.key);
				//TO DO - game component
				props.history.push("/game");
			})
			.catch(err => {
				console.log(err.response);
				setIsLoading(false);
				setMainErrorMsg(err.response.data.non_field_errors);
			});
	};

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				centered
				style={{ color: "#000" }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Please Sign In</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Label>username</Form.Label>
						<Form.Control
							type='text'
							onChange={handleChange}
							value={user.username}
							name='username'
						/>
						<Form.Label>password</Form.Label>
						<Form.Control
							type='password'
							onChange={handleChange}
							value={user.password}
							name='password'
						/>
						{mainErrorMsg ? (
							<Form.Text className='text-muted'>
								{mainErrorMsg}
							</Form.Text>
						) : null}
						<Button
							block
							size='lg'
							style={{
								marginTop: "20px",
								backgroundColor: "#000",
								color: "#fff",
							}}
							variant='none'
							type='submit'
							onClick={e => handleSubmit(e)}
						>
							{isLoading ? (
								<Loader
									type='ThreeDots'
									color='#fff'
									height={30}
									width={30}
								/>
							) : (
								"Login"
							)}
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<p>
						New to the game? Sign up{" "}
						<Nav.Link
							style={{ display: "inline", padding: "0" }}
							href='/signup'
						>
							here
						</Nav.Link>
						.
					</p>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default SignIn;
