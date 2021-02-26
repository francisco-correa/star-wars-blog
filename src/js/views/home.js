import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ListCharacters from "../component/characters/listCharacters";
import ListPlanets from "../component/planets/listPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharactersApi();
		actions.getPlanetsApi();
	}, []);
	return (
		<div className="container">
			<h2 className="characters" style={{ color: "red" }}>
				Characters
			</h2>
			<ListCharacters />
			<br />
			<h2 className="planets" style={{ color: "red" }}>
				Planets
			</h2>
			<ListPlanets />
			<div />
		</div>
	);
};
