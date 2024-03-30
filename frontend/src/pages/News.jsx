import React from "react";
import '../styles/news.css'
import BackButton from "../components/BackButton";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";
import news5 from "../assets/news5.png";
import news6 from "../assets/news6.png";

const News = () => {
  return (
    <div className="all-pokemons">
      <div className="container-fluid p-5 pokemons-container">
        <BackButton location={"/"} />
        <h3 className="display-6 text-secondary text-center mb-5">Pokemon News</h3>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            <div className="col">
              <div className="card border-0 text-center news-card shadow-md">
                <img src={news1} className="news-img" alt="..." />
                <div className="card-body">
                  <h6  className="card-title text-danger">
                  March 28, 2024
                  </h6>
                  <h6  className="card-text  text-secondary">
                  Video Games & Apps
                  </h6>
                  <h5 className="card-text">Volo & Togepi Arrive in Pokémon Masters EX from the Hisui Region</h5>
                </div>
              </div>

              
            </div>

            <div className="col ">
              <div className="card border-0 text-center news-card shadow-md ">
                <img src={news2} className="news-img" alt="..." />
                <div className="card-body">
                <h6  className="card-text  text-danger">
                  March 20, 2024
                  </h6>
                  <h6  className="card-text  text-secondary">
                Trading Card Game
                  </h6>
                  <h5 className="card-text">Bring Legendary Power to Your Collection with Koraidon & Miraidon Promo Cards
</h5>
                </div>
              </div>

              
            </div>

            <div className="col">
              <div className="card border-0 text-center news-card shadow-md">
                <img src={news3} className="news-img" alt="..." />
                <div className="card-body">
                <h6  className="card-title text-danger">
                  March 25, 2024
                  </h6>
                  <h6  className="card-text  text-secondary">
                General
                  </h6>
                  <h5 className="card-text">Learn All About Gardevoir in a New Episode of Beyond the Pokédex</h5>
                </div>
              </div>

              
            </div>

            <div className="col">
              <div className="card border-0 text-center news-card shadow-md">
                <img src={news4} className="news-img" alt="..." />
                <div className="card-body">
                <h6  className="card-title text-danger">
                  March 22, 2024
                  </h6>
                  <h6  className="card-text  text-secondary">
                Trading Card Game
                  </h6>
                  <h5 className="card-text">Details for the March 2024 Good Sleep Day Event in Pokémon Sleep</h5>
                </div>
              </div>

              
            </div>

            <div className="col">
              <div className="card border-0 text-center news-card shadow-md">
                <img src={news5} className="news-img" alt="..." />
                <div className="card-body">
                <h6  className="card-title text-danger">
                  March 21, 2024
                  </h6>
                  <h6  className="card-text  text-secondary">
               Video Games & Apps
                  </h6>
                  <h5 className="card-text">Pokémon Trading Card Game Live Adds Pokémon TCG: Scarlet & Violet—Temporal Forces</h5>
                </div>
              </div>

              
            </div>

            <div className="col">
              <div className="card border-0 text-center news-card shadow-md">
                <img src={news6} className="news-img" alt="..." />
                <div className="card-body">
                <h6  className="card-title text-danger">
                  March 25, 2024
                  </h6>
                  <h6  className="card-text  text-secondary">
                Animation
                  </h6>
                  <h5 className="card-text">Catch Little Pokémon in Pokémon Scarlet and Pokémon Violet Mass Outbreaks</h5>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
