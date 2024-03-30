const Pokemon = require("../model/pokemonModel");
const asyncHandler = require("express-async-handler");

// ****Add Pokemon****//
const addPokemon = asyncHandler(async (req, res) => {
  const { name, breed, description, type } = req.body;

  if (name && breed && description && type) {
    const newPokemon = await Pokemon.create({
      name,
      breed,
      type,
      description,
    });

    res.status(201).json(newPokemon);
  } else {
    return res.status(400).send({ msg: "Please Fill All Details!!" });
  }
});

// ****Remove Pokemon****//
const removePokemon = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (!pokemon) {
    res.status(404);
    throw new Error("Pokemon Not Found!!");
  } else {
    await Pokemon.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Pokemon Deleted!!",
    });
  }
});

// ****Get Single Pokemon****//

const singlePokemon = asyncHandler(async (req, res) => {
  const getPokemon = await Pokemon.findById(req.params.id);

  if (!getPokemon) {
    res.status(404);
    throw new Error("Pokemon Not Found!!");
  }
  res.status(200).json(getPokemon);
});

// ****Update Pokemon****//
const updatePokemon = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.body._id);

  if (!pokemon) {
    res.status(404);
    throw new Error("Pokemon Not Found!!");
  } else {
    const updatedPokemon = await Pokemon.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );

    if (!updatedPokemon) {
      res.status(500);
      throw new Error("Failed to update Pokemon");
    }
    res.status(200).json(updatedPokemon);
  }
});

// ****All Pokemons****//
const allPokemons = asyncHandler(async (req, res) => {
  const getPokemons = await Pokemon.find();

  if (!getPokemons) {
    res.status(404);
    throw new Error("Pokemons Not Found!!");
  }
  res.status(200).json(getPokemons);
});

module.exports = {
  addPokemon,
  removePokemon,
  singlePokemon,
  updatePokemon,
  allPokemons,
};
