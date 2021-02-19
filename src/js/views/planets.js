import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import CardPlanets from "../component/characters/cardCharacters";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanetsApi();
	}, []);
	return (
		<div>
			<h1 className="PlanetsView" style={{ color: "red" }}>
				We are the Planets
			</h1>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back to Star Wars Home
				</span>
			</Link>
		</div>
	);
};
