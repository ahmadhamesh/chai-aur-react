import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:'Ahmad',
    age:29
  }

  let newArr = [1,2,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username='chai aur code' btnText='click me' someObj={myObj} somearr={newArr} />
      <Card username='hamesh' btnText='Visit me' />
    </>
  )
}

export default App
