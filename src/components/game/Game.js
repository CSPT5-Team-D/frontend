import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import World from "./World";

function Game() {
	const [currentRoom, setCurrentRoom] = useState({});
	const [moveErrMsg, setMoveErrMsg] = useState("");
	useEffect(() => {
		// set the player in the initial room
		axiosWithAuth()
			.get("https://lambda-mud-test.herokuapp.com/api/adv/init")
			.then(res => {
				console.log(res);
				setCurrentRoom(res.data);
			})
			.catch(err => {
				console.log(err.response);
			});
	}, []);

	const moveRooms = (e, direction) => {
		e.preventDefault();
		axiosWithAuth()
			.post("https://lambda-mud-test.herokuapp.com/api/adv/move", {
				direction,
			})
			.then(res => {
				console.log(res);
				setCurrentRoom(res.data);
				setMoveErrMsg(res.data.error_msg);
			})
			.catch(err => {
				console.log(err.response);
			});
	};

	if (!currentRoom.players) return <h1>Loading...</h1>;
	return (
		<div>
			<h2>Welcome {currentRoom.name}.</h2>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				{/* ROOM DESCRIPTION */}
				<div style={{ margin: "10px" }}>
					<h3>You are currently at {currentRoom.title}.</h3>
					<h4>{currentRoom.description}.</h4>
				</div>

				<div className='controls'>
					<div
						className='buttons'
						style={{
							display: "flex",
							height: "60px",
						}}
					>
						<button
							className='btn north'
							onClick={e => moveRooms(e, "n")}
							style={{
								background: "darkGray",
								margin: "5px 25px",
								padding: "10px 15px",
							}}
						>
							N
						</button>
						<button
							className='btn west'
							onClick={e => moveRooms(e, "w")}
							style={{
								background: "darkGray",
								margin: "5px 25px",
								padding: "10px 15px",
							}}
						>
							W
						</button>
						<button
							className='btn east'
							onClick={e => moveRooms(e, "e")}
							style={{
								background: "darkGray",
								margin: "5px 25px",
								padding: "10px 15px",
							}}
						>
							E
						</button>
						<button
							className='btn south'
							onClick={e => moveRooms(e, "s")}
							style={{
								background: "darkGray",
								margin: "5px 25px",
								padding: "10px 15px",
							}}
						>
							S
						</button>
					</div>
					<p style={{ color: "red" }}>{moveErrMsg}</p>
				</div>
			</div>

			<div
				className='game-dashboard'
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				{/* OTHER PLAYERS LIST */}
				<div
					style={{
						border: "1px solid black",
						width: "250px",
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						paddingTop: "20px",
						margin: "10px",
					}}
				>
					<h4>Players in this room:</h4>
					<ul
						style={{
							listStyleType: "none",
							fontSize: "12px",
						}}
					>
						{currentRoom.players.map((player, index) => {
							return <li key={index}>{player}</li>;
						})}
					</ul>
				</div>
				<World />
			</div>
		</div>
	);
}

export default Game;
