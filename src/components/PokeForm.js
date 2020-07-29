import React from "react";
import "./styles/PokeForm.css";
import { Link } from "react-router-dom";
const PokeForm = (props) => {
  const { onHandleChange, onHandleSubmit } = props;

  return (
    <div className="mt-4">
      <form onSubmit={onHandleSubmit} className="Form">
        <div className="form-group col-12">
          <label>Name</label>
          <input
            id="Name"
            onChange={onHandleChange}
            className="form-control"
            type="text"
            name="name"
            placeholder="Pokemon Name"
            maxLength="10"
            autoFocus
          />
        </div>
        <div className="form-group col-12">
          <label>Type</label>
          <select
            id="Type"
            className="form-control"
            onChange={onHandleChange}
            name="type"
          >
            <option value="Fire">Fire</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Bug">Bug</option>
            <option value="Flying">Flying</option>
            <option value="Water">Water</option>
            <option value="Ground">Ground</option>
            <option value="Psychic">Psychic</option>
            <option value="Ice">Ice</option>
            <option value="Grass">Grass</option>
            <option value="Steel">Steel</option>
          </select>
        </div>
        <div className="form-group col-12">
          <label>Weight</label>
          <input
            id="Weight"
            onChange={onHandleChange}
            className="form-control"
            type="number"
            name="weight"
            placeholder="Introduce a weight (kg)"
          />
        </div>
        <div className="form-group col-12">
          <label>Id</label>
          <input
            id="Id"
            onChange={onHandleChange}
            className="form-control"
            type="number"
            name="id"
            placeholder="Introduce a number"
          />
        </div>
        <div className="row">
          <Link to="/badges">
            <button className="ml-2 ml-sm-0 mt-4 btn btn-success col-12 col-sm">
              ¡Check your pokemon list!
            </button>
          </Link>
          <button className="ml-2 mt-4 btn btn-primary col-12 col-sm">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PokeForm;
