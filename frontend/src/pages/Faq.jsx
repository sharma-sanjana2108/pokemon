import React from 'react'
import '../styles/faq.css'

const Faq = () => {
  return (
    <div className="accordion faq-section" id="accordionExample">

    <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Q: What is Pokémon?
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    Pokémon, short for "Pocket Monsters," refers to a franchise created by Nintendo, Game Freak, and Creatures. It involves fictional creatures called Pokémon, which humans, known as Pokémon Trainers, catch and train to battle each other for sport.</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Q: How do I catch Pokémon?
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      In the Pokémon games, players encounter wild Pokémon in various locations such as grassy areas, caves, or water. To catch them, players use Poké Balls, which they throw at the Pokémon to capture them. Successful captures depend on factors like the Pokémon's health and status.
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Q: What are the different types of Pokémon?
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    Pokémon are categorized into various types based on their characteristics and abilities. Some common types include Electric, Grass, Water, Fire, Psychic, and Dragon. Each type has its strengths and weaknesses in battles.
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
    Q: What is the Pokémon Trainer's Journey?
    </button>
  </h2>
  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    The Pokémon Trainer's Journey is a central theme in Pokémon games. It involves players assuming the role of a Pokémon Trainer, embarking on an adventure to catch, train, and battle Pokémon. The ultimate goal is often to become the Pokémon Champion by defeating powerful Trainers in the Pokémon League.</div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
    Q: How do Pokémon Battles work?
    </button>
  </h2>
  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    Pokémon Battles are turn-based encounters between two Pokémon Trainers. Each Trainer selects their Pokémon to battle, and they take turns using moves to attack, defend, or support. The outcome depends on factors such as Pokémon types, move effectiveness, and strategy.</div>
  </div>
</div>
</div>
  )
}

export default Faq
