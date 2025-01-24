import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos,setTodos] = useState([]);

  ;

  return (
    <>
      {todos.map(todo => < Todo title={todo.title} description ={todo.description}/>)}
    </>
  )
}

function Todo({title,description}){
  const [todos,setTodos] = useState([]);

  
  useEffect(() =>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos);
    })

  },[])
  return <div>
    <h1>{title}</h1>
    {description}
  </div>


}

export default App
