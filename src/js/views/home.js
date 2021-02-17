import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";
import { Context } from "../store/appContext";
//import "../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharactersApi();
		actions.getPlanetsApi();
	}, []);
	return (
		<div className="text-center mt-5">
			<h2 className="characters" style={{ color: "red" }}>
				Characters
			</h2>
			<CardCharacters />
			<p>{JSON.stringify(store.persons[0])}</p>
			<h2 className="planets" style={{ color: "red" }}>
				Planets
			</h2>
			<CardPlanets />
			<p>{JSON.stringify(store.planets[0])}</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
