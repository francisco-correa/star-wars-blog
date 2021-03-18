import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import CardCharacters from "../characters/cardCharacters";

const ListCharacters = () => {
	const { store } = useContext(Context);
	return (
		<div className="container">
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.characters.map((item, index) => {
					return <CardCharacters key={index} {...item} />;
				})}
			</div>
		</div>
	);
};

export default ListCharacters;
