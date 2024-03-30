
import React, { useEffect, useState} from "react";
import '../styles/singlepokemon.css'
import pokeball from "../assets/pokeball.png";
import BackButton from '../components/BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOnePokemon, removePokemon } from "../features/pokemon/pokemonSlice";
import EditPokemonModal from "../components/EditPokemonModal";



const SinglePokemon = ({location}) => {
  const { pokemons, onePokemon, isLoading, isSuccess, isError} = useSelector(
    (state) => state.pokemon
  );
 

  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  const handleDelete = async(id) => {
    dispatch(removePokemon(id))
    navigate('/allPokemons')
  }


  useEffect(() => {
    dispatch(getOnePokemon(params.id));
   }, []);

     

   if (isLoading) {
    return (
      <h2 className="text-center display-1 text-secondary p-5">Loading....</h2>
    );
  }

  return (
    <>
     <div id="back-btn">
    <BackButton location={"/allpokemons"} />
    </div>
    <div className="card mb-3 my-5 mx-5 border-0 single-card">
    <div className="row g-0">
      <div className="col-md-4 ">
        <img src={pokeball} className="img-fluid rounded-start single-ballimg" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body card-content">
          <h3 className= "card-title">{onePokemon?.name}</h3>
          <h5 className="card-text">{onePokemon?.breed}</h5>
          <h5>
                      {onePokemon?.type === "Electric" ? (
                        <span className="badge text-bg-warning">
                          {onePokemon?.type}
                        </span>
                      ) : onePokemon?.type === "Grass" ? (
                        <span className="badge text-bg-success">
                          {onePokemon?.type}
                        </span>
                      ) : onePokemon?.type === "Water" ? (
                        <span className="badge text-bg-primary">
                          {onePokemon?.type}
                        </span>
                      ) : (
                        <span className="badge text-bg-danger">
                          {onePokemon?.type}
                        </span>
                      )}
                    </h5>
          <p className="card-text">{onePokemon?.description}</p>
       
         <EditPokemonModal/>
 
          <button className="btn btn-danger mt-3" onClick={() => handleDelete(onePokemon?._id)}>Delete</button>

          
        </div>
      </div>
    </div>
  </div>




  </>
  )
}

export default SinglePokemon
