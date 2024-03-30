import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { updateOnePokemon } from '../features/pokemon/pokemonSlice';
import { Link, useParams } from 'react-router-dom';

const EditPokemonModal = () => {

   
    const { onePokemon, isLoading, isSuccess, isError } = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();
    const params = useParams()
   
    const [modalIsOpen, setIsOpen] = useState(false);
   
    const [formData, setFormData] = useState({
      name: "",
      breed: "",
      type: "",
      description: ""
    });

  
    useEffect(() => {
      if (onePokemon) {
        setFormData({
          name: onePokemon?.name,
          breed: onePokemon?.breed,
          type: onePokemon?.type,
          description: onePokemon?.description
        });
      }
    }, [onePokemon]);
  
    const customStyles = {
      content: {
        width: "45%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        borderRadius: "8px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const {_id} = onePokemon
      const updatedPokemon = {
        _id,
        ...formData
      };
      
      dispatch(updateOnePokemon(updatedPokemon));
      closeModal();
    };


  return (
    <>
    <Link to={`/pokemon/${onePokemon?._id}`}><button 
      onClick={openModal}
      className="btn btn-warning"
    >
      Edit
    </button></Link>
    <div className="modal ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className="m-3 text-center text-lg font-medium">Update Pokemon</h2>

        <form onSubmit={handleSubmit}>

        <input type="text" className="form-control"  placeholder="Enter Name"
          name="name"
          value={formData?.name}
          onChange={handleChange}/>

          <input type="text" className="form-control my-3"  placeholder="Enter Breed" 
          name="breed"
          value={formData?.breed}
          onChange={handleChange}/>

          <select className="form-select my-3 required"
          name="type"
          value={formData?.type}
          onChange={handleChange}>
              <option value="" disabled>Select type...</option>
            <option>Electric</option>
            <option>Grass</option>
            <option>Water</option>
            <option>Fire</option>
          </select>


          <textarea
            style={{ width: "100%" }}
            name="description"
            value={formData?.description}
            onChange={handleChange}
            rows={7}
            className="w-full border border-gray-400 rounded outline-none"
          />
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="btn btn-success mx-3"
            >
              Save
            </button>
            <button
              className="btn btn-danger"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  </>
  )
}

export default EditPokemonModal
