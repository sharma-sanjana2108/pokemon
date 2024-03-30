import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Trainers from './pages/Trainers'
import AllPokemons from './pages/AllPokemons'
import NewPokemon from './pages/NewPokemon'
import SinglePokemon from './pages/SinglePokemon'
import EditPokemonModal from './components/EditPokemonModal'
import News from './pages/News'
import Faq from './pages/Faq'
import About from './pages/About'

const App = () => {

  return (
    <Router>
      <Navbar/>
  
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/trainers' element={ <Trainers/>}/>
        <Route path='/news' element={ <News/>}/>
        <Route path='/faq' element={ <Faq/>}/>
        <Route path='/allpokemons' element={ <AllPokemons/>}/>
        <Route path='/newpokemon' element={ <NewPokemon/>}/>
        <Route path='/pokemon/:id' element={ <SinglePokemon/>}/>
        <Route path='/pokemon/:_id' element={ <EditPokemonModal/>}/>
      </Routes>
    
    <ToastContainer/>
    </Router>
  )
}

export default App
