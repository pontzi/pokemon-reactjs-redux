import React from "react";
import "./styles/PokeForm.css";
import { Link } from "react-router-dom";
const PokeForm = (props) => {
  const { onHandleChange, onHandleSubmit, onHandleDelete, data } = props;

  return (
    <div className="mt-4">
      <form onSubmit={onHandleSubmit} className="Form row">
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
            value={data.name}
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
            <option value="" selected disabled hidden>
              Choose here
            </option>
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
            value={data.weight}
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
            min="1"
            max="890"
            value={data.id}
          />
        </div>
        <div className="form-group col-12">
          <button className="btn btn-primary mr-2">Save</button>
          <button onClick={onHandleDelete} className="btn btn-danger  ">
            Delete
          </button>
          <br />
          <Link to="/pokemon">
            <button className="btn btn-success mt-2 ">
              ¡Check your pokemon list!
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PokeForm;
