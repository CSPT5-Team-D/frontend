import React from "react";
import Player from "./Player";
import Map from "./Map";

function World({ currentRoom }) {
	return (
		<div
			style={{
				position: "relative",
				overflowX: "hidden",
				overflowY: "hidden",
			}}
		>
			{" "}
			<Player />
			<Map currentRoom={currentRoom} />
		</div>
	);
}

export default World;
