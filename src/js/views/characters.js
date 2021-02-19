import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharactersApi();
		actions.getCharactersApi_id();
	}, []);
	return (
		<div>
			<h1 className="CharactersView" style={{ color: "red" }}>
				We are the characters
			</h1>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back Star Wars Home
				</span>
			</Link>
		</div>
	);
};
