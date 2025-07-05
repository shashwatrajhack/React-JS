import { useState } from "react";

let counter = 4;


function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", description: "This is the first todo" },
    { id: 2, title: "Todo 2", description: "This is second todo" },

    { id: 3, title: "TOdo 3", description: "This is the third todo" },
  ]);

  function addTodo(){
    setTodos([...todos,{id:counter++ , title: Math.random(), description: Math.random()}]);
  }

  // const [title, setTitle] = React.useState("Hello from my vlog");

  // function updateTitile(){
  //   setTitle("Hello from my vlog " + Math.random());
  // }

  return <div>
    <button onClick={addTodo}> Add a todo</button>
    {todos.map(todo => <Todo key={todo.id} title = {todo.title} description = {todo.description} />)}
  </div>;
}



function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

// const Header = React.memo(function Header({title}){
//   return<div>
//     {title}
//   </div>
// })

export default App;
