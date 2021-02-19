import React, { useContext, useEffect } from "react";
import Like from "../like";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropType from "prop-types";

const CardCharacters = p => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharactersApi_id(store.characters_id);
	}, []);

	// {"height":"182","mass":"77","hair_color":"auburn, white","skin_color":"fair","eye_color":"blue-gray","birth_year":"57BBY","gender":"male","created":"2021-02-18T21:24:17.263Z","edited":"2021-02-18T21:24:17.263Z","name":"Obi-Wan Kenobi","homeworld":"https://www.swapi.tech/api/planets/20","url":"https://www.swapi.tech/api/people/10"}

	console.log(store.characters, "<-- characters properties");
	return (
		<div className="card" style={{ width: "18rem" }}>
			<p>{JSON.stringify(store.characters_id)}</p>
			<img
				src="https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg"
				className="card-img-top"
				alt="Luke Skywalker"
			/>
			<div className="card-body">
				<h4 className="card-title" style={{ color: "black" }}>
					{p.name}
				</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<strong>Gender: </strong>
						{store.characters_id.gender}
					</li>
					<li className="list-group-item">
						<strong>Hair Color: </strong>
						{store.characters_id.hair_color}
					</li>
					<li className="list-group-item">
						<strong>Skin Color: </strong>
						{store.characters_id.skin_color}
					</li>
				</ul>
				<br />
				<Link to="/characters/:id">
					<button className="btn btn-primary">Learn More !!!</button>
				</Link>
				<Like />
			</div>
		</div>
	);
};

CardCharacters.propType = {
	name: PropType.string,
	gender: PropType.string,
	hair_color: PropType.string,
	skin_color: PropType.string
};

export default CardCharacters;
