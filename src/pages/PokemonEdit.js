import React, { useState } from "react";
import { Link } from "react-router-dom";
import pokemonLogo from "../images/pokemonLogo.png";
import PokeBadge from "../components/PokeBadge";
import PokeFormEdit from "../components/PokeFormEdit";
import onHandleSubmitEdit from "./helpers/onHandleSubmitEdit";
import onHandleDelete from "./helpers/onHandleDelete";
import useOnHandleChange from "./helpers/hooks/useOnHandleChange";
import currentData from "./helpers/currentData";
import { connect } from "react-redux";
import "../pages/styles/Badges.css";

const BadgeEdit = (props) => {
  const pokeData = currentData(props);
  const [state, onHandleChange] = useOnHandleChange(pokeData);

  if (props.data.length === 0) {
    return (
      <div>
        <p>No pokemons yet, go and create yours</p>
        <Link to="/pokemon">
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
            <img className="Badges_logo" src={pokemonLogo} alt="Pokemon logo" />
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
                onHandleSubmit={(e) => onHandleSubmitEdit(e, props, state)}
                onHandleChange={(e) => onHandleChange(e)}
                data={state}
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
