//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todo } from '../components/Todo'

function App() {

  return (
    <div>
      <CreateTodo />
      <Todo></Todo>
    </div>
  )
}

export default App
