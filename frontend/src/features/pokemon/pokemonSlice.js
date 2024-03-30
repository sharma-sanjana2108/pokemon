import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newPokemon, getPokemons, deletePokemon, specificPokemon, editPokemon } from "./pokemonService";
import { toast } from "react-toastify";

const initialState = {
    pokemons : [],
    onePokemon : null,
    updateSinglePokemon : null,
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : "",
    
}

const pokemonSlice = createSlice({
name : "pokemon",
initialState,
reducers : {},
extraReducers : (builder) => {
    
    builder

   // Get All Pokemons//
   .addCase(getAllPokemons.pending, (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.pokemons = [];
    state.message = "";
   })

   .addCase(getAllPokemons.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.pokemons = action.payload;
    state.message = "";
   })

   .addCase(getAllPokemons.rejected, (state, action) => {
    state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.pokemons = [];
        state.message = action.payload;
   })


   // Create New Pokemon//
   .addCase(createPokemon.pending, (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.onePokemon = null;
    state.message = "";
   })

   .addCase(createPokemon.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.onePokemon = action.payload;
    state.message = "";
   })

   .addCase(createPokemon.rejected, (state, action) => {
    state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.onePokemon = null;
        state.message = action.payload;
   })

   // Get Single Pokemon//
   .addCase(getOnePokemon.pending, (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.onePokemon = null;
    state.message = "";
   })

   .addCase(getOnePokemon.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.onePokemon = action.payload;
    state.message = "";
   })

   .addCase(getOnePokemon.rejected, (state, action) => {
    state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.onePokemon = null;
        state.message = action.payload;
   })

   // Delete Pokemon//
   .addCase(removePokemon.pending, (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.onePokemon = null;
    state.message = "";
   })

   .addCase(removePokemon.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.onePokemon = action.payload;
    state.message = "";
   })

   .addCase(removePokemon.rejected, (state, action) => {
    state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.onePokemon = null;
        state.message = action.payload;
   })

      // Update Pokemon//
      .addCase(updateOnePokemon.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.updateSinglePokemon = null;
        state.message = "";
       })
    
       .addCase(updateOnePokemon.fulfilled, (state, action) => {
    
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updateSinglePokemon = action.payload;
        state.message = "";
       })
    
       .addCase(updateOnePokemon.rejected, (state, action) => {
        state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.updateSinglePokemon = null;
            state.message = action.payload;
       })

}

})

export default pokemonSlice.reducer;


// Get All Pokemons//
export const getAllPokemons = createAsyncThunk("POKEMON/GETALL", async() => {
    try {
        return await getPokemons()
    } catch (error) {
        console.log(error)
    }
})

// Create New Pokemon//
export const createPokemon = createAsyncThunk("POKEMON/ADD", async(formData, thunkAPI) => {
    
    try {
        
        return await newPokemon(formData)
    } catch (error) {
       const message = error.response.data.msg
       return thunkAPI.rejectWithValue(message)
    }
})

// Get Single Pokemon//
export const getOnePokemon = createAsyncThunk("POKEMON/SINGLE", async(id) => {
    try {
        return await specificPokemon(id)
    } catch (error) {
        console.log(error)
    }
})

// Delete Pokemon//
export const removePokemon = createAsyncThunk("POKEMON/DELETE", async(id) => {
    try {
        return await deletePokemon(id)
    } catch (error) {
        console.log(error)
    }
})

// Update Pokemon//
export const updateOnePokemon = createAsyncThunk("POKEMON/UPDATE", async(updatedPokemon) => {
   
    try {
        return await editPokemon(updatedPokemon)
    } catch (error) {
        console.log(error)
    }
})

