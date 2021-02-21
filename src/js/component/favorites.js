import React, { useContext } from "react";
import { Context } from "../../js/store/appContext";

const Favorites = p => {
	const { store, actions } = useContext(Context);

	return (
		<div className="navbar mb-2">
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
				<li>
					<button
						type="button"
						onClick={() => {
							actions.removeFavorites(p.name);
						}}>
						<i className="fa fa-trash" style={{ color: "black" }} />
					</button>
				</li>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" />
			</div>
		</div>
	);
};

export default Favorites;
