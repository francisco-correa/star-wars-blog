import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();

	useEffect(() => {
		actions.getPlanetsApi(store.planets);
	}, []);

	return (
		<>
			{store.planets.map((item, index) => {
				if (item.name === name) {
					return (
						<div key={index} className="container">
							<div className="row">
								<div className="col-6">
									<div>
										<img
											src="https://static.wikia.nocookie.net/esstarwars/images/e/e6/MosEisley-celebration.png/revision/latest?cb=20140805192904"
											className="card-img-top"
											alt="Tattoine"
										/>
									</div>
									<br />
								</div>
								<div className="col-6">
									<div>
										<h2 className="PlanetsView" style={{ color: "red" }}>
											A long time ago in a galaxy far, far away....
										</h2>
									</div>
								</div>
								<table className="table table-dark">
									<thead className="thead-dark">
										<tr className="tr" style={{ textAlign: "center" }}>
											<th scope="col">Name</th>
											<th scope="col">Climate</th>
											<th scope="col">Population</th>
											<th scope="col">Rotation Period</th>
											<th scope="col">Diameter</th>
											<th scope="col">Orbital Period</th>
										</tr>
									</thead>
									<tbody>
										<tr className="tr" style={{ textAlign: "center" }}>
											<th scope="row">{item.name}</th>
											<td>{item.climate}</td>
											<td>{item.population}</td>
											<td>{item.rotation_period}</td>
											<td>{item.diameter}</td>
											<td>{item.orbital_period}</td>
										</tr>
									</tbody>
								</table>
								<Link to="/">
									<span className="btn btn-primary btn-lg" href="#" role="button">
										Back to Star Wars Home
									</span>
								</Link>
							</div>
						</div>
					);
				}
			})}
		</>
	);
};
