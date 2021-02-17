import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<a className="navbar-brand" href="#">
					<img src="/starwarslogo.png" alt="Star Wars" style={{ width: "45px", height: "40px" }} />
				</a>
			</Link>
			{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
