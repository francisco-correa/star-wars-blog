const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [{}],
			planets: [{}],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getCharactersApi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://swapi.dev/api/people/", settings);
				const json = await response.json();
				const data = json;
				console.log(data, "<--JSON Characters");

				setStore({ characters: data.results });
			},

			getPlanetsApi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://swapi.dev/api/planets/", settings);
				const json = await response.json();
				const d = json;
				console.log(json, "<--JSON Planets");

				setStore({ planets: d.results });
			},

			addFavorites: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
				console.log(store.favorites);
			},

			removeFavorites: item => {
				console.log(item);
				const store = getStore();
				const removeName = store.favorites.filter(name => name !== item);
				setStore({ favorites: removeName });
				console.log(store.favorites);
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
