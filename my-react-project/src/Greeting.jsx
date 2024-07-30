import React, { useState } from "react";
import styles from "./Greeting.module.css"

// FUNCTIONAL GREETING 
const Greeting = (props) => {
  // const [ var, methodToUpdateVar] = useState(initialValue)
  const [name, setName] = useState(props.initialName); 
  const [pet, setPet] = useState(props.initialPet); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const customMessage = props.customMessage; 
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie", "John"]); 

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

  // Toggle logged in value 
  // setIsLoggedIn = !isLoggedIn

  // Login the user -> change the value of isLoggedIn to true 
  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  // Logout the user -> change the value of isLoggedIn to false 
  const handleLogoutClick = () => {
    setIsLoggedIn(false); 
    setName(props.initialName); /* When the user logs out, we want to reset the name */
  }
 
  return (

    <div>
      <p className={styles.greeting}>
        {/* Ternary operator: boolean ? (value if true) : (value if false) */}
        { isLoggedIn ? 
          `Hello, ${name}! Welcome back` 
          : 
          customMessage
        }
      </p>

      {!isLoggedIn ? (
        // If the user is not logged in, handleLoginClick
        <button onClick={setIsLoggedIn(!isLoggedIn)}>Log In</button>
      ) : (
        // If the user is logged in, log them out handleLogoutClick
        <button onClick={handleLogoutClick}>Log Out</button>
      )}

      <h1>This is a list of our favorite students at coding temple</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

    </div>

    // <div>
    //   <p className={styles.greeting}>Welcome, {name} to the world of React! This is a functional component.</p> 
    //   <p>He owns a {pet}</p>
    //   <p>His favorite animal is {favoriteAnimal}</p>
    //   <button onClick={changeName}>Change Name - Functional</button>
    //   <button onClick={changePet}>Change Pet</button>
    //   <button onClick={updateFavoriteAnimal}>Update favorite animal</button>
    // </div>
  )
}

Greeting.defaultProps = {
  initialName: 'John Doe',
  initialPet: 'dog',
}

export default Greeting; // Allowing our application to access the greeting component
// console.log(Greeting()); 