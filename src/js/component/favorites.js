import React, { useContext } from "react";
import { Context } from "../../js/store/appContext";

const Favorites = p => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dropdown dropdown">
			<button
				className="btn dropdown-toggle text-white"
				type="button"
				style={{ color: "white" }}
				id="dropdownMenuButton"
				aria-haspopup="true"
				data-toggle="dropdown"
				aria-expanded="false">
				<span className="badge badge-primary">{`Favorites ${store.favorites.length}`}</span>
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" />
			{store.favorites.map((item, index) => {
				return (
					<li key={index} className="dropdown-item" style={{ backgroundColor: "black" }}>
						{p.name}
						<h5 className="nameCharacters" style={{ color: "red" }}>
							{item}
							<button
								className="btn"
								onClick={() => {
									actions.removeFavorites(item);
								}}>
								<i className="far fa-trash-alt pointer trash" style={{ color: "white" }} />
							</button>
						</h5>
					</li>
				);
			})}
		</div>
	);
};

export default Favorites;

{
	/* <li>
					<button
						type="button"
						onClick={() => {
							actions.removeFavorites(p.name);
						}}>
						<i className="fa fa-trash" style={{ color: "black" }} />
					</button>
				</li> */
}
