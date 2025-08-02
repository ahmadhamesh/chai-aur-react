import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App !!</h1>
    </div>
  )
}



// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target: 'blank'
//     },
//     children: 'Click me to visit google'
// }

//this can use as correct object that can call directly
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser ="chai aur reactjs"

//this syntax is used by react that is created by react
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
  // <MyApp />
  // <App />
  // reactElement

  // anotherElement

  // reactElement

  // <App />

  reactElement
   
  
)
