import React from "react";

// const Favorites = () => {
//     (characters.map((item, index) => {
//           return (
//             <li key={index} className="list-group-item">
//               {item.like}
//             </li>
//     )
// }

const Like = () => {
	return (
		<a type="button" className="card-link">
			{/* onClick={() => {Like(item.like)}} */}
			<i className="fa fa-heart" />
		</a>
	);
};

export default Like;
