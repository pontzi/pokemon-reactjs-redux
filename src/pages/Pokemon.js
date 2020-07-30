import React from "react";
import pokemonLogo from "../images/pokemonLogo.png";
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading.js";
import PokemonList from "../components/PokemonList";
import useObtainPokemons from "./helpers/hooks/useObtainPokemons";
import useOnChangeQuery from "./helpers/hooks/useOnChangeQuery";
import PageError from "../components/PageError";
import "./styles/Badges.css";
import { connect } from "react-redux";

const Badges = (props) => {
  const state = useObtainPokemons(props);
  const [query, onChangeQuery] = useOnChangeQuery();

  if (state.loading === true) {
    return <PageLoading />;
  }
  if (state.error) {
    return <PageError error={state.error} />;
  }

  return (
    <React.Fragment>
      <div className="Badges ">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_logo" src={pokemonLogo} alt="Pokemon Logo" />
          </div>
        </div>
      </div>
      <div className="pokemonList pt-2">
        <div className="container">
          <div className="newPokemon">
            <Link to="/pokemon/new" className="new_pokemon btn btn-primary">
              New Pokemon
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="form-group pb-4">
            <label>Filter Pokemon</label>
            <input
              onChange={(e) => onChangeQuery(e)}
              type="text"
              className="input form-control"
              autoFocus
            />
          </div>
        </div>
        <div>
          <PokemonList query={query.value} pokemonsData={props.data} />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps)(Badges);
