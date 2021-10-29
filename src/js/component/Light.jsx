import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap";

//create your first component
const Light = props => {
	const [toggle, setToggle] = useState("off");
	let off = "bg-secondary rounded-circle";

	function sa() {
		if (toggle === "red") {
			setToggle("yellow");
		} else if (toggle === "yellow") {
			setToggle("green");
		} else if (toggle === "green") {
			setToggle("red");
		} else {
			setToggle("red");
		}
	}
	setTimeout(sa, 2000);

	return (
		<div className="container">
			<div>
				<div onClick={() => setToggle("red")}>
					{toggle == "yellow" ||
					toggle == "green" ||
					toggle == "off" ? (
						<div className={off}></div>
					) : (
						<div
							className={`glow ${props.colorOne} ${props.shape}`}></div>
					)}
				</div>
			</div>
			<div>
				<div onClick={() => setToggle("yellow")}>
					{toggle == "red" || toggle == "green" || toggle == "off" ? (
						<div className={off}></div>
					) : (
						<div
							className={`glower ${props.colorTwo} ${props.shape}`}></div>
					)}
				</div>
			</div>
			<div>
				<div onClick={() => setToggle("green")}>
					{toggle == "yellow" ||
					toggle == "red" ||
					toggle == "off" ? (
						<div className={off}></div>
					) : (
						<div
							className={`glowerest ${props.colorThree} ${props.shape}`}></div>
					)}
				</div>
			</div>
		</div>
	);
};
export default Light;

Light.propTypes = {
	colorOne: PropTypes.string,
	colorTwo: PropTypes.string,
	colorThree: PropTypes.string,
	shape: PropTypes.string
};
