import { NavLink as Link } from "react-router-dom";
import React from "react";

export default () => (
	<nav className="main-nav">
		<Link to="/" exact>Home</Link>{" | "}
		<Link to="/films" exact>Films</Link>{" | "}
		<Link to="/people">People</Link>
	</nav>
);