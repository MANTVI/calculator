import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  // let Obj={
  //   Username:"John",
  //   btName:"Click me"
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black  rounder-lx mb-4'>Tailwind</h1>
     
      <Cards channel="hey" Username="John" btName="Click me"/>
      <Cards Username="Dela"/>
    </>
  )
}

export default App
