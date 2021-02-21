import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();

	useEffect(() => {
		actions.getCharactersApi(store.characters);
	}, []);

	return (
		<>
			{store.characters.map((item, index) => {
				if (item.name === name) {
					return (
						<div key={index} className="container">
							<div className="row">
								<div className="col-6">
									<div>
										<img
											src="https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg"
											className="card-img-top"
											alt="Luke Skywalker"
										/>
									</div>
									<br />
								</div>
								<div className="col-6">
									<div>
										<h2 className="CharactersView" style={{ color: "red" }}>
											A long time ago in a galaxy far, far away....
										</h2>
									</div>
								</div>

								<table className="table table-dark">
									<thead className="thead-dark">
										<tr className="tr" style={{ textAlign: "center" }}>
											<th scope="col">Name</th>
											<th scope="col">Birth Year</th>
											<th scope="col">Gender</th>
											<th scope="col">Height</th>
											<th scope="col">Skin Color</th>
											<th scope="col">Eye Color</th>
										</tr>
									</thead>
									<tbody>
										<tr className="tr" style={{ textAlign: "center" }}>
											<th scope="row">{item.name}</th>
											<td>{item.birth_year}</td>
											<td>{item.gender}</td>
											<td>{item.height}</td>
											<td>{item.skin_color}</td>
											<td>{item.eye_color}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<Link to="/">
								<span className="btn btn-primary btn-lg" href="#" role="button">
									Back to Star Wars Home
								</span>
							</Link>
						</div>
					);
				}
			})}
		</>
	);
};
