import React, { useState } from "react";
import {
	Modal,
	Button,
	Form,
	FormGroup,
	NavLink,
	Label,
	Input,
	ModalHeader,
	ModalFooter,
} from "reactstrap";

function Login() {
	const [modal, setModal] = useState(false);

	const handleChange = () => {
		console.log("handle change");
	};

	const handleSubmit = () => {
		console.log("handle submit");
	};

	const toggle = () => {
		setModal(!modal);
	};

	return (
		<div>
			{/* <h2>Log In</h2> */}
			<Button color='danger' onClick={toggle} style={{ margin: "10px" }}>
				Log In
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Log In</ModalHeader>
				<Form style={{ margin: "15px" }} onSubmit={handleSubmit}>
					<FormGroup>
						<Label for='exampleEmail'>Email</Label>
						<Input
							type='email'
							name='email'
							onChange={handleChange}
							placeholder='bestplayer@mud.com'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='examplePassword'>Password</Label>
						<Input
							type='password'
							name='password'
							onChange={handleChange}
							placeholder='password'
						/>
					</FormGroup>
				</Form>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button
						style={{ margin: "10px", padding: "5px 30px" }}
						color='primary'
						onClick={e => handleSubmit(e)}
					>
						Log In
					</Button>{" "}
					<Button
						style={{ margin: "10px", padding: "5px 30px" }}
						color='secondary'
						onClick={toggle}
					>
						Cancel
					</Button>
				</div>
				<ModalFooter>
					<NavLink href='/signup'>Sign Up</NavLink>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default Login;
("Set up basic nav for login/signup, setting up login modal");
