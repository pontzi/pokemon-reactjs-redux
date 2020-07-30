import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import pokemonLogo from "../images/pokemonLogo.png";
import PokeBadge from "../components/PokeBadge";
import PokeFormEdit from "../components/PokeFormEdit";
import PageError from "../components/PageError";
import onHandleSubmitEdit from "./functions/onHandleSubmitEdit";
import onHandleDelete from "./functions/onHandleDelete";
import { connect } from "react-redux";

import "../pages/styles/Badges.css";

const BadgeEdit = (props) => {
  const [state, setState] = useState({ Id: 1 });

  let pokemon = "";

  function putActualDataPokemon() {
    const name = props.match.params.pokemonName.toLowerCase();
    const pokemonArray = props.data.filter(
      (pokemon) => pokemon.name.toLowerCase() === name
    );
    pokemon = pokemonArray[0];
    setState({
      type: pokemon.types[0].type.name,
      id: pokemon.id,
      weight: pokemon.weight,
      name: pokemon.name,
    });
  }

  useEffect(() => {
    if (props.data.length > 0) {
      putActualDataPokemon();
    }
  }, []);

  useEffect(() => {
    if (state.id === "") {
      setState({
        ...state,
        id: 1,
      });
    }
  }, [state.id]);
  const onHandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  if (props.data.length === 0) {
    return (
      <div>
        <p>No pokemons yet, go and create yours</p>
        <Link to="/badges">
          <button className="btn btn-primary"> Let's go</button>
        </Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="Badges">
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
      <div className="container__pokeBadge">
        <div className="container">
          <div className="row row_container">
            <div className="col-12 col-md-6">
              <PokeBadge data={state} />
            </div>
            <div className="col-12 col-md-6">
              <PokeFormEdit
                onHandleDelete={(e) => onHandleDelete(e, props)}
                onHandleSubmit={(e) => onHandleSubmitEdit(e, props)}
                onHandleChange={onHandleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ data }) => ({ data });
export default connect(mapStateToProps)(BadgeEdit);
