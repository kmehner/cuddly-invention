import React, { useState } from "react";
import styles from "./Greeting.module.css"

// FUNCTIONAL GREETING 
const Greeting = (props) => {
  // const [ var, methodToUpdateVar] = useState(initialValue)
  const [name, setName] = useState(props.initialName); 
  const [pet, setPet] = useState(props.initialPet); 

  var favoriteAnimal = 'Bird'; 

  const changeName = () => {
    setName('Jane Doe'); 
  };

  const changePet = () => {
    setPet("turkey"); 
  }

  const updateFavoriteAnimal = () => {
    console.log("Update favorite animal,", favoriteAnimal); // bird 
    favoriteAnimal = 'Cat';
    console.log(favoriteAnimal); // cat 
  }
 
  return (

    <div>
      <p className={styles.greeting}>Welcome, {name} to the world of React! This is a functional component.</p> 
      <p>He owns a {pet}</p>
      <p>His favorite animal is {favoriteAnimal}</p>
      <button onClick={changeName}>Change Name - Functional</button>
      <button onClick={changePet}>Change Pet</button>
      <button onClick={updateFavoriteAnimal}>Update favorite animal</button>
    </div>
  )
}

Greeting.defaultProps = {
  initialName: 'John Doe',
  initialPet: 'dog'
}

export default Greeting; // Allowing our application to access the greeting component
// console.log(Greeting()); 