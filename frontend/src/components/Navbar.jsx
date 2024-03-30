import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/pokelogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
 
   <Link to={'/'}><img id='logo' src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
        <li className="nav-item mx-2">
          <Link to={'/about'} className="nav-link" aria-current="page" href="#">About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to={'/trainers'} className="nav-link" href="#">Trainer's Corner</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to={'/news'} className="nav-link" href="#">News</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to={'/faq'} className="nav-link" href="#">FAQ</Link>
        </li>

       
    
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar
