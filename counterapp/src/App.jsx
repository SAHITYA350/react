import { useState } from 'react';
import './App.css'
import './index.css'
function App() {

  
  const [counter, setCounter] = useState(0);
  const add = () => {
     setCounter((c) => c+1 )
   }

   const remove = () => {
    setCounter((po) => po - 1);
    setCounter((po) => po - 1);
    setCounter((po) => po - 1);
    setCounter((po) => po - 1);
    setCounter((po) => po - 1);
   }

  return (
    <>
     <h1>Chai aur sahitya</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={add} >Add</button> <br />
     <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
