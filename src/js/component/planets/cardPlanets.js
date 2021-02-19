import React, { useContext, useEffect } from "react";
import Like from "../like";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const CardPlanets = p => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanetsApi_id(store.planets_id);
	}, []);

	return (
		<div className="card" style={{ width: "18rem" }}>
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
						<strong>Diameter: </strong> {store.planets_id.diameter}
					</li>
					<li className="list-group-item">
						<strong>Climate: </strong> {store.planets_id.climate}
					</li>
					<li className="list-group-item">
						<strong>Terrain</strong>
						{store.planets_id.terrain}
					</li>
				</ul>
				<br />
				<Link to="/planets/:id">
					<button className="btn btn-primary">Learn More !!!</button>
				</Link>
				<Like />
			</div>
		</div>
	);
};

export default CardPlanets;
