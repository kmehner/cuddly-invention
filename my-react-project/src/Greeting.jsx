import React from "react";
import styles from "./Greeting.module.css"

// FUNCTIONAL GREETING 
function Greeting(){

  // Adding inline styling 
  const greetingStyle = {
    color: "blue",
    backgroundColor: "lightblue", 
    padding: "10px",
    fontFamily: "Arial",
    textAlign: "center"
  };

  // Adding inline styling using Style tag to add greetingStyle 
  // return <p style={greetingStyle}>Welcome to the world of React! This is a functional component.</p>

  // Using ClassName to identify paragraph tag for our CSS using ClassName tag 
  return (
    <>
      <p className={styles.greeting}>Welcome to the world of React! This is a functional component.</p> 
      <p className={styles.farewell}>Farewell</p>
    </>
  )
}

export default Greeting; // Allowing our application to access the greeting component
// console.log(Greeting()); 