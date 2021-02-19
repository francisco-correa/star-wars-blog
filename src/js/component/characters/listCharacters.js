import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import CardCharacters from "../characters/cardCharacters";

const ListCharacters = () => {
	const { store } = useContext(Context);
	return (
		<div>
			{store.characters.map((item, index) => {
				return <CardCharacters key={index} {...item} />;
			})}
		</div>
	);
};

export default ListCharacters;
