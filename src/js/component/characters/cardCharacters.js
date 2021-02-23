import React from "react";
import Like from "../like";
import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardCharacters = ({ url, name, gender, hair_color, skin_color }) => {
	if (!url) return null;
	let id = url
		.split("/")
		.filter(i => i)
		.pop();

	// console.log(store.characters, "<-- characters properties");
	return (
		<div className="col-3">
			<div className="card">
				{/* <p>{JSON.stringify(store.characters)}</p> */}
				<img
					src="https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg"
					className="card-img-top"
					alt="Luke Skywalker"
				/>
				<div className="card-body">
					<h4 className="card-title" style={{ color: "red" }}>
						{name}
					</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<strong>Gender: </strong>
							{gender}
						</li>
						<li className="list-group-item">
							<strong>Hair Color: </strong>
							{hair_color}
						</li>
						<li className="list-group-item">
							<strong>Skin Color: </strong>
							{skin_color}
						</li>
					</ul>
					<br />
					<Link to={`/characters/${id}`}>
						<button className="btn btn-primary">Learn More !</button>
					</Link>
					<Like name={name} />
					{/* {console.log(name)} */}
				</div>
			</div>
		</div>
	);
};

CardCharacters.propTypes = {
	name: PropType.string,
	gender: PropType.string,
	hair_color: PropType.string,
	skin_color: PropType.string,
	url: PropType.string
};

export default CardCharacters;
