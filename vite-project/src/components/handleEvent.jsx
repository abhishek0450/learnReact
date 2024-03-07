

function HandleEvent() {
   function sayHello() {
    alert('Hello!')
   }
  return (
    <button onClick={sayHello}>
    click me
    </button>
  )
}

export default HandleEvent