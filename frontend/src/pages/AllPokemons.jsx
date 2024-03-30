import React, { useEffect, useState } from "react";
import "../styles/allPokemons.css";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../features/pokemon/pokemonSlice";
import pokeball from "../assets/pokeball.png";
import { Link, useNavigate } from "react-router-dom";

const AllPokemons = () => {
  const { pokemons, isLoading, isSuccess, isError } = useSelector(
    (state) => state.pokemon
  );

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  const [expandedDescription, setExpandedDescription] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    // navigate('/singlepokemon')
  };

  if (isLoading) {
    return (
      <h2 className="text-center display-1 text-secondary p-5">Loading....</h2>
    );
  }

  return (
    <div className="all-pokemons">
      <div className="container-fluid p-5 pokemons-container">
        <BackButton location={"/"} />
        <h3 className="display-5 text-center mb-5">
          Discover Your Pokemon Here
        </h3>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
            {pokemons.map((pokemon, index) => (
              <div
                className="col"
                key={pokemon?._id}
                pokemon={pokemon}
                index={index}
              >
                <div className="card pokemon-card shadow-lg">
                  <img src={pokeball} className="ball-img" alt="..." />
                  <div className="card-body">
                    <h3 style={{ fontWeight: "600" }} className="card-title">
                      {pokemon?.name}
                    </h3>
                    <h5 className="card-text">{pokemon?.breed}</h5>
                    <h5>
                      {pokemon?.type === "Electric" ? (
                        <span className="badge text-bg-warning">
                          {pokemon?.type}
                        </span>
                      ) : pokemon?.type === "Grass" ? (
                        <span className="badge text-bg-success">
                          {pokemon?.type}
                        </span>
                      ) : pokemon?.type === "Water" ? (
                        <span className="badge text-bg-primary">
                          {pokemon?.type}
                        </span>
                      ) : (
                        <span className="badge text-bg-danger">
                          {pokemon?.type}
                        </span>
                      )}
                    </h5>
                    {expandedDescription[index] ? (
                      <p className="card-text">{pokemon?.description}</p>
                    ) : (
                      <p className="card-text description">
                        {pokemon.description.slice(0, 100)}...
                      </p>
                    )}

                    <Link to={`/pokemon/${pokemon?._id}`}><button
                      className="read-more"
                      onClick={() => toggleDescription(index)}
                    >
                      {expandedDescription[index] ? "Read less" : "Read more"}
                    </button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPokemons;
