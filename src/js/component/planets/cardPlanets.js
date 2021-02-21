import React, { useContext, useEffect } from "react";
import Like from "../like";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropType from "prop-types";

const CardPlanets = p => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanetsApi(store.planets);
	}, []);

	return (
		<div className="card" style={{ width: "18rem" }}>
			{/* <p>{JSON.stringify(store.planets)}</p> */}
			<img
				src="https://static.wikia.nocookie.net/esstarwars/images/e/e6/MosEisley-celebration.png/revision/latest?cb=20140805192904"
				className="card-img-top"
				alt="Tattoine"
			/>
			<div className="card-body">
				<h4 className="card-title" style={{ color: "black" }}>
					{p.name}
				</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<strong>Diameter: </strong> {p.diameter}
					</li>
					<li className="list-group-item">
						<strong>Climate: </strong> {p.climate}
					</li>
					<li className="list-group-item">
						<strong>Terrain: </strong>
						{p.terrain}
					</li>
				</ul>
				<br />
				<Link to="/planets/:name">
					<button className="btn btn-primary">Learn More !!!</button>
				</Link>
				<Like name={p.name} />
			</div>
		</div>
	);
};

CardPlanets.propType = {
	name: PropType.string,
	diameter: PropType.string,
	climate: PropType.string,
	terrain: PropType.string
};

export default CardPlanets;
