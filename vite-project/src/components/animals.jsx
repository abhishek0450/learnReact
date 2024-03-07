

function Animals() {
    let animals = ["lion","cat","dog"];
  return (
    <ul>
    {animals.map((animal) => (
                        <li key={animal.toString()}>{animal}</li>
                        //key prop is used to uniquely identify the elements in the list {must be unique and not repeated}
                        //if not available, make some id for each element
                        ))}
    </ul>
  )
}

export default Animals