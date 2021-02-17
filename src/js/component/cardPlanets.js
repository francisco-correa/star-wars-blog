import React from "react";
import Like from "./like";
import { Link } from "react-router-dom";

const CardPlanets = () => {
	let p = {
		name: "Tattooine",
		description: "A planet.",
		diameter: "diameter: 10465",
		climate: "climate: arid",
		terrain: "terrain: dessert"
	};

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://static.wikia.nocookie.net/esstarwars/images/e/e6/MosEisley-celebration.png/revision/latest?cb=20140805192904"
				className="card-img-top"
				alt="Tattoine"
			/>
			<div className="card-body">
				<h5 className="card-title" style={{ color: "black" }}>
					{p.name}
				</h5>
				<p className="card-text" style={{ color: "black" }}>
					{p.description}
				</p>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{p.diameter}</li>
					<li className="list-group-item">{p.climate}</li>
					<li className="list-group-item">{p.terrain}</li>
				</ul>
				<Link to="/demo">
					<button className="btn btn-primary">Learn More !!!</button>
				</Link>
				<Like />
			</div>
		</div>
	);
};

export default CardPlanets;
