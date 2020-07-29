import "./styles/PokemonList.css";
import React from "react";
import { Link } from "react-router-dom";

const PokemonList = (props) => {
  const { pokemonsData, query } = props;
  let newPokemonsData = undefined;

  if (query) {
    newPokemonsData = pokemonsData.filter((pokemon) => {
      return `${pokemon.name}`.toLowerCase().includes(query.toLowerCase());
    });
  } else {
    newPokemonsData = pokemonsData;
  }
  if (newPokemonsData.length === 0) {
    return (
      <div className="container text-center text-light">
        <h1>Pokemon not found :(</h1>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="pokemonsData">
          <ul className="ul list-unstyled">
            {newPokemonsData.map((pokemon) => {
              return (
                <Link
                  to={{
                    pathname: `/badges/${pokemon.name}/edit`,
                    search: `?id=${pokemon.id}`,
                  }}
                  className="link text-reset text-decoration-none"
                  key={pokemon.id}
                >
                  <div className="row item">
                    <div className="mb-2 col-12 col-md-6 d-md-flex">
                      <div className="imgPokemon">
                        <img
                          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                          alt="Pokemon Img"
                        />
                      </div>
                      <div className="item_info">
                        <p className="item_info-name">
                          {pokemon.name.toUpperCase()}
                        </p>
                        <p>Weight {pokemon.weight} kg</p>
                        <p>Type: {pokemon.types[0].type.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
