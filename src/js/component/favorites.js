import React, { useContext } from "react";
import { Context } from "../../js/store/appContext";

const Favorites = p => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="dropdown dropleft">
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

				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<ul>
						{store.favorites.length > 0 ? (
							store.favorites.map((item, index) => {
								return (
									<li key={index} className="dropdown-item" style={{ backgroundColor: "white" }}>
										{p.name}
										<h6 className="nameCharacters" style={{ color: "red" }}>
											{item}
											<button
												className="btn"
												onClick={() => {
													actions.removeFavorites(item);
												}}>
												<i
													className="far fa-trash-alt pointer trash"
													style={{ color: "black" }}
												/>
											</button>
										</h6>
									</li>
								);
							})
						) : (
							<div className="dropdown-item">
								<p>(Empty)</p>
							</div>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Favorites;
