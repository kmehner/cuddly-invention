/* 
What Is 'State' in ReactJS? 
The state is a built-in React object that is used to contain data or information about the component. 
A component's state can change over time; whenever it changes, the component re-renders.

STATE = memory of data 
When state changes, we update the page to reflect the change in data 

*/

import React, { Component } from "react";
import '../src/styles.css'

// Define the class = class ClassGreeting 
// Give the class component functionality = extends component 

class ClassGreeting extends Component {

  /* 
    Constructor () method is used to initialize an object's state in a class-based component
    Super() method is called to the constructor of the parent class 
    -> aka it can access and call the React.Component class functions 
   */

  constructor(props){
    super(props); 

    // Setting state of name 
    this.state = {
      name: this.props.initialName,
      pet: 'Turtle',
      isLoggedIn: false
    }

    // This line binds the changeName method to the current instance of the ClassGreeting component
    // Without this line of code, the changeName method would not be able to actually change the state  
    // The purpose of the bind method is to ensure that the this keyword inside the changeName method refers to the component instance itself, rather than being undefined or pointing to something else.
    this.changeName = this.changeName.bind(this); 

    // Bind the new method 
    this.changePet = this.changePet.bind(this); 

    // Bind the toggleLogin to the current instance of the component
    this.toggleLogin = this.toggleLogin.bind(this);

  }

  // Method to change state 
  changeName(){
    this.setState({name: 'Jane Doe'})
  }

  // Method to change state of turtle 
  changePet(){
    this.setState({pet: 'dog'})
  }

  toggleLogin() {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    })); 
  }
  

  render(){

    // Access state - name
    // const name = this.name
    const { name, pet, isLoggedIn } = this.state; 

    // Naming our paragraph tag to GRAB as te selected element in CSS from styles.css -> className attribute instead of Style attribute 
    return (
      <div>
        {/* If logged in = hello name, you own pet */}
        {/* If not logged in = welcome, please login */}
        { isLoggedIn ?(
            <p>Hello {name}, you own {pet}</p>
        ):( 
            <p>Welcome stranger! Please log in</p>
        )}

        {/* Login and out buttons (2 buttons) */}
        {!isLoggedIn ? (
        <button onClick={this.toggleLogin}>Log In</button>
        ) : (
          <button onClick={this.toggleLogin}>Log Out</button>
        )}


        {/* <p className="greeting">Hello, {name}! He owns a {pet}. This is a class-based greeting</p> */}
        {/* <button onClick={this.changeName}>Change Name</button> */}
        {/* <button onClick={this.changePet}>Change Pet</button> */}
      </div>
    )
  }
}

ClassGreeting.defaultProps = {
  initialName: 'John Doe',
}; 

export default ClassGreeting; 

