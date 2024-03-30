import axios from "axios"

const API_URL = '/api/pokemon'

// Get All Pokemons//
export const getPokemons = async() => {
    const response = await axios.get(API_URL)
    return response.data
}

// Create New Pokemon//
export const newPokemon = async(formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
}

// Get Single Pokemon//
export const specificPokemon = async(id) => {
    const response = await axios.get(API_URL + '/' + id)
    return response.data
}


// Delete Pokemon//
export const deletePokemon = async(id) => {
    const response = await axios.delete(API_URL + '/' + id)
    return response.data
}

// Update Pokemon//

export const editPokemon = async(updatedPokemon) => {
    const response = await axios.put(API_URL, updatedPokemon)
    return response.data
}