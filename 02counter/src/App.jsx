import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
  
  // let counter = 15

  const addValue = ()=>{
    
    // counter = counter+1
    setCounter(counter +1)
    // console.log("Clicked",counter)
    if(counter >=20){
      setCounter(counter)
    }

  }

  const removeValue = () => {
    setCounter(counter-1)

    if(counter ==0){
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
