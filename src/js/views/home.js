import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import CardPlanets from "../component/planets/cardPlanets";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ListCharacters from "../component/characters/listCharacters";
import ListPlanets from "../component/planets/listPlanets";
//import "../styles/home.scss";|

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharactersApi();
		actions.getCharactersApi_id();
		actions.getPlanetsApi();
	}, []);
	return (
		<div className="text-center mt-2">
			<h2 className="characters" style={{ color: "red" }}>
				Characters
			</h2>
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-2 ml-2 mr-2">
						<ListCharacters />
					</div>
				</div>
			</div>

			<h2 className="planets" style={{ color: "red" }}>
				Planets
			</h2>
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="ml-2 mr-2">
						<ListPlanets />
					</div>
				</div>
			</div>
			<p>{JSON.stringify(store.planets[0])}</p>
		</div>
	);
};
