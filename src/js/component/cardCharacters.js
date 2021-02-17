import React from "react";
import Like from "./like";
import { Link } from "react-router-dom";

const CardCharacters = () => {
	let p = {
		name: "Luke Skywalker",
		description: "A person within the Star Wars universe",
		gender: "gender: male",
		skyn_color: "skin_color: fair",
		hair_color: "hair_color: blond"
	};

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg"
				className="card-img-top"
				alt="Luke Skywalker"
			/>
			<div className="card-body">
				<h5 className="card-title" style={{ color: "black" }}>
					{p.name}
				</h5>
				<p className="card-text" style={{ color: "black" }}>
					{p.description}
				</p>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{p.gender}</li>
					<li className="list-group-item">{p.hair_color}</li>
					<li className="list-group-item">{p.skyn_color}</li>
				</ul>
				<Link to="/demo">
					<button className="btn btn-primary">Learn More !!!</button>
				</Link>
				{/* <a href="#" className="btn btn-outline-primary">
					Learn More!!
				</a> */}
				<Like />
			</div>
		</div>
	);
};

export default CardCharacters;
