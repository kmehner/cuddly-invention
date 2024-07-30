// Class Component

// Import React & Component from react 
import React, { Component } from "react";
import Pet from "./Pet";
import '../src/PetStyles.css'; 

class PetList extends Component {
  render() {
    // Create our pet list 
    // const pets = [
    //   'Pet1', 
    //   'Pet2',
    //   'Pet3'
    // ]

    const pets = [
      {
        id: 1,
        name: "Lassie",
        type: "Dog",
        owner: "John Smith"
      },
      {
        id: 2, 
        name: "Tortuga",
        type: "tortoise", 
        owner: "Jane Smith"
      },
      {
        id: 3,
        name: "Larry",
        type: "Lizard", 
        owner: "Anthony Hernandez"
      }
    ]

    const filteredPets = pets.filter(pet => pet.name !== "Lassie");

    // Return the list of pets as JSX 
    return (
      <div className="pet-list">
        <h2>Pet List:</h2>
        
        {/* List out pets */}
        {/* pets.map((pet) => (tag of content you want to return)) */}
        <ul>
          
          {filteredPets.map((pet) => (
            <Pet key={pet.id} name={pet.name} type={pet.type} owner={pet.owner}/>
          ))}

        </ul>
      </div>
    )
  }
}

export default PetList; 