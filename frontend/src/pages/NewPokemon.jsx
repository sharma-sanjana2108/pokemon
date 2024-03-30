import React, { useEffect, useState } from "react";
import "../styles/newPokemon.css";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon } from "../features/pokemon/pokemonSlice";
import { useNavigate } from "react-router-dom";

const NewPokemon = () => {
  const { onePokemon, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.pokemon
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    type: "",
    description: "",
  });

  const { name, breed, type, description } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPokemon(formData));
    navigate("/allpokemons");
  };

  return (
    <>
      <div id="back-btn">
        <BackButton location={"/allpokemons"} />
      </div>
      <div className="new-container">
        <h2 className="text-center mb-4 text-secondary">Add New Pokemon</h2>
        <div className="card p-3 new-pokemon">
          <h3 className="text-center">Please fill all details!!</h3>
          <form className="my-3 mx-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-control my-3"
              placeholder="Enter Breed"
              name="breed"
              value={breed}
              onChange={handleChange}
            />

            <select
              className="form-select my-3 required"
              name="type"
              value={type}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select type...
              </option>
              <option>Electric</option>
              <option>Grass</option>
              <option>Water</option>
              <option>Fire</option>
            </select>

            <textarea
              placeholder="Enter Description"
              className="form-control my-3"
              required
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>

            <button className="btn btn-primary w-100">Add Pokemon</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPokemon;
