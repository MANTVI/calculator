import { useState } from "react"
import './App.css'

function App() {
  
  // let counter=5
  let [counter,setCounter]=useState(5)
  const Addvalue=()=>{
    // console.log("Added value :",Math.random())
    if (counter<10){
      counter=counter+1
      setCounter(counter)
      console.log("counter:",counter)
    }
    else{
      alert("Cannot be greater then 10")
    }
  }
  const Removevalue=()=>{
    // console.log("Added value :",Math.random())
    if (counter>0){
      counter=counter-1
      setCounter(counter)
      console.log("counter:",counter)
    }
    else{
      alert("Cannot be lesser  then 0")
    }
    
  }
  return (
    <>
      <h1>COUNTER : {counter}</h1>
     <button 
      onClick={Addvalue}
     >Add Value by 1 </button><br />
     <button
     onClick={Removevalue}
     >Remove Value by 1</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
