import React from "react";
import "./styles/PokeBadge.css";
import pokeBall from "../images/pokeball.png";
const PokeBadge = (props) => {
  const data = props.data;

  return (
    <div className="PokeBadge mt-4">
      <div className="PokeBadge__header">
        <img src={pokeBall} alt="PokeBall" />
      </div>
      <div className="PokeBadge__name d-flex flex-wrap">
        <img
          className="mr-4"
          src={`https://pokeres.bastionbot.org/images/pokemon/${
            data.id || 1
          }.png`}
          alt="Img Pokemon *ENTER A VALID ID*"
        />
        <h1>{data.name || "NAME"}</h1>
      </div>
      <div className="PokeBadge__type">{data.type || "TYPE"}</div>
      <div className="PokeBadge__weight">
        <p>{data.weight || "WEIGHT"} kg</p>
      </div>
    </div>
  );
};
export default PokeBadge;
