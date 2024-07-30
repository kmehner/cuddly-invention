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
  render(){
    // Naming our paragraph tag to GRAB as te selected element in CSS from styles.css -> className attribute instead of Style attribute 
    return <p className="greeting">Hello World! This is a class-based greeting</p>
  }
}

export default ClassGreeting; 