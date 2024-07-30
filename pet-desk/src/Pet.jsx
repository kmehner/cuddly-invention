
// Functional component for individual pet 
const Pet = ({ name, type, owner }) => {

  // <li key={pet.id}>{pet.name} the {pet.type} and their owner {pet.owner}</li>
  return (
    <li>{name} the {type} and their owner {owner}</li>
  )
}

export default Pet; 