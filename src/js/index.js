//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Traffic from "./component/TrafficLight.jsx";

//render your react application
ReactDOM.render(<Traffic />, document.querySelector("#app"));
