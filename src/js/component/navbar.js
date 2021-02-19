import React from "react";
import { Link } from "react-router-dom";
import Favorites from "../component/favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<a className="navbar-brand" href="#">
					<img src="/starwarslogo.png" alt="Star Wars" style={{ width: "45px", height: "40px" }} />
				</a>
			</Link>
			<Favorites />
		</nav>
	);
};
