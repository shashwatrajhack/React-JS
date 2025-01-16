import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [todo,setTodo] = useState([]);

  useEffect(() =>{
    axios.get("https://sum-server.100xdevs.com/todos")

  },[]);

  return (
    <>
      
    </>
  )
}

export default App
