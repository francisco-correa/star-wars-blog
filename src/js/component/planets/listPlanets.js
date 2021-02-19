import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import CardPlanets from "../planets/cardPlanets";

const ListPlanets = () => {
	const { store } = useContext(Context);
	return (
		<div>
			{store.planets.map((item, index) => {
				return <CardPlanets key={index} {...item} />;
			})}
		</div>
	);
};

export default ListPlanets;
