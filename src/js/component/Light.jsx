import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap";

//create your first component
const Light = props => {
	const [toggle, setToggle] = useState("off");
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
						<div
							className={`glow ${props.colorOne} ${props.shape}`}>
							on
						</div>
					)}
				</div>
			</div>
			<div>
				<div onClick={() => setToggle("yellow")}>
					{toggle == "red" || toggle == "green" || toggle == "off" ? (
						<div className={off}>off</div>
					) : (
						<div
							className={`glower ${props.colorTwo} ${props.shape}`}>
							on
						</div>
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
						<div
							className={`glowerest ${props.colorThree} ${props.shape}`}>
							on
						</div>
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
