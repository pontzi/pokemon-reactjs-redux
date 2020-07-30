import React, { Component } from "react";
import pokeBall from "../images/pokeball.png";
import pokemonLogo from "../images/pokemonLogo.png";
import "./styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <React.Fragment>
      <div className="parentContainer">
        <div className="container d-flex flex-wrap">
          <div className="container__info mr-4">
            <img className="pokeBall" src={pokeBall} alt="Pokeball logo" />
            <p className="container__info-p1">CREATE YOUR OWN POKEMON</p>
            <p className="container__info-p2">
              The easiest way to manage <br /> your POKEMONS!
            </p>
            <Link to="/pokemon" className="btn btn-primary">
              Start Now!
            </Link>
          </div>

          <div>
            <img
              className="pokemonLogo d-none d-md-block"
              src={pokemonLogo}
              alt="Pokemon Logo"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
