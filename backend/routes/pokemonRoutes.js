const express = require('express');
const { addPokemon, removePokemon, allPokemons, updatePokemon, singlePokemon } = require('../controller/pokemonController');


const router = express.Router()

router.post('/', addPokemon)

router.delete('/:id', removePokemon)

router.get('/:id', singlePokemon)

router.put('/', updatePokemon)

router.get('/', allPokemons)

module.exports = router;