import React, { useState } from "react";
import "bootstrap";

//create your first component
const Light = () => {
	const [toggle, setToggle] = useState("off");
	let red = "bg-danger rounded-circle";
	let green = "bg-success rounded-circle";
	let yellow = "bg-warning rounded-circle";
	let off = "bg-secondary rounded-circle";

	return (
		<div className="container text-center mt-5">
			<div>
				<div onClick={() => setToggle("red")}>
					{toggle == "yellow" ||
					toggle == "green" ||
					toggle == "off" ? (
						<div className={off}>off</div>
					) : (
						<div className={red}>on</div>
					)}
				</div>
			</div>
			<div>
				<div onClick={() => setToggle("yellow")}>
					{toggle == "red" || toggle == "green" || toggle == "off" ? (
						<div className={off}>off</div>
					) : (
						<div className={yellow}>on</div>
					)}
				</div>
			</div>
			<div>
				<div onClick={() => setToggle("green")}>
					{toggle == "yellow" ||
					toggle == "red" ||
					toggle == "off" ? (
						<div className={off}>off</div>
					) : (
						<div className={green}>on</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default Light;
