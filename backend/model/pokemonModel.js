const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true,
      
    },

    breed : {
        type : String,
        required: [true, "Please Add Breed"],
        trim : true,
    },

    description : {
        type : String,
        required: [true, "Please Add Description"],
        trim : true,
    },

    type : {
        type : String,
        required: [true, "Please Select Type"],
      enum: ["Fire", "Water", "Grass", "Electric"],
      trim : true,
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Pokemon", pokemonSchema)