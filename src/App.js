import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import NewPokemon from "./pages/NewPokemon";
import PokemonEdit from "./pages/PokemonEdit";

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon" component={Pokemon} />
          <Route exact path="/pokemon/new" component={NewPokemon} />
          <Route
            exact
            path="/pokemon/:pokemonName/edit"
            component={PokemonEdit}
          />
          <Route component={() => <h1>Error 404 Not Found :(</h1>} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
