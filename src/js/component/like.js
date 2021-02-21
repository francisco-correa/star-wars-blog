import React, { useContext } from "react";
import { Context } from "../../js/store/appContext";

const Like = p => {
	const { store, actions } = useContext(Context);

	return (
		<a
			type="button"
			onClick={() => {
				actions.addFavorites(p.name);
			}}
			className="btn btn-danger"
			style={{ width: "50px", marginLeft: "40px" }}>
			<i className="fa fa-heart" />
		</a>
	);
};

export default Like;

// {isFavorites ? <i className="fas fa-heart" /> : <i className="far fa-heart" /> }
