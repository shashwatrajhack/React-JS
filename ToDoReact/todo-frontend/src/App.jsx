import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todo } from '../components/Todo';
//import axios from 'axios';

function App() {
  const [todos,setTodos] = useState([]);
  fetch("http://localhost:3000/todo").then(async function(res){
    const json = await res.json();
    setTodos(json.todos);

  })

  return (
    <div>
      <CreateTodo />
      <Todo todo={todos}></Todo>
    </div>
  )
}

export default App
