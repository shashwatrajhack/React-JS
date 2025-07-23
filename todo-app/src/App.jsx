import { useState } from 'react'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo></AddTodo>
    <button>Add Todo</button>
      
    </>
  )
}



function AddTodo(){
  const [todo,setTodo] = useState(0);

  return <>

  <input type="text"  placeholder='add a todo' />

  
  </>

}

export default App
