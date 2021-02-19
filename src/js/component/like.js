import React from "react";

const Like = () => {
	// const isFavorites = store.favorites.find(props.name)
	return (
		<a type="button" className="card-link">
			{/* onClick={() => actions.Favorites(props.name)} */}
			<i className="fa fa-heart" />
		</a>
	);
};

export default Like;

// {isFavorites ? <i className="fas fa-heart" /> : <i className="far fa-heart" /> }
