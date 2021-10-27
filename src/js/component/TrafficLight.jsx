import React, { useState } from "react";
import Light from "./Light.jsx";
import "bootstrap";

let red = "bg-danger";
let yellow = "bg-warning";
let green = "bg-success";
let all = "bg-secondary rounded-circle";

//create your first component
const Traffic = () => {
	return (
		<Light
			colorOne={red}
			colorTwo={yellow}
			colorThree={green}
			shape={all}
		/>
	);
};
export default Traffic;
