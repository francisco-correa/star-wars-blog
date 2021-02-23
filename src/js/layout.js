import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import React, { useEffect, useContext } from "react";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getCharactersApi();
		actions.getPlanetsApi();
	}, []);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/characters/:id">
							<Characters data={store.characters} />
						</Route>
						<Route exact path="/planets/:id">
							<Planets data={store.planets} />
						</Route>
						<Route>
							<h1>Sorry we dont find your favorite characters or star wars planets</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
