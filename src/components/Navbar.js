import React from "react";
import pokemonLogo from "../images/pokemonLogo.png";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img
            className="Navbar__brand-logo"
            src={pokemonLogo}
            alt="Pokemon logo"
          ></img>
          <span className="font-weight-light">poke</span>
          <span className="font-weight-bold">Ball</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
