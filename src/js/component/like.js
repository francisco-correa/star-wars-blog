import React, { useContext, useState } from "react";
import { Context } from "../../js/store/appContext";

const Like = p => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState({
		heart: "far fa-heart"
	});

	return (
		<button
			type="button"
			className="btn btn-danger"
			onClick={() => {
				actions.addFavorites(p.name);
			}}>
			{store.favorites.includes(p.name) ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
		</button>
	);
};

export default Like;
