import React from "react";
import pokemonLogo from "../images/pokemonLogo.png";
import PokeBadge from "../components/PokeBadge";
import PokeForm from "../components/PokeForm";
import onHandleSubmit from "./helpers/onHandleSubmit";
import useOnHandleChange from "./helpers/hooks/useOnHandleChange";
import { connect } from "react-redux";
import "../pages/styles/Badges.css";

const BadgesNew = (props) => {
  const [state, onHandleChange] = useOnHandleChange();

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
              <PokeForm
                onHandleSubmit={(e) => onHandleSubmit(e, props, state)}
                onHandleChange={(e) => onHandleChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ data }) => ({ data });
export default connect(mapStateToProps)(BadgesNew);
