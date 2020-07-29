import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import pokemonLogo from "../images/pokemonLogo.png";
import PokeBadge from "../components/PokeBadge";
import PokeFormEdit from "../components/PokeFormEdit";
import PageError from "../components/PageError";
import { connect } from "react-redux";
import swal from "sweetalert";

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
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("Name").value;
    const type = document.getElementById("Type").value;
    const weight = document.getElementById("Weight").value;
    const weightInt = parseInt(weight);
    const id = document.getElementById("Id").value;
    const idInt = parseInt(id);
    const arrayValidationNameAndType = [name, type];
    const arrayValidationWeightAndId = [weightInt, idInt];
    const validationNameAndType = arrayValidationNameAndType.filter((item) => {
      return item === "";
    });
    if (validationNameAndType.length > 0) {
      swal("Oops", "You must complete the forms", "error");
      return;
    }
    const validationWeightAndId = arrayValidationWeightAndId.filter((item) => {
      return isNaN(item);
    });
    if (validationWeightAndId.length > 0) {
      swal("Oops", "You must complete the forms", "error");
      return;
    }
    const { data } = props;
    const actualName = props.match.params.pokemonName.toLowerCase();
    const removeActualPokemon = data.filter((pokemon) => {
      return pokemon.name.toLowerCase() !== actualName;
    });

    const validationExistingPokemon = removeActualPokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase() === name.toLowerCase();
    });
    if (validationExistingPokemon.length > 0) {
      swal("Oops", "¡The name of this pokemon already exists!", "error");
      return;
    } else {
      const { data } = props;

      const newDataArray = data.filter((poke) => {
        return (
          poke.name.toLowerCase() !==
          props.match.params.pokemonName.toLowerCase()
        ); /////////////////duda
      });
      const editedPokemon = {
        name,
        types: [
          {
            type: {
              name: type,
            },
          },
        ],
        weight: weightInt,
        id: idInt,
      };
      newDataArray.push(editedPokemon);
      props.dispatch({
        type: "EDIT_POKEMON",
        payload: newDataArray,
      });
      swal("Congrats", "¡Your pokemon was edited!", "success");
      setTimeout(() => {
        props.history.push("/badges");
      }, 2000);
    }
  };
  const onHandleDelete = (e) => {
    e.preventDefault();

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this pokemon!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const { data } = props;
        const newDataArray = data.filter((poke) => {
          return (
            poke.name.toLowerCase() !==
            props.match.params.pokemonName.toLowerCase()
          );
        });
        props.dispatch({
          type: "DELETE_POKEMON",
          payload: newDataArray,
        });
        swal("Poof! Your pokemon has been deleted!", {
          icon: "success",
        });
        setTimeout(() => {
          props.history.push("/badges");
        }, 2000);
      } else {
        swal("Your pokemon is safe!");
      }
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
                onHandleDelete={onHandleDelete}
                onHandleSubmit={onHandleSubmit}
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
