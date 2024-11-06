import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(15)

  const addvalue=()=>{
    if(counter<=19){
      counter=counter+1;
      setcounter(counter);
    }
  }

  const removevalue=()=>{
    if(counter>=1){
      counter=counter-1;
      setcounter(counter);
    }
  }


  return (
    <>
     <h1>Counter project using react</h1>
     <h3>Counter value : {counter}</h3>
     <button onClick={addvalue}>Add value to {counter}</button>
     <br/>
     <button onClick={removevalue}>Remove value from {counter}</button>
    </>
  )
}

export default App
