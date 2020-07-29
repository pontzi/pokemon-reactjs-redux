import React, { useState, useEffect } from "react";
import pokemonLogo from "../images/pokemonLogo.png";
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading.js";
import PokemonList from "../components/PokemonList";
import PageError from "../components/PageError";
import "./styles/Badges.css";
import { connect } from "react-redux";

const Badges = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    query: "",
  });

  let apiPoke = "https://pokeapi.co/api/v2/pokemon/id/";

  useEffect(() => {
    if (props.data.length === 0) {
      const array = [25, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      obtainPokemon(array);
    } else {
      setState({
        ...state,
        loading: false,
      });
    }
  }, []);

  const obtainID = async (id) => {
    const url = `${apiPoke.replace("id", id)}`;
    try {
      setState({
        ...state,
        loading: true,
        error: null,
      });
      const response = await fetch(url);
      const onResponse = await response.json();
      setState({
        ...state,
        loading: false,
      });
      return onResponse;
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error,
      });
      console.log(error.message);
    }
  };
  const obtainPokemon = async (IdsArray) => {
    try {
      setState({
        ...state,
        loading: true,
        error: null,
      });
      const promiseArray = IdsArray.map((id) => obtainID(id));
      const arrayPokemonNames = await Promise.all(promiseArray);
      props.dispatch({
        type: "SEND_DATA",
        payload: arrayPokemonNames,
      });

      setState({
        ...state,
        loading: false,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error,
      });
    }
  };

  const onChangeQuery = (e) => {
    setState({
      ...state,
      query: e.target.value,
    });
  };
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
            <img
              className="Badges_conf-logo"
              src={pokemonLogo}
              alt="Conf Logo"
            />
          </div>
        </div>
      </div>
      <div className="pokemonList pt-2">
        <div className="container">
          <div className="newPokemon">
            <Link to="/badges/new" className="new_pokemon btn btn-primary">
              New Pokemon
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="form-group pb-4">
            <label>Filter Pokemon</label>
            <input
              onChange={onChangeQuery}
              type="text"
              className="input form-control"
              autoFocus
            />
          </div>
        </div>
        <div>
          <PokemonList query={state.query} pokemonsData={props.data} />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps)(Badges);
