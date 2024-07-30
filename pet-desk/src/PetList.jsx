// Class Component

// Import React & Component from react 
import React, { Component } from "react";
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

    // Return the list of pets as JSX 
    return (
      <div className="pet-list">
        <h2>Pet List:</h2>
        
        {/* List out pets */}
        {/* pets.map((pet) => (tag of content you want to return)) */}
        <ul>

          {pets.map((pet) => (
            <li key={pet.id}>{pet.name} the {pet.type} and their owner {pet.owner}</li>
          ))}

        </ul>
      </div>
    )
  }
}

export default PetList; 