import { useState } from 'react'

import './App.css'
import { useMemo } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [inputValue,setInputValue] = useState(1);

  let count = useMemo(() => {
    console.log("memo got called");
    let finalCount = 0;
    for(let i = 0;i<=inputValue;i++){
    finalCount = finalCount + i;
  }
  return finalCount;
},[inputValue]);
  


  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value)
      }} placeholder='Sum of numbers from 1 to n'></input>
      <br />
      sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter+1);
      }}>
        Counter ({counter}) 

      </button>

    </div>
  )
}

export default App
