import React, { useState, useEffect } from "react";
import pokemonLogo from "../images/pokemonLogo.png";
import PokeBadge from "../components/PokeBadge";
import PokeForm from "../components/PokeForm";
import "../pages/styles/Badges.css";
import { connect } from "react-redux";
import swal from "sweetalert";
import onHandleSubmit from "./onHandleSubmit";

const BadgesNew = (props) => {
  const [state, setState] = useState({ id: 1 });

  useEffect(() => {
    if (state.id === "") {
      setState({ id: 1 });
    }
  }, [state.id]);

  const onHandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

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
              <PokeForm
                onHandleSubmit={(e) => onHandleSubmit(e, props)}
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
export default connect(mapStateToProps)(BadgesNew);
