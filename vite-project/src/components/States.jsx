import {useState} from 'react'

function States() {
    const [count, setCount] = useState(0)
    const [factor, setFactor] = useState(1)

    function incrementFactor() {
        setFactor(factor + 1)
    }
    function decrementFactor() {
        setFactor(factor - 1)
    
    }

    function increment() {
        setCount(count + factor)
    }
    function decrement() {
        setCount(count - factor)
    
    }

  return (
    <>
    <h2>Factor : {factor}</h2>
    <button onClick={incrementFactor}>+</button> &nbsp;
    <button onClick={decrementFactor}>-</button>
    <br/>   
    <hr/>
    <h1>This is my Counter : {count}</h1>
    <button onClick={increment}>Increment</button> &nbsp;
    <button onClick={decrement}>Dncrement</button>
    </>
  )
}

export default States