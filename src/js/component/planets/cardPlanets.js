import React from "react";
import Like from "../like";
import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardPlanets = ({ url, name, diameter, climate, terrain }) => {
	// const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.getPlanetsApi(store.planets);
	// }, []);
	if (!url) return null;
	let id = url
		.split("/")
		.filter(i => i)
		.pop();

	return (
		<div className="col-3">
			<div className="card-group">
				<div className="card bg-light border-light mb-3">
					<img
						src="https://static.wikia.nocookie.net/esstarwars/images/f/fd/Mos_Eisley.png/revision/latest?cb=20180317225921"
						className="card-img-top"
						style={{ height: "130px" }}
						alt="Tattoine"
					/>
					<div className="card-body">
						<h4 className="card-title" style={{ color: "red" }}>
							{name}
						</h4>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<strong>Diameter: </strong> {diameter}
							</li>
							<li className="list-group-item">
								<strong>Climate: </strong> {climate}
							</li>
							<li className="list-group-item">
								<strong>Terrain: </strong>
								{terrain}
							</li>
						</ul>
						<br />
						<Link to={`/planets/${id}`}>
							<button className="btn btn-primary">Learn More !</button>
						</Link>
						<Like name={name} />
					</div>
				</div>
			</div>
		</div>
	);
};

CardPlanets.propTypes = {
	name: PropType.string,
	diameter: PropType.string,
	climate: PropType.string,
	terrain: PropType.string,
	url: PropType.string
};

export default CardPlanets;
