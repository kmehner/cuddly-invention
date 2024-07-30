import Greeting from "./Greeting"
import ClassGreeting from "./ClassGreeting"

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <Greeting customMessage="Hello there"/>
      <ClassGreeting />
    </div>
  )
}

// Allowing the environment to access app function (component)
export default App
