import React from "react";
import "../styles/home.css";
import ash from "../assets/ash3.png";
import charizard from "../assets/charizard.png";
import cute from "../assets/cute.png";
import pikachu from "../assets/pikachu.png";
import poke1 from "../assets/poke1.png";
import turtle from "../assets/turtle.png";
import poke2 from "../assets/poke2.png";
import red from "../assets/red.png";
import rat from "../assets/rat.png";
import snake from "../assets/snake.png";
import squirtle from "../assets/squirtle.png";
import pink from "../assets/pink.png";
import butterfly from "../assets/butterfly.png";
import dance from "../assets/dance.png";
import Trainers from "../pages/Trainers";
import { Link } from "react-router-dom";
import Faq from "../pages/Faq";
import About from "../pages/About";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to an enchanting Pokémon platform</h1>
          <p>
            {" "}
            where exploration knows no bounds! Immerse yourself in a captivating
            world where you can effortlessly discover, collect, and curate your
            very own list of Pokémon favorites.
          </p>
          <h5>
            {" "}
            <span>Find </span> all your favorite <span>Pokemon Here</span>{" "}
          </h5>
          <Link to={"/allpokemons"}>
            <button className="view-all"> View All Pokemons</button>
          </Link>
          <Link to={"/newpokemon"}>
            <button className="view-all"> Add New Pokemon</button>
          </Link>
        </div>
        <img id="ashimg" src={ash} alt="" />
      </div>

      <div className="container mt-4">
        <div className="horizontal-slider">
          <div className="image-container">
            <img id="sliderimg" src={pikachu} alt="Image 1" />
            <img id="sliderimg" src={charizard} alt="Image 2" />
            <img id="sliderimg" src={poke1} alt="Image 2" />
            <img id="sliderimg" src={turtle} alt="Image 2" />
            <img id="sliderimg" src={cute} alt="Image 2" />
            <img id="sliderimg" src={red} alt="Image 2" />
            <img id="sliderimg" src={poke2} alt="Image 2" />
            <img id="sliderimg" src={rat} alt="Image 2" />
            <img id="sliderimg" src={snake} alt="Image 2" />
            <img id="sliderimg" src={squirtle} alt="Image 2" />
            <img id="sliderimg" src={pink} alt="Image 2" />
            <img id="sliderimg" src={butterfly} alt="Image 2" />
            <img id="sliderimg" src={dance} alt="Image 2" />
          </div>
        </div>
      </div>

      {/* Other Components */}
      <About />
      <Trainers />
      <Faq />
    </>
  );
};

export default Home;
