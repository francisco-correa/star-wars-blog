import React from "react";

const Favorites = () => {
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
					Favorites
					{/* {store.favorites.length} + `Favorites`} */}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" />
			</div>
		</div>
	);
};

export default Favorites;
