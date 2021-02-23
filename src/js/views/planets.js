import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Planets = () => {
	const [data, setData] = useState(null);
	const { id } = useParams();

	useEffect(
		async () => {
			const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
			const json = await response.json();
			const data = json;
			console.log(data, "<--JSON Planets");

			setData(data);
		},
		[id]
	);
	// return <pre>{JSON.stringify(data)}</pre>;
	if (!data) return null;

	return (
		<div className="container">
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
							<th scope="row">{data.name}</th>
							<td>{data.climate}</td>
							<td>{data.population}</td>
							<td>{data.rotation_period}</td>
							<td>{data.diameter}</td>
							<td>{data.orbital_period}</td>
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
};
