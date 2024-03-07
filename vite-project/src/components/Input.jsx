import {useState} from 'react'

function Input() {
    //multipleInputs
    const [name, setName] = useState({firstName : '' , lastName : ''})

    function click(e){
        e.preventDefault(); // prevents the default action of the form, which is to refresh the page
        console.log(name);
    }
  
    //onChange is important for input field as it will change the value of the input field
  return (
    <form>
        {/* <input type="text" value = {text} onChange = {(e)=>setText(e.target.value)}/>
        <h1>{text}</h1> */}
        <label>First Name :</label>&nbsp;
        <input type="text" 
        value = {name.firstName} 
        onChange = {(e)=>setName({...name, firstName: e.target.value})}
        /><br/>
        <label>Last Name :</label>&nbsp;
        <input type="text"
        value = {name.lastName} 
        onChange = {(e)=>setName({...name, lastName:e.target.value})}
        />
        <br/>
        <hr/>
        <button onClick={click}>
            Submit
        </button>
    </form>
  )
}

export default Input