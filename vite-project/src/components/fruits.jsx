

function Fruits() {
    let fruits = [{id: 1,name: "apple", price : "110"},{id: 2, name : "banana", price : "60"},{id: 3, name :"grapes", price : "80"}];

    

  return (
    <div>
       const fruit = {fruits.map(fruit => 
        (<li key={fruit.id}>{fruit.name} - {fruit.price}</li>
        ))}

   
     

    </div>
  )
}

export default Fruits