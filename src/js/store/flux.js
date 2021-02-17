const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			persons: [{}],
			planets: [{}],
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
				const response = await fetch("https://www.swapi.tech/api/people", settings);
				const json = await response.json();
				console.log(json, "<--JSON Characters");

				setStore({ persons: json.results });
			},
			getPlanetsApi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/planets/", settings);
				const json = await response.json();
				console.log(json, "<--JSON Planets");

				setStore({ planets: json.results });
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
