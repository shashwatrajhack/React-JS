import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  const [inputValue,setInputValue] = useState(1);


  let count = 0;
  for(let i = 0;i<=inputValue;i++){
    count = count + i;
  };


  return (
    <div>
      
    </div>
  )
}

export default App
