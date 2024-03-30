import React from 'react'
import '../styles/trainers.css'
import trainer from '../assets/ash4.png'


const Trainers = () => {
  return (
    <div className='trainer-container'>
        <h3 className="display-6 text-center">Trainer's Corner</h3>
        <div className='trainer-section'>
<div className='trainer-image'>
        <img id='trainer-img' src={trainer} alt="" />
</div>
        <div className='trainer-content'>
        <p className='trainer-para'>Welcome to the Trainer's Corner, where aspiring Pokémon trainers can find valuable tips, guides, 
            and strategies to enhance their skills and embark on successful journeys in the Pokémon world.
             Whether you're a novice trainer just starting your adventure or a seasoned veteran seeking advanced techniques, 
            this section is your ultimate resource for mastering the art of Pokémon training.</p>

            <ul style={{fontWeight : "bold"}}> 
                Guides and Tips
                <li>Battling Strategies: Learn about effective battle strategies, including type advantages, move sets, 
                    and team composition. Discover how to outsmart your opponents and emerge victorious in Pokémon battles.</li>
                <li>Training Techniques: Explore different methods for training your Pokémon to maximize their potential. From EV training to leveling up efficiently,
                     we'll help you raise strong and well-rounded Pokémon.</li>
                <li>Breeding Basics: Delve into the world of Pokémon breeding and discover the secrets to breeding Pokémon with desirable traits, abilities, 
                    and moves. Master the breeding mechanics and breed your way to success.</li>
            </ul>
            </div>
            </div>
    </div>
  )
}

export default Trainers
